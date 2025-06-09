import React from 'react'
import data from '../../../api/data'
import Blog from '../../components/public/blog'

const Home = () => {
  return (
    <div className='w-full py-10'>
      <Blog data={data} />
    </div>
  )
}

export default Home