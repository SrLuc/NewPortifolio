import React, { useState, useEffect } from "react";

import ItemWork from "../components/UIelements/ItemWork";
import VariableWidth from "../components/carousel/Carousel";

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
            <ItemWork
              key={name}
              title={name}
              link={html_url}
              description={description}
              language={language}
            />
          );
        })}
    </VariableWidth>
  );
};

export default Works;
