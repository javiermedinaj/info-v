import React from 'react';

const Navbar = ({ scrollToProducts,  scrollToAbout, scrollToContact,}) => {
  return (
    <nav className="flex items-center justify-between bg-black py-4 px-6">
      <div className="flex items-center">
        <img src="logo.png" alt="Logo" className="h-8 w-8" />
        <ul className="flex space-x-4 ml-8">
          <li className="text-white"><button onClick={scrollToProducts}>Products</button></li>
          <li className="text-white"><button onClick={scrollToAbout}>About</button></li>
          <li className="text-white"><button onClick={scrollToContact}>Contact</button></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
