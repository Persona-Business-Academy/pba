import { UserProfileFormData } from '@/utils/models/auth';
import $apiClient from '..';

export class UserService {
  static updateUserProfile(input: UserProfileFormData) {
    return $apiClient.post('user/update-profile', input);
  }
}
