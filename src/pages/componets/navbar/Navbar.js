import React from 'react'
function Navbar() {
  return (
<nav className="backdrop-filter backdrop-blur-lg bg-opacity-30 sticky top-0 z-10 bg-white">
  <div className="max-w-5xl mx-auto px-4">
    <div className="flex text-2xl items-center justify-between h-16">
      <span className="text-3xl text-gray-900 font-semibold">Logo</span>
      <div className="flex space-x-4">
        <a href="#" className="text-red-900">Dashboard</a>
        <a href="#" className="text-red-900">About</a>
        <a href="#" className="text-red-900">Projects</a>
        <a href="#" className="text-red-900">Contact</a>
        <a href="#" className="text-red-900">Button 2</a>
      </div>
    </div>
  </div>
</nav>
  )
}

export default Navbar