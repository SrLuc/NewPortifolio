import React, { useState, useEffect } from "react";

import ItemWork from "../components/UIelements/ItemWork";

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
    <section className="flex flex-wrap justify-around p-5">
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
    </section>
  );
};

export default Works;
