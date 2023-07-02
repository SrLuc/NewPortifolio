import React from "react";
import { Link } from "react-router-dom";

const NavigationFooter = () => {
  return (
    <nav className="bg-[#191E29]">
      <ul className="flex justify-evenly p-5 font-bold text-white">
        <a href="">linkedin</a>
        <a href="">github</a>
        <a href="">instagram</a>
      </ul>
    </nav>
  );
};

export default NavigationFooter;
