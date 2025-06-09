import React, { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { Link } from 'react-router'

const Categories = () => {
    const [isActive, setActive] = useState(false)
    return (
        <div>
            <button popoverTarget="popover-1" style={{ anchorName: "--anchor-1" }}>
                <div onClick={() => setActive(!isActive)} className='flex items-center gap-1 hover:text-gray-300 cursor-pointer transition duration-500 group'>
                    <p>
                        Categories
                    </p>
                    <IoIosArrowDown className={`group-hover:rotate-180 transition duration-300`} />
                </div>
            </button>

            <ul className="dropdown menu w-52 mt-2 rounded-box shadow-md shadow-black relative z-[9999] bg-[#003e84]"
                popover="auto" id="popover-1" style={{ positionAnchor: "--anchor-1" }}>
                <div className='w-full flex flex-col gap-2'>
                    <Link to='/blogs/education' className="w-full p-1 hover:bg-blue-300/10 cursor-pointer transition duration-500">Education</Link>
                    <Link to='/blogs/health' className="w-full p-1 hover:bg-blue-300/10 cursor-pointer transition duration-500">Health</Link>
                    <Link to='/blogs/travelling' className="w-full p-1 hover:bg-blue-300/10 cursor-pointer transition duration-500">Travelling</Link>
                    <Link to='/blogs/coding' className="w-full p-1 hover:bg-blue-300/10 cursor-pointer transition duration-500">Coding</Link>
                    <Link to='/blogs/games and sports' className="w-full p-1 hover:bg-blue-300/10 cursor-pointer transition duration-500">Games & Sports</Link>
                </div>
            </ul>
        </div>
    )
}

export default Categories