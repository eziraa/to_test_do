"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { useCreateTodoMutation } from "@/redux/api/todo.api";
import useClickOutside from "@/hooks/useClickOutSide";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { ITodo } from "@/types/todo.type";

export default function NewTodoDialog({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const ref = useClickOutside(onClose);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ITodo>();
  
  const [createTodo, {  isLoading }] = useCreateTodoMutation();

  const handleSave = async (data: ITodo) => {
    try {
      await createTodo(data).unwrap();
      toast.success("Todo created successfully");
      reset();
      onClose();
    } catch (error: any) {
      console.error("Error in creating todo:", error);
      if ("data" in error) {
        const { message } = error.data as { message: string };
        toast.error(message || "Failed to create todo");
      } else {
        toast.error("Something went wrong");
      }
    }
  };

  return (
    <div
      className={`fixed inset-0 z-20 flex items-center justify-center bg-black bg-opacity-50 transition-opacity ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <div
        ref={ref}
        className="bg-white flex flex-col gap-2 p-6 rounded-2xl shadow-lg w-96 transition-all transform scale-95"
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-700">New To-Do</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
            <X size={20} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(handleSave)}>
          {/* Input Field */}
          <div>
            <input
              type="text"
              {...register("title", { required: "Title is required" })}
              className={`w-full p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-accent-400 ${
                errors.title ? "border-red-500" : ""
              }`}
              placeholder="Enter title here..."
            />
            {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
          </div>

          <div className="mt-2">
            <textarea
              {...register("description", { required: "Description is required" })}
              className={`w-full p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-accent-400 ${
                errors.description ? "border-red-500" : ""
              }`}
              placeholder="Enter a to-do..."
            />
            {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
          </div>

          {/* Buttons */}
          <div className="mt-4 flex justify-end space-x-2">
            <button
              onClick={onClose}
              type="button"
              disabled={isLoading}
              className="px-4 py-2 text-gray-600 bg-gray-200 rounded-lg hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="px-4 py-2 text-slate-900 bg-accent-400/90 rounded-lg hover:bg-accent-400 disabled:opacity-50"
            >
              {isLoading ? "Saving..." : "Save"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
