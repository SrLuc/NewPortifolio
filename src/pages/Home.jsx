import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/UIelements/Container";
import Profile from "../../src/assets/image/Me.png";
import {
  PrimaryButton,
  SecondaryButton,
} from "../components/UIelements/Buttons";

const Home = ({ name }) => {
  return (
    <>
      <header className="flex justify-between p-5 bg-[#D9D9D9]">
        <h2 className="font-bold text-2xl text-[#132D46]">Hello {name}</h2>
        <PrimaryButton>
          <Link to="/contact">Contact Me</Link>
        </PrimaryButton>
      </header>
      <Container>
        <section className="p-5 w-full">
          <h1 className="font-bold text-[#132D46] lg:text-6xl lg:leading-normal lg:text-left md:text-4xl md:text-left md:leading-loose sm:text-2xl sm:text-center sm:leading-normal min-[315px]:text-center text-3xl">
            HEY, I"M RICK RAMOS, A WEB DEVELOPER AND CREATIVE UI/UX DESIGN
          </h1>
          <ul className="flex gap-5 py-2 font-bold text-[#132D46] lg:justify-start md:justify-start sm:justify-center min-[400px]:flex justify-center text-center">
            <li>Frontend Student</li>
            <li>Systems Developer</li>
            <li>Fullstack Developer</li>
          </ul>
          <ul className="flex text-center py-3 gap-5 lg:justify-start md:justify-start sm:justify-center min-[400px]:flex justify-center">
            <SecondaryButton>Want to work together?</SecondaryButton>
            <PrimaryButton>Let's Talk</PrimaryButton>
          </ul>
        </section>
        <section className="h-96 p-5 w-full flex justify-center">
          <img src={Profile} alt="" />
        </section>
      </Container>
    </>
  );
};

export default Home;
