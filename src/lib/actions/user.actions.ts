/* eslint-disable @typescript-eslint/no-unused-vars */
"use server";

import User, { IUser } from "@/database/user.model";
import { connectToDatabase } from "../mongoose";
import { TCreateUserParam } from "@/types";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function createUser(params: TCreateUserParam) {
  try {
    connectToDatabase();
    const newUser = await User.create(params);
    return newUser;
  } catch (error) {}
}
