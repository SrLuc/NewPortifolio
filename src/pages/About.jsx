import React from "react";
import Container from "../components/UIelements/Container";

const About = () => {
  const openTag = "<p>";
  const closeTag = "</p>";
  return (
    <React.Fragment>
      <Container>
        <section className="flex justify-evenly w-full flex-wrap h-96">
          <div className="flex flex-col justify-center w-1/2">
            <h1 className="text-3xl font-bold">{openTag}</h1>
            <h1 className="ml-10 text-2xl font-bold ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequatFusce dapibus, tellus ac cursus commodo
            </h1>
            <h1 className="text-3xl font-bold">{closeTag}</h1>
          </div>
        </section>
        <section className="flex justify-evenly w-full flex-wrap h-96">
          <div className="flex flex-col justify-center items-center w-1/2">
            <h1 className="text-4xl font-bold text-right">
              LOREM IPSUM DOLOR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR
              INCIDIDUNT
            </h1>
            <section className="w-full flex flex-col align-sub">
              <hr className="bg-red-500 h-1 my-5" />
            </section>
            <div className="w-full flex justify-end">
              <button className="w-max-green-400">
                Recent Works
              </button>
            </div>
          </div>
        </section>
      </Container>
    </React.Fragment>
  );
};

export default About;
