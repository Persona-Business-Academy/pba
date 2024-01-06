import { OfflineCourseItemModel, OfflineCourseListModel } from '@/models/offline-course.model';
import $apiClient from '..';

export class OfflineCourseService {
  static getOfflineCourseList(queryString: string): Promise<OfflineCourseListModel> {
    console.log(queryString);
    return $apiClient.get(`offline-courses/list?${queryString}`);
  }
  static getOfflineCourseItem(id: string): Promise<OfflineCourseItemModel> {
    return $apiClient.get(`offline-courses/${id}`);
  }
}
