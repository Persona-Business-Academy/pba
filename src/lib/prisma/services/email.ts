import sgMail from '@sendgrid/mail';

enum TemplateIdsEnum {
  emailVerificationTemplateId = 'd-11c7313df6e94ae99f64e5db3e3dd7ac',
}

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

class Email {
  static formatEmails(emails: string[]): { email: string }[] {
    return emails?.map(email => ({ email }));
  }

  async sendConfirmationCodeEmail(
    email: string,
    confirmationCode: number,
    userFirstName: string,
  ): Promise<any> {
    return this.sendEmail(email, {
      template_id: TemplateIdsEnum.emailVerificationTemplateId,
      personalizations: [
        {
          to: email,
          dynamic_template_data: {
            userFirstName,
            link: `${process.env.NEXTAUTH_URL}/email-confirmation/${confirmationCode}`,
          },
        },
      ],
    });
  }

  async sendForgotPasswordEmail(
    email: string,
    confirmationCode: number,
    userFirstName: string,
  ): Promise<any> {
    return this.sendEmail(email, {
      template_id: TemplateIdsEnum.emailVerificationTemplateId,
      personalizations: [
        {
          to: email,
          dynamic_template_data: {
            userFirstName,
            link: `${process.env.NEXTAUTH_URL}/email-confirmation/${confirmationCode}`,
          },
        },
      ],
    });
  }

  async sendEmail(to: string, data: any = {}, from: string = `training@pba.am`): Promise<any> {
    console.log({ data, to });
    try {
      const message = {
        to,
        from,
        ...data,
      };
      return await sgMail.send(message);
    } catch (error: any) {
      console.error(error);

      if (error.response) {
        console.error(error.response.body);
      }
    }
  }
}

const instance = new Email();

export { instance as Email };
