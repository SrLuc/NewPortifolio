import React from "react";

import HomeHeader from "../components/UIelements/HomeHeader";
import Container from "../components/UIelements/Container";
import Profile from "../../src/assets/image/Me.png";

const Home = () => {
  return (
    <React.Fragment>
      <HomeHeader />
      <Container>
        <section className="border border-red-500 h-96 p-5 w-full">
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
        <section className="border border-red-500 h-96 p-5 w-full flex justify-center">
          <img src={Profile} alt="" />
        </section>
      </Container>
    </React.Fragment>
  );
};

export default Home;
