import React from 'react'
import { BiSolidLike, BiSolidDislike } from "react-icons/bi";
import Comments from '../../../api/comment';


const Comment = () => {
    return (
        <div className='space-y-2.5'>
            <h1 className='text-amber-400 underline underline-offset-2'>Previous Comments</h1>
            <div className='grid grid-cols-1 gap-4'>
                {
                    Comments.map((item, index) => (
                        <CommentCard item={item} key={index} />))
                }
            </div>
        </div>
    )
}

const CommentCard = ({ item }) => {
    return (
        <div className='w-full border border-gray-300/50 rounded-xl p-2 flex flex-col space-y-3'>

            <div className='flex items-center gap-2'>
                <div className='flex items-center gap-1'>
                    <div className='size-10 bg-green-400 rounded-full'></div>
                    <h1>{item.username}</h1>
                </div>
                <p className='text-xs text-red-600'>10 min ago</p>
            </div>
            <div className='px-2'>
                <p>{item.comment}</p>
            </div>
            <div className='flex items-center gap-4 px-2'>
                <div className='cursor-pointer hover:text-green-400'>
                    <BiSolidLike size={20} />
                </div>
                <div className='cursor-pointer hover:text-green-400'>
                    <BiSolidDislike size={20} />
                </div>
            </div>
        </div>
    )
}

export default Comment