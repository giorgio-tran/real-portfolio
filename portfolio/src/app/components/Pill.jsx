const Pill = ({ children }) => {
  return (
    <div
      className="border px-3 rounded-full bg-gray-100 text-gray-900 text-xs font-semibold"
    >
      {children}
    </div>
  );
};

export default Pill;