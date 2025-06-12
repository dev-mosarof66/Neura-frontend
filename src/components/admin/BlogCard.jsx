import React from 'react'
import '../../css/public/Landing.css'
import img from '../../assets/images/start-up.jpg'
import DOMPurify from 'dompurify'

const Blog = ({ data }) => {
    return (
        <div className='w-[95%] mx-auto p-4 hide grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                data?.length > 0 ? (
                    data.map((item) => (
                        <>
                            <BlogCard item={item} key={item?._id} />
                            <BlogCard item={item} key={item?._id} />
                            <BlogCard item={item} key={item?._id} />
                            <BlogCard item={item} key={item?._id} />
                        </>
                    ))
                ) : (
                    <p>No blogs available</p>
                )
            }
        </div>
    )
}

const BlogCard = ({ item }) => {
    const sanitizedContent = DOMPurify.sanitize(item?.content)
    return (
        <div className='flex flex-col gap-2 hide border rounded-lg shadow-lg shadow-yellow-500/20 cursor-pointer hover:shadow-yellow-500/60 hover:scale-105 active:scale-105 active:shadow-yellow-500/60 transition-transform duration-300'>
            <div>
                <img src={img} alt="Startup" />
            </div>
            <div className='px-4 pb-3'>
                <h1 className='text-lg font-semibold text-gray-300'>{item?.title}</h1>
                <div
                    className='text-gray-400'
                    dangerouslySetInnerHTML={{
                        __html: sanitizedContent.length > 40
                            ? sanitizedContent.slice(0, 100) + '...'
                            : sanitizedContent
                    }}
                />
            </div>
        </div>
    )
}

export default Blog
