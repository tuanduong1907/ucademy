import Link from "next/link";
import React from "react";
import { menuItems } from "@/constants";
import ActiveLink from "../common/ActiveLink";
import { TMenuItems } from "@/types";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { ModeToggle } from "../common";

const Sidebar = () => {
  return (
    <aside className="p-5 border-r flex flex-col bgDarkModer borderDarkMode">
      <Link href="/" className="logo font-bold text-3xl inline-block mb-5">
        <span className="text-primary">U</span>cademy
      </Link>
      <ul className="flex flex-col gap-2">
        {menuItems?.map((item, index) => (
          <MenuItem key={index} url={item.url} title={item.title} icon={item.icon} />
        ))}
      </ul>
      <div className="mt-auto flex items-center justify-end gap-5">
        <ModeToggle />
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <div className="py-2 px-4 rounded-lg bg-primary text-white inline-block">
            <SignInButton>Đăng nhập</SignInButton>
          </div>
        </SignedOut>
      </div>
    </aside>
  );
};

function MenuItem({ url = "/", title = "", icon }: TMenuItems) {
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
