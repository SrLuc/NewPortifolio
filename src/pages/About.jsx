import React from "react";
import Container from "../components/UIelements/Container";
import {Link} from "react-router-dom"
import { SecondaryButton } from "../components/UIelements/Buttons";

const About = () => {
  const openTag = "<p>";
  const closeTag = "</p>";
  return (
    <React.Fragment>
      <Container>
        <section className="flex justify-evenly w-full h-96">
          <div className="flex flex-col justify-center">
            <h1 className="text-2xl font-bold text-[#01C38D]">{openTag}</h1>
            <p className="xl:text-xl font-medium ml-5 text-[#191e29] ">
              Technology student specialized in systems analysis and
              development, with frontend skills, looking for professional
              opportunities in the area. Interested in pursuing a career in
              fullstack web developer or mobile programming using
              <strong> React Native</strong> or <strong>Flutter</strong>, with a
              focus on creating full-featured apps or developing for mobile
              devices. I am committed to continually learning and improving
              skills, I am also building an online portfolio and participating
              in hands-on projects. I am Determined to achieve success in the
              field of technology.
            </p>
            <h1 className="text-2xl font-bold text-[#01C38D]">{closeTag}</h1>
          </div>
        </section>
        <section className="flex justify-evenly w-full h-96">
          <div className="flex flex-col justify-center items-center p-36">
            <h1 className="text-[#191e29] font-bold xl:text-4xl xl:text-right lg:text-3xl lg:text-right md:text-3xl md:text-right min-[375px]:text-3xl text-center ">
              SEE MY TOP PROJECTS THAT ARE AVAILABLE ON MY GITHUB
            </h1>
            <section className="w-full flex flex-col align-sub">
              <hr className="bg-[#01C38D] h-1 my-5" />
            </section>
            <div className="w-full flex lg:justify-end md:justify-end min-[375px]:justify-center">
              <SecondaryButton>
                <Link to="works">Recent Works</Link>
              </SecondaryButton>
            </div>
          </div>
        </section>
      </Container>
    </React.Fragment>
  );
};

export default About;
