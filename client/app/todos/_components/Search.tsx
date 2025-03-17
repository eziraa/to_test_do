'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Search } from 'lucide-react'; 

const SearchBox = () => {
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);
  const router = useRouter();

  // Debounce logic
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500); 

    return () => clearTimeout(timer); 
  }, [searchTerm]);

  // Update the URL search params with the debounced search term
  useEffect(() => {
    if (debouncedSearchTerm) {
      const search = new URLSearchParams(searchParams);
      search.set('search', debouncedSearchTerm);
      search.set('page', '1');
      router.push("?" + search.toString());
    }
    else{
      const search = new URLSearchParams(searchParams);
      search.delete('search');
      router.push("?" + search.toString())
    }
  }, [debouncedSearchTerm,searchParams, router]);

  return (
    <div className="flex items-center gap-2">
      <div className="bg-white rounded-md">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-2 w-28 border-none outline-none focus:ring-1 focus:ring-accent-500 py-1 border rounded-md"
        />
      </div>
      <button className="p-2 rounded-md z-10 text-slate-900 bg-white">
        <Search size={20} />
      </button>
    </div>
  );
};

export default SearchBox;
