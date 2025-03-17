
import { Header } from "./todos/_components/Header";
import Link from "next/link";

export default function HomePage() {

  return (
    <div className="flex flex-col items-start justify-start min-h-screen bg-gray-100">
      <Header />
      <div className="flex h-[85vh] w-full flex-col items-center justify-center">
      <h1 className="text-4xl font-bold  text-slate-600 mb-6">Welcome to Todo App</h1>
      <Link
        href={"/todos"}
        className="px-6 py-3 bg-accent-500 text-slate-700 font-semibold rounded-lg shadow-md hover:bg-accent-600 transition"
      >
        See Todos
      </Link>
      </div>
    </div>
  );
}
