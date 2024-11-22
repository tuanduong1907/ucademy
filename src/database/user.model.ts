import { EUserRole, EUserStatus } from "@/types/enums";
import { Document, model, models, Schema } from "mongoose";

// clerkId
export interface IUser extends Document {
  clerkId: string;
  name: string;
  userName: string;
  email: string;
  avatar: string;
  courses: Schema.Types.ObjectId[];
  status: EUserStatus;
  role: EUserRole;
  created_at: Date;
}

const userSchema = new Schema<IUser>({
  clerkId: {
    type: String,
  },
  name: {
    type: String,
  },
  userName: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  avatar: {
    type: String,
  },
  courses: [
    {
      type: Schema.Types.ObjectId,
      ref: "Course",
    },
  ],
  created_at: {
    type: Date,
    default: Date.now,
  },
  role: {
    type: String,
    enum: Object.values(EUserRole),
    default: EUserRole.USER,
  },
  status: {
    type: String,
    enum: Object.values(EUserStatus),
    default: EUserStatus.ACTIVE,
  },
});

const User = models.User || model<IUser>("User", userSchema); //nếu đã có model user thì truy cập vào || nếu chưa thì sẽ tạo ra 1 model có tên là "User" và truyền và khởi tạo của nó là userSchema đã khai báo ở trên
export default User;
