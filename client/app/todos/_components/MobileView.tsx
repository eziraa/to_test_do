"use client";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import SubHeader from "./SubHeader";
import TodoDetail from "./ToDoDetail";
import { ArrowLeft } from "lucide-react";
import Sidebar from "./Sidebar";
import { Header } from "./Header";
import { selectTodo } from "@/redux/slices/todo.slice";

export const MobileView = () => {
  const todo = useAppSelector((state) => state.todo.selectedTodo);
  const dispatch = useAppDispatch();

  return (
    <div className="flex px-4 overflow-hidden flex-col sm:hidden h-screen">
      <Header />
      {todo ? (
        <div className="flex text-slate-700 my-3 px-4 py-2 flex-col h-full">
          <button onClick={() => dispatch(selectTodo(null))} className="flex items-center gap-2">
              <ArrowLeft size={24} />
            <span>Back</span>
          </button>
          <SubHeader />
          <TodoDetail />
        </div>
      ) : (
        <div className="flex flex-col">
          <Sidebar />
        </div>
      )}
    </div>
  );
};
