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
          ? "text-primary bg-primary/15 svg-animate font-medium"
          : "hover:text-primary hover:bg-primary/5 dark:text-grayDark"
      }`}
    >
      {children}
    </Link>
  );
};

export default ActiveLink;
