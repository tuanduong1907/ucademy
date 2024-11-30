import {
  IconBook,
  IconCart,
  IconComment,
  IconCourse,
  IconPlay,
  IconUsers,
} from "@/components/icons";
import { TMenuItem } from "@/types";
import { ECourseLevel, ECourseStatus } from "@/types/enums";

export const menuItems: TMenuItem[] = [
  {
    url: "/",
    title: "Khám phá",
    icon: <IconPlay className="size-5"></IconPlay>,
  },
  {
    url: "/study",
    title: "Khu vực học tập",
    icon: <IconBook className="size-5"></IconBook>,
  },
  {
    url: "/manage/course",
    title: "Quản lý khóa học",
    icon: <IconCourse className="size-5"></IconCourse>,
  },
  {
    url: "/manage/member",
    title: "Quản lý thành viên",
    icon: <IconUsers className="size-5"></IconUsers>,
  },
  {
    url: "/manage/order",
    title: "Quản lý đơn hàng",
    icon: <IconCart className="size-5"></IconCart>,
  },
  {
    url: "/manage/comment",
    title: "Quản lý bình luận",
    icon: <IconComment className="size-5"></IconComment>,
  },
];

export const courseStatus: {
  title: string;
  value: ECourseStatus;
  className?: string;
}[] = [
  {
    title: "Đã duyệt",
    value: ECourseStatus.APPROVED,
    className: "text-green-500 bg-green-500/5",
  },
  {
    title: "Chờ duyệt",
    value: ECourseStatus.PENDING,
    className: "text-orange-500 bg-orange-500/5",
  },
  {
    title: "Từ chối",
    value: ECourseStatus.REJECTED,
    className: "text-red-500 bg-red-500/5",
  },
];

export const courseLevel: { title: string; value: ECourseLevel }[] = [
  {
    title: "Dễ",
    value: ECourseLevel.BEGINER,
  },
  {
    title: "Trung bình",
    value: ECourseLevel.INTERMEDIATE,
  },
  {
    title: "Khó",
    value: ECourseLevel.ADVANCED,
  },
];

export const courseLevelTitle: Record<ECourseLevel, string> = {
  [ECourseLevel.BEGINER]: "Dễ",
  [ECourseLevel.INTERMEDIATE]: "Trung bình",
  [ECourseLevel.ADVANCED]: "Khó",
};

export const commonClassName = {
  status:
    "border border-current rounded-md font-medium px-3 py-1 select-none text-xs whitespace-nowrap",
  action:
    "size-8 rounded-md border borderDarkMode flex items-center justify-center bg-gray-100 hover:text-grayDarkest dark:hover:text-white hover:bg-white transition-all text-gray-500 dark:bg-transparent dark:hover:border-opacity-20",
  paginationButton:
    "size-10 rounded-md border borderDarkMode bgDarkMode flex items-center justify-center mt-5 hover:text-primary hover:border-primary transition-all font-semibold",
};
