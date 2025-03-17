"use client";
import { FilePlus, Loader, PictureInPicture } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { selectTodo } from "@/redux/slices/todo.slice";
import { shortenText } from "@/utils/text.util";
import SearchBox from "./Search";
import { useGetTodosQuery } from "@/redux/api/todo.api";
import NewTodoDialog from "./CreateTodo";
import { timeAgo } from "@/utils/date";
import Pagination from "./Pagination";
import { useSearchParams } from "next/navigation";
export default function Sidebar() {
  const searchParams = useSearchParams();
  const dispatch = useDispatch();
  const selectedTodo = useSelector(
    (state: RootState) => state.todo.selectedTodo
  );
  const {
    data: { data: todos, pagination } = {},
    isLoading,
    error,
  } = useGetTodosQuery(searchParams.toString());

  if (isLoading)
    return (
      <div className="flex items-center justify-center">
        <Loader size={30} />
      </div>
    );

  if (error) {
    return (
      <div className="flex items-center justify-center">
        <h2 className="text-red-500">
          <pre>{JSON.stringify(error, null, 2)}</pre>
        </h2>
      </div>
    );
  }

  return (
    <aside className="w-80 bg-gray-100 custom-scrollbar text-slate-700 p-4 [">
      <div className="flex items-center justify-between py-2">
        <NewTodoDialog />
        <SearchBox />
      </div>
      {!todos?.length && (
        <div className="flex items-center justify-center h-48">
          No todo found
        </div>
      )}
      {!!todos?.length && (
        <>
          <div className="space-y-2 max-h-[65vh] overflow-y-auto">
            {todos?.map((todo) => (
              <button
                key={todo.id}
                onClick={() => dispatch(selectTodo(todo))}
                className={`block relative w-full p-3 pt-6 text-left rounded-lg transition ${
                  selectedTodo?.title === todo.title
                    ? "bg-white border-2 border-green-500 shadow-md"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                <span className="text-slate-500 italic absolute top-2 right-2 text-xs">
                  {timeAgo(todo.createdAt!)}
                </span>
                <h3 className="font-semibold">{todo.title}</h3>
                <p className="text-sm text-gray-600">
                  {shortenText(todo.description, 25)}
                </p>
                <span className="text-xs text-gray-500">{todo.createdAt}</span>
              </button>
            ))}
          </div>
          {pagination && <Pagination pagination={pagination} />}
        </>
      )}
    </aside>
  );
}
