import {
  OfflineCourseItemModel,
  OfflineCourseListGroupedModel,
  OfflineCourseListModel,
  OfflineCourseListNamesModel,
} from '@/models/offline-course.model';
import $apiClient from '..';

export class OfflineCourseService {
  static getOfflineCourseList(queryString: string): Promise<OfflineCourseListModel> {
    return $apiClient.get(`offline-courses/list?${queryString}`);
  }
  static getOfflineCourseItem(id: string): Promise<OfflineCourseItemModel> {
    return $apiClient.get(`offline-courses/${id}`);
  }

  static getOfflineCourseListNames(): Promise<OfflineCourseListNamesModel> {
    return $apiClient.get(`offline-courses/list/names`);
  }

  static getOfflineCourseListGrouped(): Promise<OfflineCourseListGroupedModel> {
    return $apiClient.get(`offline-courses/list/groupBy`);
  }
}
