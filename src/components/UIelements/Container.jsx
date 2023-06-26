const Container = ({ children, direction, content}) => {
  return <section className={`border p-5 flex flex-${direction} justify-${content} w-full `}>{children}</section>;
};

export default Container;
