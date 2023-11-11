"use client";

// Import necessary dependencies and components
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

// Define the Navbar component
const Navbar = () => {
  // State to manage the mobile menu visibility
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  // Function to handle the click on the hamburger menu
  const handleHamburgerMenuClick = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  // Function to close the mobile menu
  const closeMenu = () => {
    setMenuIsOpen(false);
  };

  // Close the menu when a link is clicked
  const handleLinkClick = () => {
    closeMenu();
  };

  // Close the menu when the component mounts or unmounts
  useEffect(() => {
    return () => {
      setMenuIsOpen(false);
    };
  }, []);

  // Return the JSX for the Navbar component
  return (
    <nav className="">
      <div className="flex justify-between items-center mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
        {/* Logo */}
        <Link onClick={closeMenu} href="/">
          <Image
            src="/logo.svg"
            width={40}
            height={40}
            className="w-24"
            alt="My Website Logo"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-10 uppercase font-bold">
          <Link onClick={handleLinkClick} href="/">
            Accueil
          </Link>
          <Link onClick={handleLinkClick} href="/programme">
            Programme
          </Link>
          <Link onClick={handleLinkClick} href="/infos">
            Infos
          </Link>
          <Link onClick={handleLinkClick} href="/rsvp">
            RSVP
          </Link>
        </ul>

        {/* Greeting for desktop */}
        <span className="hidden md:flex">בס׳׳ד</span>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          {/* Overlay background */}
          {menuIsOpen && (
            <div
              onClick={handleHamburgerMenuClick}
              className="fixed inset-0 bg-sky-200"
            ></div>
          )}

          {/* Hamburger Menu Icon */}
          <div className="flex items-center">
            {menuIsOpen ? (
              <div className="flex  justify-center items-center" >
                <svg onClick={handleHamburgerMenuClick} 
                  className="absolute z-10 right-4 top-6  border-2 border-blue-900"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="50"
                  height="50"
                >
                  <path
                    d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z"
                    fill="rgba(0,132,255,1)"
                  ></path>
                </svg>
              </div>
             ) : (
              <span
                onClick={handleHamburgerMenuClick}
                className={` flex flex-col font-bold text-sm text-emerald-950 border border-emerald-800 px-3 py-1`}
              >
                <span className=" space-x-1">
                  <span>M</span>
                  <span>E</span>
                </span>
                <span className=" space-x-1">
                  <span>N</span>
                  <span>U</span>
                </span>
              </span>
             )}
          </div>

          {/* Mobile Menu Content */}
          {menuIsOpen && (
            <div className="fixed inset-0 flex items-center justify-center">
              <ul className="text-3xl flex flex-col font-bold justify-center
               items-center text-white space-y-4">
                <Link onClick={handleLinkClick} href="/">
                  Accueil
                </Link>
                <Link onClick={handleLinkClick} href="/programme">
                  Programme
                </Link>
                <Link onClick={handleLinkClick} href="/infos">
                  Infos
                </Link>
                <Link onClick={handleLinkClick} href="/rsvp">
                  RSVP
                </Link>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

// Export the Navbar component
export default Navbar;
