import React from 'react'
import data from '../../../api/data'
import Blog from '../../components/public/blog'

const Blogs = () => {
  return (
    <div className='w-[95%] mt-6 mx-auto flex flex-col items-center justify-center'>
      <Blog data={data} />
    </div>
  )
}

export default Blogs