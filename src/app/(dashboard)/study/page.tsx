import React from "react";
import Heading from "@/components/common/Heading";
import CourseItem from "@/components/course/CourseItem";
import { CourseGrid } from "@/components/common";
import { getAllCourse } from "@/lib/actions/couse.action";

const page = async () => {
  const courses = (await getAllCourse()) || [];
  return (
    <>
      <Heading>Khu vực học tập</Heading>
      <CourseGrid>
        {courses?.length > 0 &&
          courses?.map((item) => (
            <CourseItem data={item} key={item._id}></CourseItem>
          ))}
      </CourseGrid>
    </>
  );
};

export default page;
