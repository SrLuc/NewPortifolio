import React, { useState, useEffect } from "react";
import ItemWork from "../components/UIelements/ItemWork";
import VariableWidth from "../components/carousel/Carousel";
import TransitionsModal from "../components/Modal/TransitionsModal";

const Works = () => {
  const [works, setWorks] = useState([]);

  useEffect(() => {
    const getWorks = async () => {
      const response = await fetch("https://api.github.com/users/SrLuc/repos");
      const data = await response.json();
      setWorks(data);
    };
    getWorks();
  }, []);

  return (
    <VariableWidth>
        {works.map(({ name, html_url, description, language }) => {
          return (
            <TransitionsModal name={name} description={description} language={language} html_url={html_url}/>
          );
        })}
    </VariableWidth>
  );
};

export default Works;
