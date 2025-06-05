import React, { useEffect } from 'react'

const NewsLetter = () => {

  const handleSubscribe = (e) => {
    e.preventDefault()
  }

  useEffect(() => {
    document.title = 'News Letter | Neura'
  }, [])
  return (
    <section class="w-full flex items-center justify-center py-12 px-4">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl font-bold text-gray-800 dark:text-white mb-4">
          📨 Subscribe to Our Newsletter
        </h2>
        <p class="text-gray-600 dark:text-gray-300 mb-6">
          Get the latest blog updates, coding tips, and exclusive resources delivered weekly. No spam, ever.
        </p>

        <form class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            class="w-full sm:w-auto px-5 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-800 dark:text-white bg-white dark:bg-gray-800"
            required
          />
          <button
            onClick={(e) => handleSubscribe(e)}
            type="submit"
            class="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-300"
          >
            Subscribe
          </button>
        </form>

        <p class="text-sm text-gray-500 dark:text-gray-400 mt-4">
          We respect your privacy. Unsubscribe anytime.
        </p>
      </div>
    </section>

  )
}

export default NewsLetter