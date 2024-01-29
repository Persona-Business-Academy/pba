import { ContactUsApplicantFormValidation } from '@/utils/validation/contact-us';
import $apiClient from '..';

export class ContactUsService {
  static createContactUsApplicant(input: ContactUsApplicantFormValidation): Promise<boolean> {
    return $apiClient.post('/contact-us', input);
  }
}
