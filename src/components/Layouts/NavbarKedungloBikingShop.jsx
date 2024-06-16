import { useRef } from "react";
import ListItemLink from "../Elements/ListItemLink";
const NavbarKedungloBikingShop = () => {
  const sideBar = useRef(null);
  const closeSideBar = useRef(null);
  const hamburgerMenu = useRef(null);

  const handleOpenSidebar = () => {
    if (sideBar.current.classList.contains("translate-x-[110%]")) {
      sideBar.current.classList.replace("translate-x-[110%]", "translate-x-0");
    }
  };

  const handleCloseSidebar = () => {
    if (sideBar.current.classList.contains("translate-x-0")) {
      sideBar.current.classList.replace("translate-x-0", "translate-x-[110%]");
    } else {
      console.log(false);
    }
  };
  return (
    <nav className="relative min-w-full min-h-[65px] bg-gradient-to-r from-[#F64C18] from-[45%] to-[#EE9539] flex justify-between items-center px-[60px]">
      <h1 className="capitalize font-semibold text-slate-100 text-md xl:text-xl font-inter">
        kedunglo biking shop
      </h1>
      <ul className="xl:flex hidden justify-evenly items-center gap-12 font-inter xl:w-[30%] capitalize text-slate-100 font-normal">
        <ListItemLink>home</ListItemLink>
        <ListItemLink>last rute</ListItemLink>
        <ListItemLink>history</ListItemLink>
        <ListItemLink>rating us</ListItemLink>
      </ul>

      {/* hamburger menu */}
      <div
        ref={hamburgerMenu}
        onClick={handleOpenSidebar}
        className="group flex flex-col justify-evenly items-center cursor-pointer xl:hidden size-6"
      >
        <span className="bg-slate-100 w-7 h-1 rounded transition-all duration-150 group-hover:scale-90 group-hover:bg-slate-500"></span>
        <span className="bg-slate-100 w-7 h-1 rounded transition-all duration-150 group-hover:scale-90 group-hover:bg-slate-500"></span>
        <span className="bg-slate-100 w-7 h-1 rounded transition-all duration-150 group-hover:scale-90 group-hover:bg-slate-500"></span>
      </div>

      <div
        ref={sideBar}
        className="transition-all duration-500 translate-x-[110%] fixed top-0 right-0 z-20 bg-slate-800 w-[270px] h-dvh"
      >
        <div className="flex justify-start items-center gap-1 m-2">
          <div className="size-5 bg-pink-500 rounded-full border-2 border-slate-800"></div>
          <div className="size-5 bg-blue-500 rounded-full border-2 border-slate-800"></div>
          <div className="size-5 bg-emerald-500 rounded-full border-2 border-slate-800"></div>
        </div>
        <div className="w-3/4 flex justify-start items-center gap-3 m-3 p-1">
          <div className="size-7 rounded-full bg-slate-100"></div>
          <header className="text-slate-200 capitalize font-poppins text-xs font-semibold">
            kedunglo biking team
          </header>
        </div>
        <div className="mt-10">
          <input
            className="bg-slate-900 text-slate-300 text-sm outline-none placeholder:font-poppins placeholder:text-sm block placeholder:text-slate-300/25 py-1 px-3 rounded-md w-[90%] mx-auto"
            type="text"
            placeholder="Cari..."
          />
          <ul className="w-3/4 flex flex-col justify-center items-start gap-8 mx-auto mt-7 capitalize text-slate-200">
            <ListItemLink classname="w-full flex justify-start items-center font-semibold text-md capitalize text-slate-200 transition-all rounded-md hover:text-slate-300 hover:bg-sky-600 py-1">
              <i className="fa-solid fa-house mr-3 ml-3"></i>
              home
            </ListItemLink>
            <ListItemLink classname="w-full flex justify-start items-center font-semibold text-md capitalize text-slate-200 transition-all rounded-md hover:text-slate-300 hover:bg-sky-600 py-1">
              <i className="fa-solid fa-route mr-3 ml-3"></i>
              last rute
            </ListItemLink>
            <ListItemLink classname="w-full flex justify-start items-center font-semibold text-md capitalize text-slate-200 transition-all rounded-md hover:text-slate-300 hover:bg-sky-600 py-1">
              <i className="fa-solid fa-handshake mr-3 ml-3"></i>
              history
            </ListItemLink>
            <ListItemLink classname="w-full flex justify-start items-center font-semibold text-md capitalize text-slate-200 transition-all rounded-md hover:text-slate-300 hover:bg-sky-600 py-1">
              <i className="fa-solid fa-heart mr-3 ml-3"></i>
              rating us
            </ListItemLink>
          </ul>
        </div>
        <div className="relative">
          <div
            onClick={handleCloseSidebar}
            ref={closeSideBar}
            className="flex items-center absolute -left-3 -top-10 bg-slate-800 hover:bg-slate-700 transition-all duration-300 rounded-l-lg cursor-pointer h-14 w-5 py-2 px-1"
          >
            <i className="fa-solid fa-backward text-slate-200 hover:text-slate-400"></i>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default NavbarKedungloBikingShop;
