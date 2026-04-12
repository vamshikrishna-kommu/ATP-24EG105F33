import React from 'react'

// Main content display component
const Content = () => {
  return (
    <main className='ml-16 mt-12 p-4'>
      <h2 className='text-3xl text-red-500 font-semibold mb-4'>Blog Article Not Found</h2>
      <p className='text-gray-700 leading-relaxed max-w-2xl mb-8'>
        We couldn't locate the blog content requested. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt similique soluta ea architecto minus recusandae enim impedit facilis quis officiis.
      </p>
      <button className='bg-orange-500 hover:bg-orange-600 transition-colors px-6 py-2 rounded text-white font-medium'>
        Sign Up Now
      </button>
    </main>
  )
}

export default Content