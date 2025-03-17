'use client'
import {Plus } from "lucide-react";
import { useState } from "react";
import NewTodoDialog from "./CreateTodo";

const SubHeader = () => {
    // State to toggle the modal for adding new todo
    const [openAddinModal, setOpenAddingModel] = useState(false);
  return (
        <div className="flex items-center w-full justify-between p-4 gap-2">
            <h2 className="text-lg font-semibold">All Todos</h2>
            <button 
                onClick={() => setOpenAddingModel(true)}
            className="p-2 rounded-md gap-3 flex items-center text-sm text-slate-900 bg-white">
                <Plus size={15}/> New
            </button>
            <NewTodoDialog isOpen={openAddinModal} onClose={() => setOpenAddingModel(false)} />
        </div>
  )
}

export default SubHeader