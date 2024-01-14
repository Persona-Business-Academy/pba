import { OfflineCourseItemModel, OfflineCourseListModel } from '@/models/offline-course.model';
import $apiClient from '..';

export class OfflineCourseService {
  static getKidsCourseList(queryString: string): Promise<OfflineCourseListModel> {
    return $apiClient.get(`kids-courses/list?${queryString}`);
  }
  static getKidsCourseItem(id: string): Promise<OfflineCourseItemModel> {
    return $apiClient.get(`kids-courses/${id}`);
  }
}
