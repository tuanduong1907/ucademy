import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IconClock, IconEye, IconStar } from "../icons";

const CourseItem = () => {
  const courseInfo = [
    {
      title: "3000",
      icon: (className?: string) => <IconEye className={className}></IconEye>,
    },
    {
      title: "5.0",
      icon: (className?: string) => <IconStar className={className}></IconStar>,
    },
    {
      title: "3h30p",
      icon: (className?: string) => (
        <IconClock className={className}></IconClock>
      ),
    },
  ];
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 relative">
      <Link href="#" className="absolute inset-0 z-20"></Link>
      <div className=" h-[200px] relative">
        <Image
          width={600}
          height={400}
          className="w-full h-full object-cover rounded-lg"
          src="https://cdn.dribbble.com/userupload/8256140/file/original-6f5e5527c0fa5298c7718c70164b9c44.png?resize=1024x768&vertical=center"
          alt=""
          sizes="@media (min-width:640) 300px, 100vw"
        ></Image>
        <span className="inline-block px-3 py-1 rounded-full absolute top-3 right-3 z-10 text-white font-medium bg-green-500 text-xs">
          New
        </span>
      </div>
      <div className="pt-4">
        <h3 className="font-bold text-lg mb-3">
          Khóa học Nextjs Pro - Xây dựng E-learning System
        </h3>
        <div className="flex item-scenter gap-x-3 text-xs text-gray-500">
          {courseInfo.map((item, index) => (
            <div key={index} className="flex items-center gap-x-1">
              {item.icon("size-4")}
              <span>{item.title}</span>
            </div>
          ))}
          <span className="text-base font-bold text-primary ml-auto">
            799.00đ
          </span>
        </div>
      </div>
    </div>
  );
};

export default CourseItem;
