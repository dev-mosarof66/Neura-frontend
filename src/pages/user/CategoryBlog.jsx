import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Blog from '../../components/public/blog';
import blogs from '../../../api/blogs';

const CategoryBlog = () => {

    const { id } = useParams();
    console.log(id);

    const [blog, setBlog] = useState([])

    const getBlog = async (id) => {
        const arr = []
        for (let ind = 0; ind < blogs.length; ind++) {

            if (blogs[ind].id === id) {
                arr.push(blogs[ind])
            }

        }
        setBlog(arr)
    }

    useEffect(() => {
        getBlog(id)
    }, [id])



    return (
        <div className='w-full py-10'>
            <Blog data={blog} />
        </div>
    )
}

export default CategoryBlog