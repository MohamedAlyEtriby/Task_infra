import React, { useContext } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Mycontext } from "../context/context";
const Search = () => {
  const { setshow, show } = useContext(Mycontext);

  return (
    <div className="w-full h-12 flex justify-between  mt-8">
      <div className="flex-[0.4] flex items-center ml-4 border-4 ">
        <AiOutlineSearch className="mr-3" />
        <input
          type="text"
          placeholder="Can I Help You"
          className="bg-transparent w-full h-full border-0"
        />
      </div>
      <div className="flex-[0.3] flex items-center mr-5 justify-between ">
        <button className="rounded-full p-2 border-2 border-rose-500">
          Filters
        </button>
        <button className="w-8 h-8 border-2 border-rose-500 rounded-full flex items-center justify-center">
          <span>...</span>
        </button>
        <button
          className="p-2 rounded-full border-2 bg-rose-500 text-white"
          onClick={() => {
            setshow(true);
          }}
        >
          Add new Brand
        </button>
      </div>
    </div>
  );
};

export default Search;
