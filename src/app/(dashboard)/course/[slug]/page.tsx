import PageNotFound from "@/app/not-found";
import { IconBook, IconCheck, IconPlay, IconUsers } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { courseLevelTitle } from "@/constants";
import { getCourseBySlug } from "@/lib/actions/couse.action";
import { getUserInfo } from "@/lib/actions/user.actions";
import { ECourseStatus, EUserRole } from "@/types/enums";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ILecture } from "@/database/lecture.model";

const page = async ({ params }: { params: { slug: string } }) => {
  const { userId }: { userId: string | null } = await auth();
  if (!userId) return null;
  const user = await getUserInfo({ userId });
  const data = await getCourseBySlug({ slug: params.slug });
  if (!data) return <PageNotFound></PageNotFound>;
  const videoId = data.intro_url?.split("v=")[1];
  const lectures = data.lectures || [];

  if (data.status !== ECourseStatus.APPROVED && user?.role !== EUserRole.ADMIN)
    return <PageNotFound></PageNotFound>;
  return (
    <div className="grid lg:grid-cols-[2fr,1fr] gap-10 items-start">
      <div>
        <div className="relative aspect-video mb-5">
          {data.intro_url ? (
            <>
              <iframe
                width="1280"
                height="720"
                src={`https://www.youtube.com/embed/${videoId}`}
                title="Phần 1: Giới Thiệu Dự Án | Thực Chiến Xây Dựng Website SOISCAM Với HTML, CSS, JavaScript"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                className="w-full h-full object-fill rounded-lg"
              ></iframe>
            </>
          ) : (
            <Image
              src={data.image}
              alt=""
              fill
              className="w-full h-full object-cover rounded-lg"
            ></Image>
          )}
        </div>
        <h1 className="font-bold text-3xl mb-5">{data.title}</h1>
        <BoxSection title="Mô tả">
          <div className="leading-normal">{data.desc}</div>
        </BoxSection>
        <BoxSection title="Thông tin">
          <div className="grid grid-cols-4 gap-5">
            <BoxInfo title="Bài học">100</BoxInfo>
            <BoxInfo title="Lượt xem">{data.views.toLocaleString()}</BoxInfo>
            <BoxInfo title="Trình độ">{courseLevelTitle[data.level]}</BoxInfo>
            <BoxInfo title="Thời lượng">100h45p</BoxInfo>
          </div>
        </BoxSection>
        <BoxSection title="Nội dung khóa học">
          <div>
            {lectures.map((lecture: ILecture, index) => (
              <Accordion className="mb-3" type="single" collapsible key={index}>
                <AccordionItem value={lecture._id}>
                  <AccordionTrigger>{lecture.title}</AccordionTrigger>
                  <AccordionContent></AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </BoxSection>
        <BoxSection title="Yêu cầu">
          {data.info.requirements.map((r, index) => (
            <div key={index} className="mb-3 flex items-center gap-2">
              <span className="flex-shrink-0 bg-primary size-5 rounded text-white p-1 flex items-center justify-center">
                <IconCheck className="size 5"></IconCheck>
              </span>
              <span>{r}</span>
            </div>
          ))}
        </BoxSection>
        <BoxSection title="Lợi ích">
          {data.info.benefits.map((b, index) => (
            <div key={index} className="mb-3 flex items-center gap-2">
              <span className="flex-shrink-0 bg-primary size-5 rounded text-white p-1 flex items-center justify-center">
                <IconCheck className="size 5"></IconCheck>
              </span>
              <span>{b}</span>
            </div>
          ))}
        </BoxSection>

        <BoxSection title="Q.A">
          <div>
            {data.info.qa.map((qa, index) => (
              <Accordion className="mb-3" type="single" collapsible key={index}>
                <AccordionItem value={qa.question}>
                  <AccordionTrigger>{qa.question}</AccordionTrigger>
                  <AccordionContent>{qa.answer}</AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </BoxSection>
      </div>
      <div className="flex flex-col gap-5 sticky top-5 right-0 ">
        <div className="bg-white dark:bg-grayDarker rounded-lg p-5">
          <div className="flex items-center gap-x-2 mb-3">
            <strong className="text-red-500 text-xl font-bold">
              {data.price.toLocaleString()}đ
            </strong>
            <span className="text-slate-400 line-through text-sm">
              {data.sale_price.toLocaleString()}đ
            </span>
            <span className="ml-auto inline-block px-3 py-1 rounded-lg bg-red-500/10 text-red-500 font-semibold text-sm">
              {Math.floor((data.price / data.sale_price) * 100)}%
            </span>
          </div>
          <h3 className="font-bold mb-2">Khóa học gồm có</h3>
          <ul className="mb-5 text-sm flex flex-col gap-3">
            <li className="flex items-center gap-2">
              <IconPlay className="size-4" />
              <span>30h học</span>
            </li>
            <li className="flex items-center gap-2">
              <IconPlay className="size-4" />
              <span>Video Full HD</span>
            </li>
            <li className="flex items-center gap-2">
              <IconUsers className="size-4" />
              <span>Có nhóm hỗ trợ</span>
            </li>
            <li className="flex items-center gap-2">
              <IconBook className="size-4" />
              <span>Tài liệu kèm theo</span>
            </li>
          </ul>
          <Button variant="primary" className="w-full">
            Mua khóa học
          </Button>
        </div>
      </div>
    </div>
  );
};

function BoxSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <h2 className="font-bold text-xl mb-5">{title}</h2>
      <div className="mb-10">{children}</div>
    </>
  );
}

function BoxInfo({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bgDarkMode borderDarkMode border rounded-lg p-5">
      <h4 className="text-sm text-slate-400">{title}</h4>
      <h3 className="font-bold">{children}</h3>
    </div>
  );
}

export default page;
