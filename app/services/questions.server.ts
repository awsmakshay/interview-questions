import type { Question } from "@prisma/client";
import { db } from "~/services/db.server";
export type { Question };

export const getQuestions = () => db.question.findMany();
export const createQuestion = ({
  title,
  description,
}: Pick<Question, "title" | "description">) => {
  return db.question.create({
    data: {
      title,
      description,
    },
  });
};
