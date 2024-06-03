const ShopSection = ({ children }) => {
  return (
    <section className="flex flex-col gap-5 w-full px-5 bg-slate-300 justify-center items-center">
      {children}
    </section>
  );
};

export default ShopSection;
