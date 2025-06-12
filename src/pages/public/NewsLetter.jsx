import React, { useEffect, useState } from 'react'
import axiosInstance from '../../utils/axios'
import toast from 'react-hot-toast'

const NewsLetter = () => {

  const [email, setEmail] = useState('')
  const handleSubscribe = async (e) => {
    e.preventDefault()

    await axiosInstance.post('/user/subscribe', { email }).then((res) => {
      console.log(res.data.message);
      toast.success(res.data.message)

    }).catch((error) => {
      console.log(error);
      toast.error(error.response.data.message)

    })
  }

  useEffect(() => {
    document.title = 'News Letter | Neura'
  }, [])
  return (
    <section className="w-full flex items-center justify-center py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
          📨 Subscribe to Our Newsletter
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Get the latest blog updates, coding tips, and exclusive resources delivered weekly. No spam, ever.
        </p>

        <form className=" w-full flex flex-col xs:flex-row items-center justify-center gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="johndoe@gmail.com"
            className="w-full xs:w-[300px] sm:w-[400px] text-xs xs:text-base px-5 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-800 dark:text-white bg-white dark:bg-gray-800"
            required
          />
          <button
            onClick={(e) => handleSubscribe(e)}
            type="submit"
            className="px-6 py-2 border bg-white text-black font-semibold
            hover:bg-transparent hover:text-white active:bg-transparent active:text-red-500 transition duration-300 cursor-pointer"
          >
            Subscribe
          </button>
        </form>

        <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
          We respect your privacy. Unsubscribe anytime.
        </p>
      </div>
    </section>

  )
}

export default NewsLetter