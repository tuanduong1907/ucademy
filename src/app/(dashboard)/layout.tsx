import Sidebar, { MenuItem } from "@/components/layouts/Sidebar";
import { menuItems } from "@/constants";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="wrapper pb-20 lg:pb-0 block lg:grid lg:grid-cols-[300px,minmax(0,1fr)]">
      <Sidebar></Sidebar>
      <ul className="flex justify-center gap-5 p-3 bgDarkMode border-t borderDarkMode lg:hidden fixed bottom-0 left-0 w-full z-30 h-16">
        {menuItems.map((item, index) => (
          <MenuItem
            onlyIcon
            key={index}
            title={item.title}
            url={item.url}
            icon={item.icon}
          ></MenuItem>
        ))}
      </ul>
      <div className="hidden lg:block"></div>
      <main className="p-5">{children}</main>
    </div>
  );
};

export default layout;
