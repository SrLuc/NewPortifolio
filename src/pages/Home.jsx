import React from "react";

import HomeContainer from "../components/UIelements/HomeContainer";
import HomeHeader from "../components/UIelements/HomeHeader";
import Container from "../components/UIelements/Container";
import Text from "../components/typograph/Text";
import MeProfile from "../../src/assets/image/Me.png";

const Home = () => {
  return (
    <React.Fragment>
      <HomeHeader />
      <HomeContainer>
        <Container direction={"col"}>
          <Text bold={"bold"} heigth={"loose"} size={"5xl"}>
            HEY I'M RICK LUCENA, AN FULLSTACK DEVELOPER AND A CREATIVE FIGMA
            UI/UX DESIGNER
          </Text>
          <ul className="flex w-full justify-start gap-10 py-3">
            <li>Developer</li>
            <li>Figma Designer</li>
            <li>MERN Stack</li>
          </ul>
          <nav>
            <button>Want to Disscuss ?</button>
            <button>Let's Talk</button>
          </nav>
        </Container>
        <Container content={"center"}>
          <img src={MeProfile} alt="" />
        </Container>
      </HomeContainer>
    </React.Fragment>
  );
};

export default Home;
