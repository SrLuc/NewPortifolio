import React from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <nav className="bg-[#191E29] font-bold text-gray-100 h-full p-5" >
      <ul className="flex justify-around ">
        <Link to="/">Skills</Link>
        <Link to="/about">About</Link>
        <Link to="/works">Works</Link>
        <Link to="/contact">Contact</Link>
      </ul>
    </nav>
  );
};

export default NavigationBar;
