"use client";
type TodoProps = {
  id: string;
  title: string;
  complete: boolean;
  toggleTodo: (id: string, complete: boolean) => void;
  delete: (id: string) => void;
};

export default function TodoItem({
  id,
  title,
  complete,
  toggleTodo,
  delete: handleDelete,
}: TodoProps) {
  return (
    <li className="flex flex-row gap-2 items-center">
      <input
        id={id}
        type="checkbox"
        className="cursor-pointer peer"
        defaultChecked={complete}
        onChange={(e) => toggleTodo(id, e.target.checked)}
      />
      <label htmlFor={id} className="peer-checked:line-through text-3xl">
        {title}
      </label>
      {!complete && (
        <button
          onClick={() => handleDelete(id)}
          className="px-2 border border-slate-300 rounded-lg flex items-center justify-center mt-2"
        >
          Delete
        </button>
      )}
    </li>
  );
}
