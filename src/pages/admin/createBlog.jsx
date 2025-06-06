import React, { useState } from 'react'
import '../../css/public/Landing.css'
import { AiOutlineFullscreenExit } from "react-icons/ai";
import { FaSave } from "react-icons/fa";



const CreateBlog = () => {

  const [fileName, setFileName] = useState('Untitled')
  const [blog, setBlog] = useState({
    title: "",
    content: ""
  })

  const handleSave = () => {
    console.log(blog);

  }
  return (
    <div className='bg-base-200 mx-auto  overflow-y-scroll p-2 space-y-2 hide'>
      <Header fileName={fileName} setFileName={setFileName} />
      <div className='w-[90%] mx-auto '>
        <div className='w-full space-y-2 '>
          <div>
            <input value={blog.title} onChange={(e) => setBlog({ ...blog, title: e.target.value })} type='text' className='w-full p-2 outline-none placeholder:text-gray-500 text-lg sm:text-xl' placeholder='title goes here...' />
          </div>
          <div>
            <textarea value={blog.content} onChange={(e) => setBlog({
              ...blog, content: e.target.value
            })} className='w-full h-[430px] p-3 placeholder:text-gray-500 text-lg outline-none resize-none hide ' placeholder='write your blog here.' />
          </div>
        </div>

        <div className='w-full flex items-center justify-center my-2'>
          <button onClick={handleSave} className='btn btn-secondary btn-wide'>Save</button>
        </div>
      </div>
    </div>
  )
}

const Header = ({ fileName = 'Untitled', setFileName }) => {
  return (
    <div className='w-[96%] mx-auto flex items-center justify-between'>
      <div className='flex items-center gap-2'>
        <FaSave />
        <div className='w-fit'>
          <input type='text' className='w-fit outline-none' value={fileName} onChange={(e) => setFileName(e.target.value)} />
        </div>
      </div>
      <div className='p-1 hover:bg-secondary active:bg-secondary transition duration-300 cursor-pointer hover:text-black active:text-black'>
        <AiOutlineFullscreenExit size={20} />
      </div>
    </div>
  )
}

export default CreateBlog