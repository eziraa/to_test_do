'use client'
import { useAppSelector } from "@/redux/store";
import LexicalEditor from "@/components/LexicalEditor";

export default function TodoDetail() {
  const selectedTodo = useAppSelector((state) => state.todo.selectedTodo);

  if (!selectedTodo) {
    return <div className="flex-1 p-6 text-gray-500">Select a TODO from the list</div>;
  }

  const updatedAt = new Date(selectedTodo.updatedAt || "").toDateString();
  const time = new Date(selectedTodo.updatedAt || "").toTimeString();
  return (
    <div className="flex-1  sm:p-6 bg-white text-slate-700 shadow-lg rounded-lg">
      <div className="flex flex-col sm:flex-row items-start sm:items-center w-full justify-between py-3">
      <h1 className="text-2xl font-bold">{selectedTodo.title}</h1>
      <p className="text-slate-500 py-1 text-sm">
        Last update at {updatedAt} {time}
      </p>
      </div>
      <LexicalEditor
        content={selectedTodo.description}
      />
      
    </div>
  );
}
