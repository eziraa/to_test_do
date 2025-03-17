"use client";

import { useDeleteTodoMutation } from "@/redux/api/todo.api";
import { selectTodo } from "@/redux/slices/todo.slice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import {  DeleteIcon, Trash2, X } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

export default function DeleteTodoDialog() {
  
    const dispatch = useAppDispatch();
    const todo = useAppSelector((state) => state.todo.selectedTodo);
    const [isOpen, setIsOpen] = useState(false);
    const onClose = () => setIsOpen(false);
    const [deleteTodo, { isLoading: isDeleting }] = useDeleteTodoMutation();


  const handleDelete = async () => {
    try {
        
      if(!todo?._id) return;
        await deleteTodo(todo?._id!).unwrap();
        dispatch(selectTodo(null))
        toast.success("Todo deleted successfully");
    } catch (error: any) {
      if ('data' in error && error.data) {
        toast.error(error.data.message || "An error occurred please try again")
      }
      else{
        toast.error("Something went to please try again")
      }
    
    }
  };

  if(!todo) return null;

  return (
    <div className="flex">
        <button
            onClick={() => setIsOpen(true)}
            className="text-red-500 hover:text-red-700"
        >
           <Trash2 size={20}/>
        </button>
    
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      {/* Dialog Container */}
      <div className="bg-white p-6 rounded-2xl shadow-lg w-96 transition-all transform scale-95">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-700">Delete To-Do</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
            <X size={20} />
          </button>
        </div>

        {/* Message */}
        <p className="mt-4 text-gray-600">
          Are you sure you want to delete <strong>"{todo?.title}"</strong>? This action cannot be undone.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex justify-end space-x-2">
          <button
            onClick={onClose}
            disabled={isDeleting}
            className="px-4 py-2 text-gray-600 bg-gray-200 rounded-lg hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={handleDelete}
            disabled={isDeleting}
            className="px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600 disabled:opacity-50"
          >
            {isDeleting ? "Deleting..." : "Delete"}
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}
