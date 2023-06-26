import React from "react";
import HomeContainer from "../components/UIelements/Container";

const Home = () => {
  return (
    <React.Fragment>
      <header className="flex justify-between border p-3">
        <h2>Hello People</h2>
        <button>Contact Me</button>
      </header>
      <HomeContainer>
        <section className="w-full border">info</section>
        <section className="w-full border">photos</section>
      </HomeContainer>
    </React.Fragment>
  );
};

export default Home;
