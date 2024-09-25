
import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  
  return (
    <>
    <div className='bg-blue-600 flex items-center justify-around text-white py-4 container mx-auto '>
      <Link className='text-white bg-blue-400 rounded-md px-4 py-2'  href={"/about"}><h1>About</h1></Link>
      <Link className='text-white bg-blue-400 rounded-md px-4 py-2' href={"/contact"}><h1>Contact</h1></Link>
      <Link className='text-white bg-blue-400 rounded-md px-4 py-2' href={"/"}><h1>Home Page</h1></Link>
      
    </div>
    </>
  )
}

export default Navbar