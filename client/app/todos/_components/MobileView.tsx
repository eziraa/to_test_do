'use client'
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
    <div className="flex p-4 flex-col sm:hidden h-screen">
    {
        todo ? (
        <div className="flex text-slate-700 flex-col h-full">
            <div className="flex items-center gap-4">
              <button
                onClick={() => dispatch(selectTodo(null))}
              >
                <ArrowLeft size={24} />
              </button>
              <span>Back</span>
            </div>
            <SubHeader />
            <TodoDetail />
          </div>
        )
        :
        <div className="flex flex-col">
            <Header/>
            <Sidebar />
        </div>
    }

    </div>
  );
};
