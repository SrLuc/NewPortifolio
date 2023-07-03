import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavItem = ({ to, selected, children }) => {
  return (
    <li>
      <Link
        to={to}
        className={` ${selected ? "text-[#C0FF00]" : "text-gray-50"}`}
      >
        {children}
      </Link>
    </li>
  );
};

const NavigationBar = () => {
  const location = useLocation();

  return (
    <nav className="bg-[#191E29] font-bold text-gray-100 text-xl h-full p-5">
      <ul className="flex justify-around shadow-lg">
        <NavItem to="/" selected={location.pathname === "/"}>
          Skills
        </NavItem>
        <NavItem to="/about" selected={location.pathname === "/about"}>
          About
        </NavItem>
        <NavItem to="/works" selected={location.pathname === "/works"}>
          Works
        </NavItem>
        <NavItem to="/contact" selected={location.pathname === "/contact"}>
          Contact
        </NavItem>
      </ul>
    </nav>
  );
};

export default NavigationBar;
