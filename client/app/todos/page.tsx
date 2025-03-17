import { ArrowLeft } from "lucide-react";
import { Header } from "./_components/Header";
import Sidebar from "./_components/Sidebar";
import SubHeader from "./_components/SubHeader";
import TodoDetail from "./_components/ToDoDetail";
import { MobileView } from "./_components/MobileView";

export default function Home() {
  return (
    <>
      <MobileView />
      <div className="sm:flex hidden text-slate-700 flex-col h-screen bg-gray-200">
        <Header />
        <main className="flex px-14  w-screen p-6">
          <Sidebar />
          <div className="flex w-full  flex-col p-4">
            <SubHeader />
            <TodoDetail />
          </div>
        </main>
      </div>
    </>
  );
}
