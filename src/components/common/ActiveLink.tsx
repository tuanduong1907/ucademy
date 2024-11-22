"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TActiveLink } from "@/types";

const ActiveLink = ({ url, children }: TActiveLink) => {
  const pathname = usePathname();
  const isActive = url === pathname;
  return (
    <Link
      href={url}
      className={`p-3 rounded-md flex items-center gap-3 transition-all ${
        isActive
          ? "text-white bg-primary svg-animate"
          : "hover:text-primary hover:bg-primary/10 dark:text-grayDark"
      }`}
    >
      {children}
    </Link>
  );
};

export default ActiveLink;
