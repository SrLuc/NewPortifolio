const HomeHeader = ({name}) => {
  return (
    <header className="flex justify-between p-5">
      <h2>Hello {name}</h2>
      <button>Contact Me</button>
    </header>
  );
};

export default HomeHeader;