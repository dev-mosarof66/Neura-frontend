import React from 'react'
import { FaSave } from 'react-icons/fa'
import { useNavigate } from 'react-router'
import { AiOutlineFullscreenExit } from "react-icons/ai";


const Header = ({ fileName = 'Untitled', setBlog, blog, tooltip, location, handleSave }) => {
    const navigate = useNavigate()
    console.log(location);


    return (
        <div className='w-[96%] mx-auto flex items-center justify-between'>
            <div className='flex items-center gap-2'>
                <FaSave onClick={handleSave} />
                <div className='w-fit'>
                    <input type='text' className='w-fit outline-none' value={fileName} onChange={(e) => setBlog({
                        ...blog, fileName: e.target.value
                    })} />
                </div>
            </div>
            <div onClick={() => location.pathname === '/admin/create-blog' ? navigate('/admin/create-blog/full-screen') : navigate('/admin/create-blog')} className='p-1 hover:bg-secondary active:bg-secondary transition duration-300 cursor-pointer hover:text-black active:text-black tooltip tooltip-left sm:tooltip-bottom tooltip-primary' data-tip={tooltip}>
                <AiOutlineFullscreenExit size={20} />
            </div>
        </div>
    )
}

export default Header