import { ECourseLevel, ECourseStatus } from "@/types/enums";
import { Document, model, models, Schema } from "mongoose";

export interface ICourse extends Document {
  _id: string;
  title: string;
  image: string;
  intro_url: string;
  desc: string;
  price: number;
  sale_price: number;
  slug: string;
  status: ECourseStatus;
  created_at: Date;
  author: Schema.Types.ObjectId;
  level: ECourseLevel;
  views: number;
  rating: number[];
  info: {
    requirements: string[];
    benefit: string[];
    qa: {
      question: string;
      answer: string;
    }[];
  };
  lectures: Schema.Types.ObjectId[];
  _destroy?: boolean;
}

const courseSchema = new Schema<ICourse>({
  title: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
  },
  image: {
    type: String,
  },
  intro_url: {
    type: String,
  },
  price: {
    type: Number,
  },
  sale_price: {
    type: Number,
  },
  status: {
    type: String,
    enum: Object.values(ECourseStatus),
    default: ECourseStatus.PENDING,
  },
  level: {
    type: String,
    enum: Object.values(ECourseLevel),
    default: ECourseLevel.BEGINER,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  lectures: [
    {
      type: Schema.Types.ObjectId,
      ref: "Lecture",
    },
  ],
  rating: {
    type: [Number],
    default: [5],
  },
  views: {
    type: Number,
    default: 0,
  },
  info: {
    requirements: {
      type: [String],
    },
    benefit: {
      type: [String],
    },
    qa: [
      {
        question: {
          type: String,
        },
        answer: {
          type: String,
        },
      },
    ],
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
  _destroy: {
    type: Boolean,
    default: false,
  },
});

const Course = models.Course || model<ICourse>("Course", courseSchema);
export default Course;
