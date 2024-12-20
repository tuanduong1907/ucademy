"use client";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import { commonClassName, courseStatus } from "@/constants";
import { cn } from "@/lib/utils";
import {
  IconArrowLeft,
  IconArrowRight,
  IconBook,
  IconDelete,
  IconEdit,
  IconEye,
} from "../icons";
import Link from "next/link";
import { ICourse } from "@/database/course.model";
import Swal from "sweetalert2";
import { updateCourse } from "@/lib/actions/couse.action";
import { ECourseStatus } from "@/types/enums";
import toast from "react-hot-toast";
import Heading from "../common/Heading";
import { Input } from "../ui/input";
const CourseManage = ({ courses }: { courses: ICourse[] }) => {
  const handleDeleteCourse = (slug: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await updateCourse({
          slug,
          updateData: {
            status: ECourseStatus.PENDING,
            _destroy: true,
          },
          path: "/manage/course",
        });
        toast.success("Xóa khóa học thành công!");
      }
    });
  };
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleChangeStatus = (slug: string, status: string) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, update!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await updateCourse({
            slug,
            updateData: {
              status: ECourseStatus.PENDING
                ? ECourseStatus.APPROVED
                : ECourseStatus.PENDING,
              _destroy: false,
            },
            path: "/manage/course",
          });
          toast.success("Cập nhật trạng thái thành công!");
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Link
        href="/manage/course/new"
        className="size-10 rounded-full bg-primary flexCenter fixed right-5 bottom-5 animate-bounce"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </Link>
      <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-10 gap-5">
        <Heading className="flex-shrink-0">Quản lý khóa học</Heading>
        <div className="w-full lg:w-[500px]">
          <Input placeholder="Tìm kiếm khóa học..."></Input>
        </div>
      </div>
      <Table className="table-responsive">
        <TableHeader>
          <TableRow>
            <TableHead>Thông tin</TableHead>
            <TableHead>Giá</TableHead>
            <TableHead>Trạng thái</TableHead>
            <TableHead>Hành động</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {courses?.length > 0 &&
            courses.map((course) => {
              const courseStatusItem = courseStatus.find(
                (item) => item.value === course.status
              );
              return (
                <TableRow key={course.slug}>
                  <TableCell>
                    <Link
                      href={`/course/${course.slug}`}
                      target="_blank"
                      className="flex items-center gap-2 w-max"
                    >
                      <Image
                        alt={course.title}
                        src={course.image}
                        width={160}
                        height={160}
                        className="flex-shrink-0 w-20 h-20 rounded-sm object-cover"
                      />
                      <div className="flex flex-col gap-1">
                        <h3 className="text-sm lg:text-base font-bold">
                          {course.title}
                        </h3>
                        <h4 className="text-sm text-slate-500">
                          {new Date(course.created_at).toLocaleDateString(
                            "vi-VI"
                          )}
                        </h4>
                      </div>
                    </Link>
                  </TableCell>
                  <TableCell>
                    <span className="font-bold text-base text-red-500">
                      {course.sale_price.toLocaleString()}đ
                    </span>
                  </TableCell>
                  <TableCell>
                    <button
                      type="button"
                      onClick={() =>
                        handleChangeStatus(course.slug, course.status)
                      }
                      className={cn(
                        commonClassName.status,
                        courseStatusItem?.className
                      )}
                    >
                      {courseStatusItem?.title}
                    </button>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Link
                        href={`/course/${course.slug}`}
                        target="_blank"
                        className={commonClassName.action}
                      >
                        <IconEye className="size-5"></IconEye>
                      </Link>
                      <Link
                        href={`/manage/course/update-content?slug=${course.slug}`}
                        className={commonClassName.action}
                      >
                        <IconBook className="size-5"></IconBook>
                      </Link>
                      <Link
                        href={`/manage/course/update?slug=${course.slug}`}
                        className={commonClassName.action}
                      >
                        <IconEdit className="size-5"></IconEdit>
                      </Link>
                      <button
                        onClick={() => handleDeleteCourse(course.slug)}
                        className={commonClassName.action}
                      >
                        <IconDelete className="size-5"></IconDelete>
                      </button>
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
      <div className="flex justify-end gap-3">
        <button className={commonClassName.paginationButton}>
          <IconArrowLeft className="size-6"></IconArrowLeft>
        </button>
        <button className={commonClassName.paginationButton}>
          <IconArrowRight className="size-6"></IconArrowRight>
        </button>
      </div>
    </>
  );
};

export default CourseManage;
