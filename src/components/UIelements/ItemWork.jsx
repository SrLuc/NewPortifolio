import Testimg from "../../assets/image/teste.jpg";

const ItemWork = ({ title, link, description }) => {
  const styles = {
    width: "100%",
    height: "100%",
  };
  return (
    <section className="my-19 h-64 text-left m-5 ">
      <img style={styles} src={Testimg} alt="" />
      <h3>{title}</h3>
    </section>
  );
};

export default ItemWork;
