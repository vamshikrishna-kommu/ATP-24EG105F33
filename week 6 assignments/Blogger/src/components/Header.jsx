import React from 'react'

// Navigation header block
const Header = () => {
  return (
    <header className='bg-slate-300 flex items-center p-5 shadow-sm border-b border-gray-400'>
      <img alt="Blogger Logo" className="w-10 h-10 mr-4 drop-shadow-sm" src="https://th.bing.com/th?q=Blogger+Logo+Transparent+PNG&w=120&h=120&c=1&rs=1&qlt=70&o=7&cb=1&dpr=1.3&pid=InlineBlock&rm=3&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247"/>
      <h1 className='text-3xl font-extrabold tracking-tight text-slate-800'>Blogger Application</h1>
    </header>
  )
}

export default Header