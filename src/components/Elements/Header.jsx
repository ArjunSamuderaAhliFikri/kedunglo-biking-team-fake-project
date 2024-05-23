const Header = ({
  classname = "font-inter p-2 ml-3 font-bold text-slate-900 capitalize text-2xl",
  children,
}) => {
  return <h1 className={classname}>{children}</h1>;
};

export default Header;
