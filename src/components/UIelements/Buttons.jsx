const PrimaryButton = ({ children }) => {
  return (
    <button className="bg-[#C0FF00] text-[#191E29] font-bold text-2xl p-1 px-3 shadow-sm">
      {children}
    </button>
  );
};

const SecondaryButton = ({ children, type }) => {
  return (
    <button type={type} className="border-4 border-[#191E29] text-[#191E29] border- font-bold p-1 px-3 shadow-sm hover:bg-[#C0FF00] transition">
      {children}
    </button>
  );
};

export { PrimaryButton, SecondaryButton };
