import { forwardRef, useEffect, useState } from "react";

const SearchSection = forwardRef((props, ref) => {
  const [inputText, setInputText] = useState("");
  const {
    children,
    isPlaceholder = "Search Product...",
    handleChangeQuery,
    handleOnChangeQuery,
    loading,
  } = props;
  return (
    <div className="flex justify-center items-center gap-7 mt-5 p-2">
      <form>
        <input
          ref={ref}
          value={inputText}
          className="w-[400px] px-3 py-[4px] rounded-tl-md rounded-bl-md outline-none placeholder:font-inter placeholder:capitalize placeholder:text-sm placeholder:opacity-60"
          type="text"
          placeholder={isPlaceholder}
          onChange={(e) => handleOnChangeQuery(setInputText, e.target.value)}
        />
        <i
          onClick={() => handleChangeQuery(inputText)}
          className="fa-solid fa-magnifying-glass cursor-pointer hover:bg-slate-500 hover:text-slate-100 bg-white p-[8px] rounded-tr-md rounded-br-md"
        ></i>
      </form>
      {children}
    </div>
  );
});
export default SearchSection;
