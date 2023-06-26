import React from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <nav className="border">
      <ul className="flex justify-evenly p-5">
        <Link to="/">Skills</Link>
        <Link to="/about">About</Link>
        <Link to="/works">Works</Link>
        <Link to="/contact">Contact</Link>
      </ul>
    </nav>
  );
};

export default NavigationBar;
