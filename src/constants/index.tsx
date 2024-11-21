import { IconBook, IconCart, IconComment, IconCourse, IconPlay, IconUsers } from "@/components/icons";
import { TMenuItem } from "@/types";

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
