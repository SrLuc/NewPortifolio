import React from "react";
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
        <PrimaryButton>Contact Me</PrimaryButton>
      </header>
      <Container>
        <section className="h-96 p-5 w-full">
          <h1>
            HEY, I"M RICK RAMOS, A WEB DEVELOPER AND CREATIVE UI/UX DESIGN
          </h1>
          <ul>
            <li>Frontend Developer</li>
            <li>Figma Designer</li>
            <li>Fullstack</li>
          </ul>
          <nav>
            <button>Want to work together?</button>
            <span>Let's Talk</span>
          </nav>
        </section>
        <section className="h-96 p-5 w-full flex justify-center">
          <img src={Profile} alt="" />
        </section>
      </Container>
    </>
  );
};

export default Home;
