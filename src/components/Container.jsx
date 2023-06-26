const Container = ({ children, direction, content}) => {
  return <section className={`p-5 border flex flex-${direction} justify-${content} w-full`}>{children}</section>;
};

export default Container;
