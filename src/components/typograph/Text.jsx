const Text = ({ children, size, bold, heigth }) => {
  return <p className={`text-${size} font-${bold} leading-${heigth}`}>{children}</p>;
};

export default Text;
