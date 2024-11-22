"use client";
import React from "react";
import Link from "next/link";
import { TMenuItem } from "@/types";
import { menuItems } from "@/constants";
import { ActiveLink } from "../common";
import { useAuth, UserButton } from "@clerk/nextjs";
import { ModeToggle } from "../common/ModeToggle";
import { IconUsers } from "../icons";

const Sidebar = () => {
  const { userId } = useAuth();
  return (
    <aside className="p-5 border-r border-gray-200 bg-white dark:bg-grayDarker dark:border-opacity-10 flex flex-col">
      <div className="font-bold text-3xl">
        <Link href="/" className="inline-block mb-5">
          <span className="text-primary">U</span>cademy
        </Link>
      </div>
      <ul className="flex flex-col gap-3">
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            title={item.title}
            url={item.url}
            icon={item.icon}
          ></MenuItem>
        ))}
      </ul>
      <div className="mt-auto flex items-center justify-end gap-5">
        <ModeToggle></ModeToggle>
        {!userId ? (
          <Link href="/sign-in">
            <IconUsers className="size-8 rounded-lg bg-primary text-white flex items-center justify-center p-1"></IconUsers>
          </Link>
        ) : (
          <UserButton />
        )}
      </div>
    </aside>
  );
};

function MenuItem({ url = "/", title = "", icon }: TMenuItem) {
  return (
    <li>
      <ActiveLink url={url}>
        {icon}
        {title}
      </ActiveLink>
    </li>
  );
}

export default Sidebar;
