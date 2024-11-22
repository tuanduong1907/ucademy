import Heading from "@/components/typography/Heading";
import CourseItem from "@/components/course/CourseItem";
import { CourseGrid } from "@/components/common";
import createUser from "@/lib/actions/user.actions";

export default async function Home() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const user = await createUser({
    clerkId: "clerk_123",
    email: "duongtrongtuan@gmail.com",
    userName: "tuanduong1907",
  });
  return (
    <div>
      <Heading>Khám phá</Heading>
      <CourseGrid>
      <CourseItem></CourseItem>
        <CourseItem></CourseItem>
        <CourseItem></CourseItem>
      </CourseGrid>
    </div>
  );
}
