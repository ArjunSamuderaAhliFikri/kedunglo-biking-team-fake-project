import { useState } from 'react'

function App() {
  const [status, setStatus] = useState(true);
  let setPageFromCondision;
  function handleSwitchMode() {
    alert('hello world');
    setStatus(!status);
  }
  return (
    <div className='container w-[75%] h-[80vh] mx-auto my-16 shadow-2xl rounded-md bg-slate-500 flex flex-row justify-center items-center overflow-hidden'>
      {/* left page */}
      <section className='flex flex-col justify-center items-center w-[35%] h-full bg-gradient-to-br from-gradient-primary to-gradient-secondary from-[50%] to[50%]'>
        <h1 className='uppercase font-bold text-2xl text-slate-100 font-poppins'>login your account</h1>
        <p className='capitalize text-xs font-normal text-gray-700 px-10 block font-poppins'>make a experience in biking kedunglo team</p>
        <div className='mt-12 flex flex-col justify-center items-center'>
          <h3 className='capitalize font-normal text-sm font-poppins'>follow us :</h3>
          <div className='flex flex-row justify-between w-[200px] items-center mt-8'>
            <div className='w-[50px] h-[50px] bg-slate-200 rounded-full'></div>
            <div className='w-[50px] h-[50px] bg-slate-200 rounded-full'></div>
            <div className='w-[50px] h-[50px] bg-slate-200 rounded-full'></div>
          </div>
        </div>
        <button onClick={handleSwitchMode} className='px-12 py-3 mt-12 bg-gradient-to-r from-gradient-button-primary to-gradient-button-secondary text-white font-poppins capitalize font-semibold text-sm rounded-md transition-all duration-300 hover:from-yellow-600 hover:to-yellow-700' type="button">{status ? "don't have account" : "login"}</button>
      </section>

      {/* right page */}
      <form className='flex flex-col justify-start items-center bg-white h-full w-[65%]'>
        <h1 className='mt-7 font-poppins uppercase font-semibold text-2xl text-slate-700'>login</h1>
        <div className='flex flex-col justify-center items-center w-[85%] mt-8'>
          <label className='flex flex-col w-full font-poppins font-sm' htmlFor="username">
            <input className='outline-none py-2 px-2 rounded-md mt-2 focus:bg-slate-100 focus:text-indigo-900' id='username' type="text" placeholder='Username'/>
            <hr className='border-top border-slate-300 mt-1'/>
          </label>
          <label className='flex flex-col w-full font-poppins font-sm mt-5' htmlFor="password">
            <input className='outline-none py-2 px-2 rounded-md mt-2 focus:bg-slate-100 focus:text-indigo-900' id='password' type="password" placeholder='Password'/>
            <hr className='border-top border-slate-300 mt-1'/>
          </label>
        <button className='w-full bg-gradient-to-r from-gradient-button-primary via-gradient-button-secondary to-gradient-button-light transition-all hover:form-gradient-button-light hover:via-gradient-button-secondary hover:to-gradient-button-primary mt-8 py-2 rounded-md uppercase font-poppins text-white font-semibold hover:text-slate-100' type="submit">login now</button>
        </div>
        <div className='flex flex-row justify-center items-center w-full text-xs capitalize font-poppins text-slate-700 mt-10'>
          <hr className='w-[29%] mr-5 border-1 border-slate-300'/>
          login with another account
          <hr className='w-[29%] ml-5 border-1 border-slate-300'/>
        </div>
        <div className='flex flex-row justify-evenly items-center w-[70%] mt-10'>
          <div className='w-[55px] h-[55px] bg-slate-300 rounded-full'></div>
          <div className='w-[55px] h-[55px] bg-slate-300 rounded-full'></div>
          <div className='w-[55px] h-[55px] bg-slate-300 rounded-full'></div>
          <div className='w-[55px] h-[55px] bg-slate-300 rounded-full'></div>
        </div>
      </form>
    </div>
  )
}

export default App
 