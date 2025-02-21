import React from 'react';
import {HiPencilAlt} from "react-icons/hi";
import Link from 'next/link';
import { HiOutlineTrash } from 'react-icons/hi';

const TopicsList = () => {
  return (
    <>
        <div className='flex justify-between p-4 border border-slate-300 items-start'>
            <div>
                <h2 className='text-2xl font-bold'>Topic Title</h2>
                <div>Topic Discription</div>
            </div>
            <div className='flex gap-2'> 
                <button className='text-red-400'>
                    <HiOutlineTrash size={24}/>
                </button>
                <Link href={"/editTopic"}>
                    <HiPencilAlt size={24}/>
                </Link>
            </div>
        </div>
    </>
  )
}

export default TopicsList