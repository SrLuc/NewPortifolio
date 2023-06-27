const ItemSkill = ({icon,title,children}) => {
  return (
    <article className="border border-red-950 w-60 m-3 ">
      <i>{icon}</i>
      <h3>{title}</h3>
      {children}
    </article>
  );
};

export default ItemSkill;
