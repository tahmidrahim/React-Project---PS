import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)
  
  const toggleMenu = () =>{
    setIsOpen(!isOpen)
  }
  
  return (
    <nav className=" bg-cyan-700 py-6 md:py-8">
      <div className="container mx-auto flex justify-between items-center">
        <h3>React Practice</h3>
    
    {/* Mobile Menu Btn */}
    <button onClick={toggleMenu} className="md:hidden">
      {
        isOpen ? <IoClose />  : <GiHamburgerMenu />
      }
          
    </button>
    
        <ul className="flex space-x-4 md:space-x-6">
          <li>Home</li>
          <li>Products</li>
          <li>Blogs</li>
          <li>Contact</li>
          <li>About</li>
        </ul>

        <button>Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
