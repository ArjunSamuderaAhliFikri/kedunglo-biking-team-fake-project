import { forwardRef } from "react";

const ContainerShoppingCart = forwardRef((ref, props) => {
  const { children } = props;
  return (
    <div
      ref={ref}
      className="transition-all duration-500 w-full h-full bg-slate-900/60 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden hidden"
    ></div>
  );
});
