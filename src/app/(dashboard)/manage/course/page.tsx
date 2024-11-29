import Heading from "@/components/common/Heading";
import CourseManage from "@/components/course/CourseManage";
import { Button } from "@/components/ui/button";
import { getAllCourse } from "@/lib/actions/couse.action";
import Link from "next/link";
import React from "react";

const page = async () => {
  const courses = (await getAllCourse()) || [];
  console.log(courses);

  return (
    <div>
      <div className="flex items-center justify-between mb-10">
        <Heading>Quản lý khóa học</Heading>
        <Link href="/manage/course/new">
          <Button variant="primary">Tạo Khóa học</Button>
        </Link>
      </div>
      <CourseManage
        courses={JSON.parse(JSON.stringify(courses))}
      ></CourseManage>
    </div>
  );
};

export default page;
