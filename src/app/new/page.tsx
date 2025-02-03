"use client";
import { createtodo } from "@/actions/todo";
import Link from "next/link";

export default function New() {
  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">New</h1>
      </header>
      <form action={createtodo} className="flex gap-5 flex-col w-[700px]">
        <input
          type="text"
          name="title"
          className="border border-slate-300 bg-transparent rounded"
        />
        <div className="flex gap-5 items-center justify-end">
          <Link href="/" className="border border-slate-300 p-2 rounded-lg">
            Cancel
          </Link>
          <button
            type="submit"
            className="border border-slate-300 p-2 rounded-lg"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
