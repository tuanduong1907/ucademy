import { CourseGrid, Heading } from "@/components/common";
import { CourseItem } from "@/components/course";

export default async function Home() {

  return (
    <div>
      <Heading>Khám phá</Heading>
      <CourseGrid>
        <CourseItem />
        <CourseItem />
        <CourseItem />
        
      </CourseGrid>
    </div>
  );
}
