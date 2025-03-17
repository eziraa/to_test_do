import React from 'react'
import Image from 'next/image'
export const Header = () => {
  return (
    <div className='flex items-center w-[96vw] sm:w-screen bg-white px-3  sm:px-10 py-3  justify-start '>
        <div className="flex w-full  items-start sm:items-center gap-1 ">
            <Image src="/logo.png"  className="rounded-full" width={24} height={24} alt="Todo" />
            <h2 className="text-xl text-slate-700 font-semibold">TODO</h2>
        </div>
    </div>
  )
}
