const ItemSkill = ({ icon, title, children }) => {
  return (
    <article className="transition xl:w-56 lg:w-56 md:w-56 flex flex-col justify-evenly border-2 m-1 p-1  border-[#191E29] hover:bg-gray-300 min-[440px]:flex min-[440px]:w-full ">
      <div className="flex gap-2 align-middle">
        <i>{icon}</i>
        <h3 className="font-bold text-[#191E29]">{title}</h3>
      </div>
      <p className="text-sm font-bold text-left">{children}</p>
    </article>
  );
};

export default ItemSkill;
