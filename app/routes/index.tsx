import { json, redirect } from "@remix-run/node";
import { createQuestion, getQuestions } from "~/services/questions.server";
import type { Question } from "~/services/questions.server";
import { useLoaderData } from "@remix-run/react";
import type { ActionArgs } from "@remix-run/node";
import Button from "~/components/Button";

type LoaderData = {
  questions: Question[];
};

export async function loader() {
  const data: LoaderData = { questions: await getQuestions() };
  return json(data);
}

export async function action({ request }: ActionArgs) {
  const formData = await request.formData();
  const title = formData.get("title");
  const question = await createQuestion({ title });
  return redirect(`/`);
}

export default function Index() {
  const { questions } = useLoaderData<LoaderData>();
  return (
    <div className="m-12">
      <h1 className="text-3xl font-bold text-cyan-500 mb-4">
        Interview Questions
      </h1>
      <form method="post" action="/?index">
        <input
          className="px-4 py-2 border w-96 rounded-lg mr-4"
          type="text"
          placeholder="Question"
          name="title"
        />
        <Button type="submit">Submit</Button>
      </form>
      <div className="grid grid-cols-1 my-8 max-w-3xl border rounded-lg ">
        {questions.map((question) => (
          <div
            key={question.id}
            className="border-t  bg-white last:rounded-b-lg first:rounded-t-lg first:border-none shadow-lg shadow-gray-200/50 p-4  cursor-pointer hover:shadow-md transition "
          >
            <p className="text-lg text-gray-800 font-medium">
              {question.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
