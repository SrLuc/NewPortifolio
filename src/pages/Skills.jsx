import React from "react";
import ItemSkill from "../components/UIelements/ItemSkill";
const Skills = () => {
  return (
    <>
      <section className="flex justify-around p-1 w-full h-full align-middle flex-wrap min-[440px]:p-2">
        <ItemSkill icon="test" title="ReactJS">
          I have solid ReactJS skills, with experience building reusable
          components, managing state, and integrating with external APIs. I also
          have knowledge in advanced concepts like routing with React Router and
          server-side rendering with Next.js
        </ItemSkill>
        <ItemSkill icon="test" title="NodeJS">
          I have knowledge in Node.js. In addition, I have knowledge in NoSQL
          databases, such as MongoDB, and in tools such as Express.js for
          creating routes and controlling middlewares.
        </ItemSkill>
        <ItemSkill icon="test" title="MySQL">
          I have experience in data modeling using tools such as Power BI,
          brModelo and MySQL Workbench. I am able to design efficient and
          structured database schemas and I also have knowledge in advanced queries in SQL.
        </ItemSkill>
        <ItemSkill icon="test" title="Typescript">
          I have knowledge in TypeScript and Styled Components. I have
          experience creating reusable components, managing state with Redux or
          Context API, and navigating with React Router.
        </ItemSkill>
        <ItemSkill icon="test" title="Tailwind">
          I have solid skills in using Tailwind CSS In addition, I can take
          advantage of Tailwind's pre-built utilities and components to speed up
          development and ensure visual consistency throughout the project.
        </ItemSkill>
        <ItemSkill icon="test" title="English">
          I have proficient communication skills in English, although I may find
          it difficult to express myself. However, I have a strong ability to
          understand and comprehend English conversations or written content
          perfectly.
        </ItemSkill>
      </section>
    </>
  );
};

export default Skills;
