import { CourseGrid, Heading } from "@/components/common";
import { CourseItem } from "@/components/course";
import React from "react";

const StudyPage = () => {
  return (
    <div>
      <Heading>Khu vực học tập</Heading>
      <CourseGrid>
        <CourseItem />
        <CourseItem />
        <CourseItem />
      </CourseGrid>
    </div>
  );
};

export default StudyPage;
