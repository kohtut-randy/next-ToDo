"use client";
type TodoProps = {
  id: string;
  title: string;
  complete: boolean;
  toggleTodo: (id: string, complete: boolean) => void;
};

export default function TodoItem({
  id,
  title,
  complete,
  toggleTodo,
}: TodoProps) {
  return (
    // Remove the semicolon here!
    <li className="flex gap-1 items-center">
      <input
        id={id}
        type="checkbox"
        className="cursor-pointer peer"
        defaultChecked={complete}
        onChange={(e) => toggleTodo(id, e.target.checked)}
      />
      <label htmlFor={id} className="peer-checked:line-through">
        {title}
      </label>
    </li>
  );
}
