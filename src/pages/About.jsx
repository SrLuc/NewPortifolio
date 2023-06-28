import React from "react";
import Container from "../components/UIelements/Container";

const About = () => {
  const openTag = "<p>";
  const closeTag = "</p>";
  return (
    <React.Fragment>
      <Container>
        <section className="flex justify-evenly w-full h-96">
          <div className="flex flex-col justify-center w-1/2">
            <h1 className="">{openTag}</h1>
            <h1 className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequatFusce dapibus, tellus ac cursus commodo
            </h1>
            <h1 className="">{closeTag}</h1>
          </div>
        </section>
        <section className="flex justify-evenly border w-full h-96">
          <div className="flex flex-col justify-center items-center w-1/2">
            <h1 className="font-bold text-right xl:text-4xl lg:text-3xl md:text-2xl min-[375px]:text-center min-[375px]:text-2xl min-[315px]:text-2xl min-[315px]:text-justify">
              LOREM IPSUM DOLOR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR
              INCIDIDUNT
            </h1>
            <section className="w-full flex flex-col align-sub">
              <hr className="bg-red-500 h-1 my-5" />
            </section>
            <div className="w-full flex lg:justify-end md:justify-end min-[375px]:justify-center">
              <button className="w-max-green-400">Recent Works</button>
            </div>
          </div>
        </section>
      </Container>
    </React.Fragment>
  );
};

export default About;
