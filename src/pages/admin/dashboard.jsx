import React, { useContext, useEffect } from 'react'
import axiosInstance from '../../utils/axios'
import Context from '../../context/context';
import Blog from '../../components/admin/BlogCard';
import '../../css/public/Landing.css'

const Dashboard = () => {

  const { blogs, setBlogs } = useContext(Context)
  console.log('admin dashboard');



  const fetchBlogs = async () => {
    await axiosInstance.get('/admin/get-blogs').then((res) => {
      console.log(res.data);
      setBlogs(res?.data?.blogs)

    }).catch((error) => {
      console.log(error.response.data);

    })
  }
  useEffect(() => {

    fetchBlogs()

    document.title = `Admin Dashboard | Neura`
  }, [])
  return (
    <div className='hide'>
      <Blog data={blogs} />
    </div>
  )
}

export default Dashboard