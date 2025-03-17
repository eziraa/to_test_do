"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { useCreateTodoMutation } from "@/redux/api/todo.api";
import useClickOutside from "@/hooks/useClickOutSide";
import toast from "react-hot-toast";

export default function NewTodoDialog({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [todoText, setTodoText] = useState("");
  const ref = useClickOutside(onClose);
  const [createTodo,{error, isLoading}] = useCreateTodoMutation()
  const handleSave = () => {
    try {
        createTodo({title: todoText})
        onClose()
        toast.success("Todo created successfully");
        
    } catch (error: any) {
            console.log("@@Error in creating todo",error)
            if('data' in error){
                const  {message} = error.data as {message: string}
                toast.error(message || "Failed to create todo")
            }
            else{
                toast.error("Something went wrong")
            }
    }
  };

  return (
    <div
      className={`fixed inset-0  flex items-center justify-center bg-black bg-opacity-50 transition-opacity ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      {/* Dialog Container */}
      <div 
      ref={ref}
        className="bg-white flex  z-[5000] flex-col gap-2 p-6 rounded-2xl shadow-lg w-96 transition-all transform scale-95"
        >
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-700">New To-Do</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
            <X size={20} />
          </button>
        </div>

        {/* Input Field */}
        <input
          type="text"
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-accent-400"
          placeholder="Enter a to-do..."
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />

        <textarea
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-accent-400"
            placeholder="Enter a to-do..."
            value={todoText}
            onChange={(e) => setTodoText(e.target.value)}
            />
        {/* Buttons */}
        <div className="mt-4 flex justify-end space-x-2">
          <button
            onClick={onClose}
            disabled={isLoading}
            className="px-4 py-2 text-gray-600 bg-gray-200 rounded-lg hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            disabled={isLoading || !todoText.trim()}
            onClick={handleSave}
            className="px-4 py-2 text-white bg-accent-400/90 rounded-lg hover:bg-accent-400 disabled:opacity-50"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
