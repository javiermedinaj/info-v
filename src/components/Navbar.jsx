import React from 'react'

const Navbar = () => {
  return (
    // //create a navbar with tailwind css and animation if needed the navbar contain the following list of links products contact and about and a logo image//
    <nav className="flex items-center justify-between bg-black py-4 px-6">
      <div className="flex items-center">
        {/* <img src="logo.png" alt="Logo" className="h-8 w-8" /> */}
        <ul className="flex space-x-4 ml-8">
          <li className="text-white">Products</li>
          <li className="text-white">Contact</li>
          <li className="text-white">About</li>
        </ul>
      </div>
    </nav>


  )
}

export default Navbar