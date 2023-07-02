import React from "react";

const REPOS_IMAGES = [
  "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/614117/pexels-photo-614117.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/160107/pexels-photo-160107.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/633409/pexels-photo-633409.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/247791/pexels-photo-247791.png?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/5926397/pexels-photo-5926397.jpeg?auto=compress&cs=tinysrgb&w=1600",
];

const ItemWork = ({ title, link, description }) => {
  const styles = {
    width: "430px",
    height: "300px",
    objectFit: "cover",
    objectPosition: "center",
    margin: "10px auto",
  };

  const randomIndex = Math.floor(Math.random() * REPOS_IMAGES.length);
  const randomImage = REPOS_IMAGES[randomIndex];

  return (
    <section className="text-left mx-5 hvr-shrink">
      <a target="_blank" href={link}>
        <img style={styles} src={randomImage} alt={title} />
        <h3 className="font-bold text-[#132D46]">{title}</h3>
        <hr className="bg-[#C0FF00] h-1 mt-1" />
      </a>
    </section>
  );
};

export default ItemWork;
