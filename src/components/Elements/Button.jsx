const Button = ({
  children,
  classname = "bg-blue-500 rounded-md text-slate-100 capitalize font-semibold px-4 py-1",
  onClick,
  type = "button",
}) => {
  return (
    <button className={classname} type={type} onClick={() => onClick()}>
      {children}
    </button>
  );
};

export default Button;
