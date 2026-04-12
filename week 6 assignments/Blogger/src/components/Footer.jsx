import React from 'react'

// Page footer component with navigation
const Footer = () => {
  return (
    <footer className='flex flex-wrap gap-8 justify-around bg-amber-400 p-8 mt-24 text-gray-900 shadow-inner'>
      <div className='footer-section'>
        <h3 className='text-xl font-bold mb-3 tracking-wide'>SUPPORT</h3>
        <ul className='space-y-2 opacity-90'>
          <li className='cursor-pointer hover:underline'>Help Center</li>
          <li className='cursor-pointer hover:underline'>Community Forum</li>
          <li className='cursor-pointer hover:underline'>Tutorials</li>
        </ul>
      </div>
      <div className='footer-section'>
        <h3 className='text-xl font-bold mb-3 tracking-wide'>COMMUNITY</h3>
        <p className='opacity-90'>Blogger Network</p>
      </div>
      <div className='footer-section'>
        <h3 className='text-xl font-bold mb-3 tracking-wide'>DEVELOPERS</h3>
        <ul className='space-y-2 opacity-90'>
          <li className='cursor-pointer hover:underline'>API Documentation</li>
          <li className='cursor-pointer hover:underline'>Dev Forum</li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer