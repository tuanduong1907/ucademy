import { ICourse } from "@/database/course.model";
import { ILecture } from "@/database/lecture.model";

export type TActiveLink = {
  url: string;
  children: React.ReactNode;
};

export type TMenuItem = {
  url: string;
  title: string;
  icon?: React.ReactNode;
  onlyIcon?: boolean;
};

export type TChildren = {
  children: React.ReactNode;
};

// User
export type TCreateUserParam = {
  clerkId: string;
  userName: string;
  email: string;
  name?: string;
  avatar?: string;
};

// Couse
export type TCreateCouseParams = {
  title: string;
  slug: string;
  author: string;
};

export type TUpdateCourseParams = {
  slug: string;
  updateData: Partial<ICourse>;
  path?: string;
};

export interface TCourseUpdateParams extends Omit<ICourse, "lectures"> {
  lectures: ILecture[];
}

// Lecture
export type TCreateLectureParams = {
  course: string;
  title?: string;
  order?: number;
  path?: string;
};

export type TUpdateLectureParams = {
  lectureId: string;
  updateData: {
    title?: string;
    order?: number;
    _destroy?: boolean;
    path?: string;
  };
};
