export default function BioUser() {
    return (
        <section className="flex flex-row justify-center items-center gap-14 w-[85%] bg-slate-300/50 mt-10 mx-auto p-3 overflow-hidden rounded-md">

            <div className="w-24 h-24 bg-slate-400 rounded-full overflow-hidden">
                <img className="w-full h-full block" src="../public/img/Profile-IG.jpg" alt="User" />
            </div>

            <div className="flex flex-col justify-center items-start">
                <h1 className="capitalize font-poppins font-semibold text-slate-900 text-xl">hello !</h1>
                <h3 className="capitalize font-poppins text-xs font-medium mt-1 text-slate-800/95">arjun samudera ahli fikri</h3>
                <div className="font-sans flex flex-row justify-center items-center gap-1 mt-1 transition-all duration-300 group cursor-pointer">
                    <i className="fa-solid fa-envelope group-hover:text-sky-600 transition-all"></i>
                    <span className="text-sm text-slate-800 group-hover:text-sky-600">arjunsaf717@gmail.com</span>
                </div>
                <button className="bg-yellow-400 capitalize rounded-md mt-3 px-4 py-1 text-white text-normal text-center font-semibold hover:bg-yellow-700 transition-all" type="button">how's about me?</button>
            </div>

        </section>
    );
}