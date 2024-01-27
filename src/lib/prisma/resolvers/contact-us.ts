import { ApplicantType } from '@prisma/client';
import { ContactUsApplicantFormValidation } from '@/utils/validation/contact-us';
import prisma from '..';

export class ContactUsResolver {
  static async createContactUsApplicant(data: ContactUsApplicantFormValidation) {
    const { firstName, lastName, email, company, message, phoneNumber } = data;

    console.log({
      name: `${firstName} ${lastName}`,
      email,
      message,
      company,
      phoneNumber,
      for: ApplicantType.CONTACT_US_APPLICANT,
    });

    return prisma.applicant.create({
      data: {
        name: `${firstName} ${lastName}`,
        email,
        message,
        company,
        phoneNumber,
        for: ApplicantType.CONTACT_US_APPLICANT,
      },
    });
  }
}
