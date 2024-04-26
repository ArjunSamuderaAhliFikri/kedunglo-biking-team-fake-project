const SearchSection = ({children}) => {
    return (
        <div className="flex justify-center items-center gap-7 mt-5 p-2">
            <form>
                <input className="w-[400px] px-3 py-[4px] rounded-tl-md rounded-bl-md outline-none placeholder:font-inter placeholder:text-sm placeholder:opacity-60" type="text" placeholder="Search Product..."/>
                <i className="fa-solid fa-magnifying-glass bg-white p-[8px] rounded-tr-md rounded-br-md"></i>
            </form>
            {children}
        </div>
    )
}
export default SearchSection;