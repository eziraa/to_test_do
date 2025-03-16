'use client'
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export default function TodoDetail() {
  const selectedTodo = useSelector((state: RootState) => state.todo.selectedTodo);

  if (!selectedTodo) {
    return <div className="flex-1 p-6 text-gray-500">Select a TODO from the list</div>;
  }

  return (
    <div className="flex-1 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold">{selectedTodo.title}</h1>
      <p className="text-gray-500">{selectedTodo.createdAt}</p>
      <div className="mt-4 border p-3 rounded-lg">
        <p className="text-gray-700">{selectedTodo.description}</p>
      </div>
    </div>
  );
}
