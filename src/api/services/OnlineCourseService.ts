import { OnlineCourseItemModel, OnlineCourseListModel } from '@/models/online-course.model';
import $apiClient from '..';

export class OnlineCourseService {
  static getOnlineCourseList(queryString: string): Promise<OnlineCourseListModel> {
    return $apiClient.get(`online-courses/list?${queryString}`);
  }
  static getOnlineCourseItem(id: string): Promise<OnlineCourseItemModel> {
    return $apiClient.get(`online-courses/${id}`);
  }
}
