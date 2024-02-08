import {
  OfflineCourseDurationsListModel,
  OfflineCourseItemModel,
  OfflineCourseListGroupedModel,
  OfflineCourseListModel,
  OfflineCourseListNamesModel,
  OfflineCourseSkillsListModel,
} from '@/models/offline-course.model';
import { ApplyOfflineCourseFormValidation } from '@/utils/validation/apply-offline-course';
import { RequestAnotherTimeValidation } from '@/utils/validation/offline-course';
import $apiClient from '..';

export class OfflineCourseService {
  static getOfflineCourseList(params: {
    [key: string]: string | string[];
  }): Promise<OfflineCourseListModel> {
    return $apiClient.get(`offline-courses/list`, {
      params,
    });
  }

  static getOfflineCourseItem(title: string): Promise<OfflineCourseItemModel> {
    return $apiClient.get(`offline-courses/${title}`);
  }

  static getOfflineCourseListNames(): Promise<OfflineCourseListNamesModel> {
    return $apiClient.get(`offline-courses/list/names`);
  }

  static getOfflineCourseGroupedList(): Promise<OfflineCourseListGroupedModel> {
    return $apiClient.get(`offline-courses/grouped/list`);
  }

  static getOfflineCourseSkillList(): Promise<OfflineCourseSkillsListModel> {
    return $apiClient.get(`offline-courses/skills/list`);
  }

  static getOfflineCourseDurationList(): Promise<OfflineCourseDurationsListModel> {
    return $apiClient.get(`offline-courses/durations/list`);
  }

  static applyOfflineCourse(
    offlineCourseId: number,
    data: ApplyOfflineCourseFormValidation,
  ): Promise<boolean> {
    return $apiClient.post(`offline-courses/${offlineCourseId}/apply`, data);
  }

  static requestTime(
    offlineCourseId: number,
    data: RequestAnotherTimeValidation,
  ): Promise<boolean> {
    return $apiClient.post(`offline-courses/${offlineCourseId}/request-time`, data);
  }
}
