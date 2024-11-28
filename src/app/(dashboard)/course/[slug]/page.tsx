import PageNotFound from "@/app/not-found";
import { IconBook, IconPlay, IconUsers } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { getCourseBySlug } from "@/lib/actions/couse.action";
import Image from "next/image";
import React from "react";

const page = async ({ params }: { params: { slug: string } }) => {
  const data = await getCourseBySlug({ slug: params.slug });
  if (!data) return <PageNotFound></PageNotFound>;
  const videoId = data.intro_url?.split("v=")[1];
  
  return (
    <div className="grid lg:grid-cols-[2fr,1fr] gap-10">
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
                className="w-full h-full object-fill"
              ></iframe>
            </>
          ) : (
            <Image
              src="https://cdn.dribbble.com/userupload/8256140/file/original-6f5e5527c0fa5298c7718c70164b9c44.png?resize=1024x768&vertical=center"
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
            <BoxInfo title="Lượt xem">{data.views}</BoxInfo>
            <BoxInfo title="Trình độ">Trung bình</BoxInfo>
            <BoxInfo title="Thời lượng">100h45p</BoxInfo>
          </div>
        </BoxSection>
        <BoxSection title="Yêu cầu">
          <div className="leading-normal">
            {data.info.requirements.map((r, index) => (
              <div key={index}>{r}</div>
            ))}
          </div>
        </BoxSection>
        <BoxSection title="Lợi ích">
          <div className="leading-normal">
            {data.info.benefits.map((b, index) => (
              <div key={index}>{b}</div>
            ))}
          </div>
        </BoxSection>
        <BoxSection title="Q.A">
          <div>
            {data.info.qa.map((qa, index) => (
              <div key={index}>
                <div>{qa.question}</div>
                <div>{qa.answer}</div>
              </div>
            ))}
          </div>
        </BoxSection>
      </div>
      <div>
        <div className="bg-white dark:bg-grayDarker rounded-lg p-5">
          <div className="flex items-center gap-x-2 mb-3">
            <strong className="text-primary text-xl font-bold">
              {data.price}
            </strong>
            <span className="text-slate-400 line-through text-sm">
              {data.sale_price}
            </span>
            <span className="ml-auto inline-block px-3 py-1 rounded-lg bg-primary/10 text-primary font-semibold text-sm">
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
    <div className="bg-white rounded-lg p-5">
      <h4 className="text-sm text-slate-400">{title}</h4>
      <h3 className="font-bold">{children}</h3>
    </div>
  );
}

export default page;
