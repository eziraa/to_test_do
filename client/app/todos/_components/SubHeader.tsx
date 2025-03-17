'use client'
import DeleteTodoDialog from "./DeleteTodoDialog";

const SubHeader = () => {
  return (
        <div className="flex items-center w-full justify-between p-4 gap-2">
            <h2 className="text-lg font-semibold">To do Detail</h2>
            <DeleteTodoDialog />
        </div>
  )
}

export default SubHeader