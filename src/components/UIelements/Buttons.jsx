import React from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const PrimaryButton = ({ children }) => {
  return (
    <button className="bg-[#C0FF00] text-[#191E29] font-bold text-2xl p-1 px-3 shadow-sm">
      {children}
    </button>
  );
};

const SecondaryButton = ({ children, type }) => {
  return (
    <button
      type={type}
      className="border-4 border-[#191E29] text-[#191E29] border- font-bold p-1 px-3 shadow-sm hover:bg-[#C0FF00] transition"
    >
      {children}
    </button>
  );
};

const TernaryButton = ({ children }) => {
  const handleScrollToBottom = () => {
    scroll.scrollToBottom({
      duration: 500,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <ScrollLink
    className="bg-[#C0FF00] text-[#191E29] font-bold text-2xl p-1 px-3 shadow-sm"
      activeClass="active"
      to="section1"
      spy={true}
      smooth={true}
      duration={500}
      onClick={handleScrollToBottom}
    >
      {children}
    </ScrollLink>
  );
};

export { PrimaryButton, SecondaryButton, TernaryButton };
