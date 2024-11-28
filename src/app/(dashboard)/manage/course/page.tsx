import Heading from "@/components/common/Heading";
import Link from "next/link";
import React from "react";

const page = async () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <Heading>Quản lý khóa học</Heading>
        <Link href="/manage/course/new">Tạo Khóa học</Link>
      </div>
    </div>
  );
};

export default page;
