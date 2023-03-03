import React from "react";

const NavBar = () => {
  return (
    <nav className="w-full h-20 flex items-center justify-end border-solid border-b border-stone-400">
      <div className="flex items-center mr-5">
        <img
          src="../../assets/person.webp"
          alt=""
          className="w-12 h-12 rounded-full mr-3"
        />
        <h3>Islam Soltan</h3>
      </div>
    </nav>
  );
};

export default NavBar;
