import { useState } from "react";

function App() {
  const [status, setStatus] = useState(true);
  let setPageFromCondision;
  if(status) {
    setPageFromCondision = (
      <form className="relative flex flex-col justify-center items-center h-full xl:w-[65%] w-full overflow-hidden" onSubmit={handleSubmit}>
          <svg className="absolute left-[100px] top[-2000px]" width={1000} height={1000} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#F1C21B" d="M35.8,-62C47.8,-55.1,60,-48.4,69.3,-38.1C78.6,-27.8,85.1,-13.9,87.2,1.2C89.4,16.3,87.1,32.7,77.6,42.5C68,52.4,51,55.7,36.9,59.8C22.7,63.9,11.4,68.7,-0.8,70.1C-13.1,71.6,-26.1,69.7,-36.5,63.5C-46.9,57.2,-54.6,46.6,-57.2,35.3C-59.7,24,-57.2,12,-52.5,2.8C-47.7,-6.5,-40.7,-12.9,-35.4,-19.7C-30.2,-26.4,-26.8,-33.4,-21.2,-44C-15.6,-54.6,-7.8,-68.7,2.1,-72.3C11.9,-75.9,23.8,-68.9,35.8,-62Z" transform="translate(100 100) scale(1.2)" />
          </svg>
        <div className="absolute top-10 w-full flex flex-col justify-start items-center">
        <h1 className="mt-3 font-poppins uppercase font-semibold text-3xl text-slate-100">
          login
        </h1>
        <div className="flex flex-col justify-center items-center w-[85%] mt-8">
          <label
            className="flex flex-col w-full font-poppins font-sm"
            htmlFor="username"
          >
            <input
              className="bg-transparent utline-none py-2 px-2 rounded-md mt-2 text-slate-400 focus:text-slate-300 focus:border-2 focus:border-slate-200"
              id="username"
              type="text"
              placeholder="Username"
            />
            <hr className="border-top border-slate-300 mt-1"/>
          </label>
          <label
            className="flex flex-col w-full font-poppins font-sm mt-8 xl:mt-7"
            htmlFor="password"
          >
            <input
              className="bg-transparent outline-none py-2 px-2 rounded-md mt-2 text-slate-400 focus:text-slate-300 focus:border-2 focus:border-slate-200"
              id="password"
              type="password"
              placeholder="Password"
            />
            <hr className="border-top border-slate-300 mt-1" />
          </label>
          <div className="w-full mt-32 xl:mt-0">
            <button
              className="w-full bg-gradient-to-r from-gradient-button-primary via-gradient-button-secondary to-gradient-button-light transition-all hover:form-gradient-button-light hover:via-gradient-button-secondary hover:to-gradient-button-primary mt-8 py-2 rounded-md uppercase font-poppins text-white font-semibold hover:text-slate-100"
              type="submit"
            >
              login now
            </button>
          </div>
          <button
            className="xl:hidden w-full bg-gradient-to-r from-gradient-button-primary via-gradient-button-secondary to-gradient-button-light transition-all hover:form-gradient-button-light hover:via-gradient-button-secondary hover:to-gradient-button-primary mt-8 py-2 rounded-md uppercase font-poppins text-white font-semibold hover:text-slate-100"
            type="submit"
          >
            Don't have account ?
          </button>
        </div>
        <div className="flex flex-row justify-center items-center w-full text-xs capitalize font-poppins text-slate-700 mt-5 xl:mt-10 px-1">
          <hr className="w-[20%] xl:w-[29%] mr-5 border-1 border-slate-300" />
          login with another account
          <hr className="w-[20%] xl:w-[29%] ml-5 border-1 border-slate-300" />
        </div>
        <div className="flex flex-row justify-evenly items-center w-[70%] mt-10">
          <div className="w-[55px] h-[55px] bg-slate-300 rounded-full cursor-pointer"></div>
          <div className="w-[55px] h-[55px] bg-slate-300 rounded-full cursor-pointer"></div>
          <div className="w-[55px] h-[55px] bg-slate-300 rounded-full cursor-pointer"></div>
          <div className="w-[55px] h-[55px] bg-slate-300 rounded-full cursor-pointer"></div>
        </div>
        </div>
      </form>
    )
  } else {
    setPageFromCondision = (
      <form className="relative flex flex-col justify-center items-center h-full xl:w-[65%] w-full overflow-hidden">
          <svg className="absolute left-[100px] top[-2000px]" width={1000} height={1000} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#F1C21B" d="M35.8,-62C47.8,-55.1,60,-48.4,69.3,-38.1C78.6,-27.8,85.1,-13.9,87.2,1.2C89.4,16.3,87.1,32.7,77.6,42.5C68,52.4,51,55.7,36.9,59.8C22.7,63.9,11.4,68.7,-0.8,70.1C-13.1,71.6,-26.1,69.7,-36.5,63.5C-46.9,57.2,-54.6,46.6,-57.2,35.3C-59.7,24,-57.2,12,-52.5,2.8C-47.7,-6.5,-40.7,-12.9,-35.4,-19.7C-30.2,-26.4,-26.8,-33.4,-21.2,-44C-15.6,-54.6,-7.8,-68.7,2.1,-72.3C11.9,-75.9,23.8,-68.9,35.8,-62Z" transform="translate(100 100) scale(1.2)" />
          </svg>
        <div className="absolute top-10 w-full flex flex-col justify-start items-center">
        <h1 className="mt-3 font-poppins uppercase font-semibold text-3xl text-slate-100">
          registration
        </h1>
        <div className="flex flex-col justify-center items-center w-[85%] mt-8">
          <label
            className="flex flex-col w-full font-poppins font-sm"
            htmlFor="username"
          >
            <input
              className="bg-transparent utline-none py-2 px-2 rounded-md mt-2 text-slate-400 focus:text-slate-300 focus:border-2 focus:border-slate-200"
              id="username"
              type="text"
              placeholder="Username"
            />
            <hr className="border-top border-slate-300 mt-1"/>
          </label>
          <label
            className="flex flex-col w-full font-poppins font-sm mt-8 xl:mt-7"
            htmlFor="password"
          >
            <input
              className="bg-transparent outline-none py-2 px-2 rounded-md mt-2 text-slate-400 focus:text-slate-300 focus:border-2 focus:border-slate-200"
              id="password"
              type="password"
              placeholder="Password"
            />
            <hr className="border-top border-slate-300 mt-1" />
          </label>
          <div className="w-full mt-32 xl:mt-0">
            <button
              className="w-full bg-gradient-to-r from-gradient-button-primary via-gradient-button-secondary to-gradient-button-light transition-all hover:form-gradient-button-light hover:via-gradient-button-secondary hover:to-gradient-button-primary mt-8 py-2 rounded-md uppercase font-poppins text-white font-semibold hover:text-slate-100"
              type="submit"
            >
              login now
            </button>
          </div>
          <button
            className="xl:hidden w-full bg-gradient-to-r from-gradient-button-primary via-gradient-button-secondary to-gradient-button-light transition-all hover:form-gradient-button-light hover:via-gradient-button-secondary hover:to-gradient-button-primary mt-8 py-2 rounded-md uppercase font-poppins text-white font-semibold hover:text-slate-100"
            type="submit"
          >
            Don't have account ?
          </button>
        </div>
        <div className="flex flex-row justify-center items-center w-full text-xs capitalize font-poppins text-slate-700 mt-5 xl:mt-10 px-1">
          <hr className="w-[20%] xl:w-[29%] mr-5 border-1 border-slate-300" />
          login with another account
          <hr className="w-[20%] xl:w-[29%] ml-5 border-1 border-slate-300" />
        </div>
        <div className="flex flex-row justify-evenly items-center w-[70%] mt-10">
          <div className="w-[55px] h-[55px] bg-slate-300 rounded-full cursor-pointer"></div>
          <div className="w-[55px] h-[55px] bg-slate-300 rounded-full cursor-pointer"></div>
          <div className="w-[55px] h-[55px] bg-slate-300 rounded-full cursor-pointer"></div>
          <div className="w-[55px] h-[55px] bg-slate-300 rounded-full cursor-pointer"></div>
        </div>
        </div>
      </form>
    )
  }
  function handleSwitchMode() {
    setStatus(!status);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div onLoad={handleSwitchMode} className="testing xl:w-[75%] xl:h-[80vh] w-full h-screen mx-auto xl:my-16 shadow-2xl rounded-md bg-slate-800 flex flex-row justify-center items-center xl:overflow-hidden">
      {/* left page */}
      <section className="hidden xl:flex flex-col justify-center items-center w-[35%] h-full bg-gradient-to-br from-gradient-primary to-gradient-secondary from-[50%] to[50%]">
        <h1 className="uppercase font-bold text-2xl text-slate-100 font-poppins">
          login your account
        </h1>
        <a href="Menu.jsx">pindah ke menu jsx</a>
        <p className="capitalize text-xs font-normal text-gray-700 px-10 block font-poppins">
          make a experience in biking kedunglo team
        </p>
        <div className="mt-12 flex flex-col justify-center items-center">
          <h3 className="capitalize font-normal text-sm font-poppins">
            follow us :
          </h3>
          <div className="flex flex-row justify-between w-[200px] items-center mt-8">
            <div className="w-[50px] h-[50px] bg-slate-200 rounded-full"></div>
            <div className="w-[50px] h-[50px] bg-slate-200 rounded-full"></div>
            <div className="w-[50px] h-[50px] bg-slate-200 rounded-full"></div>
          </div>
        </div>
        <button
          onClick={handleSwitchMode}
          className="px-12 py-3 mt-12 bg-gradient-to-r from-gradient-button-primary to-gradient-button-secondary text-white font-poppins capitalize font-semibold text-sm rounded-md transition-all duration-300 hover:from-yellow-600 hover:to-yellow-700"
          type="button"
        >
          {status ? "don't have account" : "login"}
        </button>
      </section>

      {/* right page */}
      {setPageFromCondision}
    </div>
  );
}

export default App;
