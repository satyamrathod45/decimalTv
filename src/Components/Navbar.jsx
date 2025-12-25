import React from "react";
import { FiMenu } from "react-icons/fi";
import { HiOutlineSearch } from "react-icons/hi";
import { useState } from "react";
import './navbar.css'
import { Link } from "react-router-dom";
import Profile from '../assets/profile.png'

const Navbar = () => {

  const [isMenu, setIsMenu] = useState(false);

  const handleMenu = () => {
    setIsMenu(!isMenu)
  }

  return (
    <nav className="text-white bg-[#0c0f14] flex justify-between p-3 w-full  shadow-[0_2px_20px_rgba(0,0,0,0.35)] z-[9999] relative">
      <div className="logo  flex items-center">
         <div className="menu sm:hidden">
          <FiMenu size={24} onClick={handleMenu}/>
                  <div className={`mobileLinks rounded-br-2xl rounded-tr-2xl p-3 flex flex-col gap-5 ${isMenu ? "showMenu" : ""}`}>
              <Link to="/"   className=""  onClick={handleMenu}>Home</Link>
          <Link to="/Trending"  className="" onClick={handleMenu}>Trending</Link>
          <Link to="/Top-rated"  className="" onClick={handleMenu}>Top Rated</Link>
          <Link to="/mylist"  className="" onClick={handleMenu}>My List</Link>
          <Link to="/profile"  className="" onClick={handleMenu}>Profile</Link>
        </div>
        </div>

        <h1 className="text-3xl">Decimal<span className="text-green-300">Tv</span></h1>
      </div>
      <div className="links flex justify-center items-center gap-3">
        <div className="link hidden sm:flex gap-5 ">
          <Link to="/"   className="">Home</Link>
          <Link to="/trending"  className="">Trending</Link>
          <Link to="/top-rated"  className="">Top Rated</Link>
          <Link to="/mylist"  className="">My List</Link>
          <Link to="/profile"  className="">Profile</Link>
        </div>
        <div className="profilr rounded-full overflow-hidden h-10 w-10">
          <img src={Profile} alt="" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
