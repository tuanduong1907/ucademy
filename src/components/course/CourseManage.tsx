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
import { IconBook, IconDelete, IconEdit, IconEye } from "../icons";
import Link from "next/link";
import { ICourse } from "@/database/course.model";

const CourseManage = ({ courses }: { courses: ICourse[] }) => {
  return (
    <>
      <Table>
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
                        <h3 className="text-base font-bold">{course.title}</h3>
                        <h4 className="text-sm text-slate-500">
                          {new Date(course.created_at).toLocaleDateString(
                            "vi-VI"
                          )}
                        </h4>
                      </div>
                    </Link>
                  </TableCell>
                  <TableCell>
                    <span className="font-bold text-base text-primary">
                      {course.sale_price.toLocaleString()}đ
                    </span>
                  </TableCell>
                  <TableCell>
                    <span
                      className={cn(
                        commonClassName.status,
                      courseStatusItem?.className
                      )}
                    >
                      {courseStatusItem?.title}
                    </span>
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
                      <button className={commonClassName.action}>
                        <IconDelete className="size-5"></IconDelete>
                      </button>
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </>
  );
};

export default CourseManage;
