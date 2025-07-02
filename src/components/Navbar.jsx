import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom"; // Fixed import

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/"); // Set default to "/"
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (path) => {
    setActiveLink(path);
    setIsOpen(false); // Close mobile menu on link click
  };
  
  return (
    <nav className="bg-cyan-700 py-6 md:py-8 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center px-8">
        <h3 className="text-3xl font-bold">React Practice</h3>
    
        {/* Mobile Menu Btn */}
        <button onClick={toggleMenu} className="md:hidden">
          {isOpen ? <IoClose /> : <GiHamburgerMenu />}
        </button>
    
        <ul className="hidden md:flex space-x-4 md:space-x-6">
          <li>
            <Link
              to="/"
              onClick={() => handleLinkClick("/")}
              className={`${activeLink === "/" ? "text-red-600" : "hover:text-white"}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="products"
              onClick={() => handleLinkClick("products")}
              className={`${activeLink === "products" ? "text-red-600" : "hover:text-white"}`}
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to="blogs"
              onClick={() => handleLinkClick("blogs")}
              className={`${activeLink === "blogs" ? "text-red-600" : "hover:text-white"}`}
            >
              Blogs
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              onClick={() => handleLinkClick("contact")}
              className={`${activeLink === "contact" ? "text-red-600" : "hover:text-white"}`}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="about"
              onClick={() => handleLinkClick("about")}
              className={`${activeLink === "about" ? "text-red-600" : "hover:text-white"}`}
            >
              About
            </Link>
          </li>
        </ul>

        <button className="hidden md:block bg-white px-5 rounded py-2 cursor-pointer hover:bg-gray-300">
          Login
        </button>
        
        {/* Mobile menu Collapsed */}
        <div className={`md:hidden w-full absolute bg-cyan-700 top-full left-0 ${isOpen ? "block" : "hidden"}`}>
          <ul className="flex flex-col items-center py-4 gap-3">
            <li>
              <Link
                to="/"
                onClick={() => handleLinkClick("/")}
                className={`${activeLink === "/" ? "text-red-600" : "hover:text-white"}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="products"
                onClick={() => handleLinkClick("products")}
                className={`${activeLink === "products" ? "text-red-600" : "hover:text-white"}`}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="blogs"
                onClick={() => handleLinkClick("blogs")}
                className={`${activeLink === "blogs" ? "text-red-600" : "hover:text-white"}`}
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                onClick={() => handleLinkClick("contact")}
                className={`${activeLink === "contact" ? "text-red-600" : "hover:text-white"}`}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="about"
                onClick={() => handleLinkClick("about")}
                className={`${activeLink === "about" ? "text-red-600" : "hover:text-white"}`}
              >
                About
              </Link>
            </li>
            <li>
              <button className="bg-white px-5 py-1 rounded hover:bg-gray-300">Login</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
