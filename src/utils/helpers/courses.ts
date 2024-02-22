export const generateCourseName = (courseName: string) =>
  courseName.trim().replaceAll(' ', '-').replaceAll('/', '-');
