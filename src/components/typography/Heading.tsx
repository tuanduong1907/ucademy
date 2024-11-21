import { TChildren } from "@/types";
import React from "react";

const Heading = ({ children }: TChildren) => {
  return <h1 className="text-3xl font-bold">{children}</h1>;
};

export default Heading;
