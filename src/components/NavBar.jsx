import React, { useEffect, useState } from "react";
import logo from "../assets/logo.jpg";
import { Link } from "react-scroll";

import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isIsStickly, setIsIsStickly] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsIsStickly(true);
      } else {
        setIsIsStickly(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  });

  const navItems = [
    { link: "Home", path: "home" },
    { link: "Service", path: "service" },
    { link: "About", path: "about" },
    { link: "Product", path: "product" },
    
 
  ];

  return (
    <header className="w-full bg-white md:bg-transparent fixed top-0 left-0 right-0">
      <nav
        className={`py-4 lg:px-14 ${
          isIsStickly
            ? " sticky top-0 left-0 right-0 border bg-white duration-300  "
            : ""
        } `}
      >
        <div className="flex justify-between items-start text-base gap-8  ">
          <a
            href=""
            className="text-2xl font-semibold flex items-center space-x-3"
          >
            <img src={logo} className=" w-10 inline-block items-center" />{" "}
            <span className="text-[#263238]"> MON AGENCE </span>{" "}
          </a>

          <ul className=" md:flex mt-2 space-x-12 hidden ">
            {navItems.map(({ link, path }) => (
              <Link
                className="block text-base text-gray-900 hover:text-teal-600 first:font-medium "
                to={path}
                spy={true}
                smooth={true}
                offset={-100}
                key={path}
              >
                {" "}
                {link}{" "}
              </Link>
            ))}
          </ul>

          <div className="space-x-12 hidden lg:flex items-center ">
            <a
              href="/"
              className="hidden lg:flex items-center text-neutralPrimary hover:text-gray-900 "
            >
              Login
            </a>

            <button className="bg-neutralPrimary text-white py-2 px-4 transition-all duration-300 rounded-lg hover:bg-neutralGrey  ">
              Sing Up
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className=" text-neutralDGrey focus:outline-none focus:text-gray-500 "
            >
              {isMenuOpen ? (
                <FaXmark className="w-6 h-6 text-neutralGrey" />
              ) : (
                <FaBars className="w-6 h-6 text-neutralGrey" />
              )}
            </button>
          </div>
        </div>

        <div
  className={`space-y-4 px-8 rounded-2xl focus:underline  mt-16 py-7 bg-neutralPrimary ${
    isMenuOpen ? "block fixed top-0 right-0" : "hidden"
  }`}
>
  {navItems.map(({ link, path }) => (
    <Link
      className="block text-base text-white hover:text-teal-600 first:font-medium"
      to={path}
      spy={true}
      smooth={true}
      offset={-100}
      key={path}
    >
      {link}
    </Link>
  ))}
</div>

      </nav>
    </header>
  );
};

export default NavBar;
