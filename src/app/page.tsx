import Link from "next/link";
import { prisma } from "@/db";
import TodoItem from "@/components/ItemTodo";
import { revalidatePath } from "next/cache";

function getTodos() {
  return prisma.todo.findMany();
}
async function toggleTodo(id: string, complete: boolean) {
  "use server";
  await prisma.todo.update({ where: { id }, data: { complete } });
  revalidatePath("/");
}

async function handleDelete(id: string) {
  "use server";
  await prisma.todo.delete({ where: { id } });
  revalidatePath("/");
}
export default async function Home() {
  const todos = await getTodos();
  return (
    <div className="w-[500px] ">
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">ToDos</h1>
        <Link
          className=" border border-slate-300 px-2 py-1 rounded outline-none"
          href="/new"
        >
          New
        </Link>
      </header>
      <ul className=" pl-4 flex flex-col gap-3 border border-slate-300 p-4 rounded-lg">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            {...todo}
            toggleTodo={toggleTodo}
            delete={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
}
