"use client";
import Image from "next/image";
import {PictureInPicture, Search} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { selectTodo } from "@/redux/slices/todo.slice";
import { shortenText } from "@/utils/text.util";
import SearchBox from "./Search";
export default function Sidebar() {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todo.todos);
  const selectedTodo = useSelector((state: RootState) => state.todo.selectedTodo);

  return (
    <aside className="w-80 bg-gray-100 custom-scrollbar text-slate-700 p-4 h-screen">
      
      <div className="flex items-center justify-between py-2">
        <div className="flex items-center gap-2 rounded-md bg-slate-900 text-white p-2">
          <PictureInPicture size={15}/>
          <h2 className="text-sm">TODO</h2>
        </div>
        <SearchBox/>
      </div>
      <div className="space-y-2 max-h-screen overflow-y-auto">
        {todos.map((todo) => (
          <button
            key={todo.id}
            onClick={() => dispatch(selectTodo(todo.id))}
            className={`block w-full p-3 text-left rounded-lg transition ${
              selectedTodo?.id === todo.id ? "bg-white border-2 border-green-500 shadow-md" : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            <h3 className="font-semibold">{todo.title}</h3>
            <p className="text-sm text-gray-600">{(shortenText(todo.description))}</p>
            <span className="text-xs text-gray-500">{todo.createdAt}</span>
          </button>
        ))}
      </div>
    </aside>
  );
}
