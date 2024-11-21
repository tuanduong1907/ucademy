import React from "react";
import Link from "next/link";
import { TMenuItem } from "@/types";
import { menuItems } from "@/constants";
import { ActiveLink } from "../common";
import { UserButton } from "@clerk/nextjs";

const Sidebar = () => {
  return (
    <aside className="p-5 border-r border-gray-200 bg-white">
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
      <UserButton />
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
