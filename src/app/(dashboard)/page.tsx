import Heading from "@/components/common/Heading";
import CourseItem from "@/components/course/CourseItem";
import { CourseGrid } from "@/components/common";
import { getAllCourse } from "@/lib/actions/couse.action";

export default async function Home() {
  const courses = (await getAllCourse()) || [];
  return (
    <div>
      <Heading>Khám phá</Heading>
      <CourseGrid>
        {courses?.length > 0 &&
          courses?.map((item) => <CourseItem data={item} key={item._id}></CourseItem>)}
      </CourseGrid>
    </div>
  );
}
