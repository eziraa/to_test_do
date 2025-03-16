"use client";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { selectTodo } from "@/redux/slices/todo.slice";
export default function Sidebar() {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todo.todos);
  const selectedTodo = useSelector((state: RootState) => state.todo.selectedTodo);

  return (
    <aside className="w-80 bg-gray-100 p-4 h-screen">
      <h2 className="text-xl font-bold mb-4">TODO</h2>
      <div className="space-y-2">
        {todos.map((todo) => (
          <button
            key={todo.id}
            onClick={() => dispatch(selectTodo(todo.id))}
            className={`block w-full p-3 text-left rounded-lg transition ${
              selectedTodo?.id === todo.id ? "bg-white border-2 border-green-500 shadow-md" : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            <h3 className="font-semibold">{todo.title}</h3>
            <p className="text-sm text-gray-600">{todo.description}</p>
            <span className="text-xs text-gray-500">{todo.createdAt}</span>
          </button>
        ))}
      </div>
    </aside>
  );
}
