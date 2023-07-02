import Testimg from "../../assets/image/teste.jpg";

const ItemWork = ({ title, link, description }) => {
  const styles = {
    width: "430px",
    height: "320px",
    objectFit: "cover",
    objectPosition: "center",
    padding: "5px 0",

  };
  return (
    <section className="text-left mx-2 ">
      <a target="_blank" href={link}>
        <img style={styles} src={Testimg} alt="" />
        <h3 className="font-bold text-[#132D46]">{title}</h3>
        <hr className="bg-[#C0FF00] h-1 mt-1" />
      </a>
    </section>
  );
};

export default ItemWork;
