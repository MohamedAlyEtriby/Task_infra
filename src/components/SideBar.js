import React from "react";

const SideBar = () => {
  return (
    <div className="flex-[0.2] min-h-full  border-r border-stone-400 ">
      <div className="flex flex-col justify-between w-full items-center h-full">
        <div className="w-4/5  mt-6">
          <div>
            <h2 className="mb-14 Inframodern p-3">InfraModern</h2>
            <ul>
              <li className="mb-3">
                <button>Home</button>
              </li>
              <hr className="mb-3" />
              <li className="mb-3">
                <button>Products Data</button>
              </li>
              <li className="mb-3">
                <button>Brands & Branches</button>
              </li>

              <li className="mb-3 Inframodern p-3">
                <button>Users</button>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-4/5  mb-6">
          <ul>
            <li className="mb-3">Settings</li>
            <li>Notifications & updates</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
