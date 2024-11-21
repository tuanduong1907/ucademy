import { TChildren } from "@/types";
import React from "react";

const CourseGrid = ({ children }: TChildren) => {
  return (
    <div className="grid xl:grid-cols-3 2xl:grid-cols-4 gap-8 mt-8">
      {children}
    </div>
  );
};

export default CourseGrid;
