'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

function page() {
 let router= useRouter()
  return (
    <>
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-3xl font-bold">About</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={()=>router.push("/footer")}>Go To Footer</button>
        </main>
    </div>
    </>
  )
}

export default page