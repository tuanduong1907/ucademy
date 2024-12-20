/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { MouseEvent, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { commonClassName } from "@/constants";
import { IconCancel, IconCheck2, IconDelete, IconEdit } from "../icons";
import { Button } from "../ui/button";
import { createLecture, updateLecture } from "@/lib/actions/lecture.action";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { ILecture } from "@/database/lecture.model";
import { TCourseUpdateParams } from "@/types";
import { Input } from "../ui/input";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CourseUpdateContent = ({ course }: { course: TCourseUpdateParams }) => {
  const lectures = course.lectures;
  console.log(lectures);
  const [lectureEdit, setLectureEdit] = useState("");
  const [lectureIdEdit, setLectureIdEdit] = useState("");

  const handleAddNewLecture = async () => {
    try {
      const res = await createLecture({
        title: "Chương mới",
        course: course._id,
        order: lectures.length + 1,
        path: `/manage/course/update-content?slug=${course.slug}`,
      });
      if (res?.success) {
        toast.success("Thêm chương mới thành công!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteLecture = async (
    e: MouseEvent<HTMLSpanElement>,
    lectureId: string
  ) => {
    e.stopPropagation();
    try {
      Swal.fire({
        title: "Bạn muốn xóa chương này?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const res = await updateLecture({
            lectureId,
            updateData: {
              path: `/manage/course/update-content?slug=${course.slug}`,
              _destroy: true,
            },
          });
          if (res?.success) {
            toast.success("Xóa chương thành công!");
          }
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  const handleUpdateLecture = async (
    e: MouseEvent<HTMLSpanElement>,
    lectureId: string
  ) => {
    e.stopPropagation();
    try {
      const res = await updateLecture({
        lectureId,
        updateData: {
          title: lectureEdit,
          path: `/manage/course/update-content?slug=${course.slug}`,
        },
      });
      if (res?.success) {
        toast.success("Cập nhât thành công!");
        setLectureIdEdit("");
        setLectureEdit("");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      {lectures.map((lecture: ILecture) => (
        <Accordion
          className="mb-3"
          type="single"
          collapsible={!lectureEdit}
          key={lecture._id}
        >
          <AccordionItem value={lecture._id}>
            <AccordionTrigger>
              <div className="flex items-center gap-3 w-full justify-between pr-5">
                {lecture._id === lectureIdEdit ? (
                  <>
                    <div
                      className="w-full"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Input
                        placeholder="Tên chương"
                        defaultValue={lecture.title}
                        onChange={(e) => setLectureEdit(e.target.value)}
                      />
                    </div>
                    <div className="flex gap-2 ">
                      <span
                        className={commonClassName.action}
                        onClick={(e) => handleUpdateLecture(e, lecture._id)}
                      >
                        <IconCheck2 className="size-5" />
                      </span>
                      <span
                        className={commonClassName.action}
                        onClick={(e) => {
                          e.stopPropagation();
                          setLectureIdEdit("");
                        }}
                      >
                        <IconCancel className="size-5" />
                      </span>
                    </div>
                  </>
                ) : (
                  <>
                    <div>{lecture.title}</div>
                    <div className="flex gap-2 ">
                      <span
                        className={commonClassName.action}
                        onClick={(e) => {
                          e.stopPropagation();
                          setLectureIdEdit(lecture._id);
                        }}
                      >
                        <IconEdit className="size-5" />
                      </span>
                      <span
                        onClick={(e) => handleDeleteLecture(e, lecture._id)}
                        className={commonClassName.action}
                      >
                        <IconDelete className="size-5" />
                      </span>
                    </div>
                  </>
                )}
              </div>
            </AccordionTrigger>
            <AccordionContent></AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
      <Button className="mt-5" onClick={handleAddNewLecture}>
        Thêm chương mới
      </Button>
    </div>
  );
};

export default CourseUpdateContent;
