import React from "react";
import Heading from "@/components/typography/Heading";
import CourseItem from "@/components/course/CourseItem";
import { CourseGrid } from "@/components/common";

const page = () => {
  return (
    <>
      <Heading>Khu vực học tập</Heading>
      <CourseGrid>
        <CourseItem></CourseItem>
        <CourseItem></CourseItem>
        <CourseItem></CourseItem>
      </CourseGrid>
    </>
  );
};

export default page;
