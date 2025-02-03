"use server";

import { prisma } from "@/db";
import { redirect } from "next/navigation";

async function createtodo(data: FormData) {
  console.log(data);
  const title = data.get("title")?.valueOf();

  if (typeof title !== "string" || title.length === 0) {
    throw new Error("Invalid Title");
  }
  await prisma.todo.create({ data: { title, complete: false } });
  redirect("/");
}

export { createtodo };
