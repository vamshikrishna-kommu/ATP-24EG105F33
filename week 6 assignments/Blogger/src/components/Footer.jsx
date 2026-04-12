import React from 'react'

function Footer() {
  return (
    <div className='flex gap-5 justify-around bg-amber-300 p-5 mt-20'>
      <div>
        <h2 className='text-2xl'>HELP</h2>
        <p>Help Centre</p>
        <p>Help Forum</p>
        <p>Video Tutorials</p>
      </div>
      <div >
        <h2 className='text-2xl'>COMMUNITY</h2>
        <p>Blogger fuzzz</p>
      </div>
      <div >
        <h2 className='text-2xl'>DEVELOPERS</h2>
        <p>Blogger API</p>
        <p>Developer Forum</p>
      </div>
    </div>
  )
}

export default Footer