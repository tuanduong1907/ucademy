import CourseManage from "@/components/course/CourseManage";
import { getAllCourse } from "@/lib/actions/couse.action";
import React from "react";

const page = async () => {
  const courses = (await getAllCourse()) || [];
  return (
    <div>
      <CourseManage
        courses={JSON.parse(JSON.stringify(courses))}
      ></CourseManage>
    </div>
  );
};

export default page;
