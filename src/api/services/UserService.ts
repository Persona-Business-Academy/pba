import { ChangePasswordValidation, UserProfileFormValidation } from '@/utils/validation';
import $apiClient from '..';

export class UserService {
  static updateUserProfile(input: UserProfileFormValidation): Promise<number> {
    return $apiClient.post('user/update-profile', input);
  }
  static changeUserPassword(input: ChangePasswordValidation): Promise<number> {
    return $apiClient.post('user/update-password', input);
  }
}
