import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { RiAccountPinBoxFill } from "react-icons/ri";
import { BiCube } from "react-icons/bi";
import { ImKey } from "react-icons/im";
import { RiDeleteBin7Line } from "react-icons/ri";
import UserDetail from "./UserDetail";

const UserDetailCom = () => {
  return (
    <div className="w-full h-10 userdetailscom">
      <UserDetail
        icon={<HiOutlineMail size={30} className="mr-3 text-[#90a1b7]" />}
        placeholderr="Add email"
      />
      <UserDetail
        icon={<RiAccountPinBoxFill size={30} className="mr-3 text-[#90a1b7]" />}
        placeholderr="Cfo Accountant"
      />
      <UserDetail
        icon={<ImKey size={30} className="mr-3 text-[#90a1b7]" />}
        placeholderr="#000000000"
      />
      <UserDetail icon={<BiCube size={30} className="mr-3 text-[#90a1b7]" />} number={true} />

      <button>
        <RiDeleteBin7Line
          size={25}
          className="border-2 border-red-500 text-red-500 ml-2 rounded"
        />
      </button>
    </div>
  );
};

export default UserDetailCom;
