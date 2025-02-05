"use client";
import { createtodo } from "@/actions/todo";
import Link from "next/link";

export default function New() {
  return (
    <div className="w-[500px] border border-slate-300 p-4 rounded-lg">
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">New</h1>
      </header>
      <form
        action={createtodo}
        className="flex gap-5 flex-col justify-center w-[95%]"
      >
        <input
          type="text"
          name="title"
          className="border border-slate-300 bg-transparent rounded px-4 py-1 w-[100%]"
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
    </div>
  );
}
