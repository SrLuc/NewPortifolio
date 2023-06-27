import Testimg from "../../assets/image/teste.jpg";

const ItemWork = ({ title, link, description }) => {
  const styles = {
    width: "330px",
    height: "200px",
  };
  return (
    <section className="my-19 h-64 text-left mx-5 ">
      <img style={styles} src={Testimg} alt="" />
        <h3>{title}</h3>
        <hr className="bg-red-500 h-1 mt-2" />
      </section>
  );
};

export default ItemWork;
