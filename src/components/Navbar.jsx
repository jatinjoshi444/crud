import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <>
        <nav className='flex justify-between bg-slate-800 py-3 px-8 mb-8'>
            <Link className='text-white font-bold text-2xl' href={"/"}>CRUD</Link>
            <Link className='bg-white p-2' href={"/addTopic"}>Add Topic</Link>
        </nav>
    </>
  )
}

export default Navbar