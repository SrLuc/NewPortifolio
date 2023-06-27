const ItemWork = ({ title, link, description }) => {
  return (
    <section className="border border-red-600 w-80 h-72 text-center m-5 ">
      <p>imagem</p>
      <h3>{title}</h3>
      <p>{description}</p>
    </section>
  );
};

export default ItemWork;
