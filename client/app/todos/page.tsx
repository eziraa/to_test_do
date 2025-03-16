import Sidebar from "./_components/Sidebar";
import TodoDetail from "./_components/ToDoDetail";

export default function Home() {
  
  return (
    <div className="flex h-screen bg-gray-200">
      <Sidebar  />
      <main className="flex-1 p-6">
        <TodoDetail/>
      </main>
    </div>
  );
}
