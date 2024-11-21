import PageNotFound from "@/app/not-found";
import { TChildren } from "@/types";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

const AdminLayout = async ({ children }: TChildren) => {
  const { userId }: { userId: string | null } = await auth();

  if (!userId) return redirect("/sign-in");
  return <div>{children}</div>;
};

export default AdminLayout;
