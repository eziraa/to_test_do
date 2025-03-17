'use client';
import { Pagination as IPagination } from '@/types/todo.type';
import { useRouter, useSearchParams } from 'next/navigation';
import React, {  } from 'react';

const Pagination = ({ pagination }: {pagination: IPagination}) => {

    const router = useRouter()
    const _searchParams = useSearchParams();
  const { total, limit, page } = pagination;

  return (
    <div className="flex justify-center mt-4">
      <nav aria-label="Page navigation" className="inline-flex items-center space-x-2">
        {/* Previous button */}
        <button
          onClick={() => {
            const searchParams = new URLSearchParams(_searchParams);
            searchParams.set('page', (page - 1).toString());
            router.push("?"+searchParams.toString());
          }}
          disabled={page <= 1}
          className="px-2 py-2 text-white bg-accent-500/90 rounded disabled:bg-accent-500"
        >
          Prev
        </button>

        {/* Page numbers */}
        {Array.from({ length: total }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => {
                const searchParams = new URLSearchParams(_searchParams);
                searchParams.set('page', (index + 1).toString());
                router.push("?"+searchParams.toString());
            }}
            className={`px-2 py-2 rounded ${index + 1 === page ? 'border border-accent-600 text-slate-700' : 'border border-white text-slate-800 hover:border-accent-500 hover:text-accent-500'}`}
          >
            {index + 1}
          </button>
        ))}

        {/* Next button */}
        <button
          onClick={() =>{
            const searchParams = new URLSearchParams(_searchParams);
            searchParams.set('page', (page + 1).toString());
            router.push("?"+searchParams.toString());
          }}
          disabled={page >= total}
          className="px-2 py-2 text-slate-800 bg-accent-500 rounded disabled:bg-gray-300"
        >
          Next
        </button>
      </nav>
    </div>
  );
};

export default Pagination;
