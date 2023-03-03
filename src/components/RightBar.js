import React from "react";
import NavBar from "./NavBar";
import Search from "./Search";
import Table1 from "./Table";

const RightBar = () => {
  return (
    <div className="h-full flex-[0.8] flex flex-col">
      <NavBar />
      <h1 className="mt-14 font-semibold text-3xl">Users</h1>
      <Search />
      <div className="w-full h-auto">
        <Table1 className="w-full bg-black" />
      </div>
    </div>
  );
};

export default RightBar;
