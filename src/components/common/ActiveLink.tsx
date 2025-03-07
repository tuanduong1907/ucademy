"use client";
import { ActiveLinkProps } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";


const ActiveLink = ({ url, children }: ActiveLinkProps) => {
  const pathname = usePathname();
  const isActive = url === pathname;

  return (
    <Link
      href={url}
      className={`p-3 rounded-md flex items-center gap-3 transition-all ${
        isActive ? "text-white bg-primary svg-animate" : "hover:text-primary dark:text-white/50 hover:bg-primary/10"
      }`}
    >
      {children}
    </Link>
  );
};

export default ActiveLink;
