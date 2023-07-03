import React from "react";
import GithubIcon from "../../assets/vector/GithubIcon";
import InstaIcon from "../../assets/vector/InstaIcon";
import LinkedinIcon from "../../assets/vector/LinkedinIcon";

const NavigationFooter = () => {
  return (
    <nav className="bg-[#191E29] shadow-lg h-28 ">
      <ul className="flex justify-evenly align-middle h-full p-3 font-bold text-white">
        <a href="https://linkedin.com/in/ruan-lucena-ramos-387623232" target="_blank" className="flex justify-center flex-col">
          <LinkedinIcon />
        </a>
        <a href="https://github.com/SrLuc" target="_blank"className="flex justify-center flex-col" >
          <GithubIcon />
        </a>

        <a href="https://www.instagram.com/grvkbob/" target="_blank" className="flex justify-center flex-col">
          <InstaIcon />
        </a>
      </ul>
    </nav>
  );
};

export default NavigationFooter;
