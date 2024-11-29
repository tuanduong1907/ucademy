import { ICourse } from "@/database/course.model";

export type TActiveLink = {
  url: string;
  children: React.ReactNode;
};

export type TMenuItem = {
  url: string;
  title: string;
  icon?: React.ReactNode;
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
