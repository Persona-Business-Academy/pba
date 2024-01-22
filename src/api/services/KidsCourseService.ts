import {
  KidsCourseGroupListModel,
  KidsCourseItemModel,
  KidsCourseListModel,
  KidsCourseListNamesModel,
} from '@/models/kids-course.model';
import $apiClient from '..';

export class KidsCourseService {
  static getKidsCourseList(params: { [key: string]: string }): Promise<KidsCourseListModel> {
    return $apiClient.get(`kids-courses/list`, { params });
  }
  static getKidsCourseItem(id: string): Promise<KidsCourseItemModel> {
    return $apiClient.get(`kids-courses/${id}`);
  }
  static getOfflineCourseListNames(): Promise<KidsCourseListNamesModel> {
    return $apiClient.get(`kids-courses/list/names`);
  }
  static getOfflineCourseGroupedList(): Promise<KidsCourseGroupListModel> {
    return $apiClient.get(`kids-courses/grouped/list`);
  }
}
