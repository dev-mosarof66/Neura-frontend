import React from 'react'
import { ArrowBigUp } from 'lucide-react'

const Like = ({ count, handleCount }) => {
    return (
        <div className='flex items-center gap-1 p-1 bg-green-600  rounded-md tooltip tooltip-top' data-tip={}>
            <div onClick={handleCount} className='p-1 bg-sky-500 rounded-md cursor-pointer hover:bg-sky-400 transition duration-300 delay-75'>
                <ArrowBigUp size={24} />
            </div>
            <span className='font-semibold'>{count}k</span>
        </div>
    )
}

export default Like