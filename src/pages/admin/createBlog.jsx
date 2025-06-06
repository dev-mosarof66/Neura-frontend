import React, { useContext, useState } from 'react'
import '../../css/public/Landing.css'
import { FaSave } from "react-icons/fa";
import { useLocation } from 'react-router';
import Header from '../../components/admin/Header';
import Context from '../../context/context';



const CreateBlog = () => {

  const { blog, setBlog } = useContext(Context)
  const location = useLocation();

  const handleSave = () => {
    console.log(blog);

  }


  //full screen mode

  if (location.pathname === '/admin/create-blog/full-screen') {
    return (
      <div>
        <FullScreen fileName={blog.fileName} blog={blog} setBlog={setBlog} handleSave={handleSave} />
      </div>
    )
  }

  // normal mode 
  return (
    <div>
      <NormalScreen fileName={blog.fileName} blog={blog} setBlog={setBlog} handleSave={handleSave} />
    </div>
  )
}


const NormalScreen = ({ fileName, blog, setBlog, handleSave }) => {
  return (
    <div className='bg-base-200 mx-auto  overflow-y-scroll p-2 space-y-2 hide'>
      <Header fileName={fileName} setBlog={setBlog} blog={blog} tooltip='Full screen' location={location} />
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

const FullScreen = ({ fileName, blog, setBlog, handleSave }) => {
  return (
    <div className='bg-base-200 h-screen mx-auto  overflow-y-scroll p-4 space-y-2 hide flex flex-col'>
      <Header fileName={fileName} setBlog={setBlog} blog={blog} tooltip='Full screen' location={location} />
      <div className='w-[90%] flex flex-col justify-between mx-auto'>
        <div className='w-full space-y-2'>
          <div>
            <input value={blog.title} onChange={(e) => setBlog({ ...blog, title: e.target.value })} type='text' className='w-full p-2 outline-none placeholder:text-gray-500 text-lg sm:text-xl' placeholder='title goes here...' />
          </div>
          <div>
            <textarea value={blog.content} onChange={(e) => setBlog({
              ...blog, content: e.target.value
            })} className='w-full h-[510px] p-3 placeholder:text-gray-500 text-lg outline-none resize-none hide ' placeholder='write your blog here.' />
          </div>
        </div>

        <div className='w-full flex items-center justify-center my-2'>
          <button onClick={handleSave} className='btn btn-secondary btn-wide'>Save</button>
        </div>
      </div>
    </div>
  )
}



export default CreateBlog