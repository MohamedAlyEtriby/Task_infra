import React, { useContext } from "react";
import { VscDiffAdded } from "react-icons/vsc";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import UserInfo from "./UserInfo";
import UserDetail from "./UserDetail";
import UserDetailCom from "./UserDetailCom";
import { Mycontext } from "../context/context";
const NewBrand = () => {
  const { setshow, show } = useContext(Mycontext);

  return (
    <div className="w-full h-screen bg-transparent fixed z-20 overflow-hidden">
      <div className="w-full h-full relative grid place-items-center">
        <div
          className="absolute w-full h-full bg-slate-100 opacity-80"
          onClick={() => {
            setshow(false);
          }}
        ></div>
        <div className="w-3/4 h-3/4 bg-white  opacity-100 z-50 pl-7 pr-7">
          <div className="h-20 w-full  flex items-center justify-between">
            <div className="flex items-center">
              <VscDiffAdded size={30} className="mr-2 text-[#f45]" />
              <span className="text-2xl">Add new user</span>
            </div>
            <button
              onClick={() => {
                setshow(false);
              }}
            >
              <AiOutlineClose size={30} color="gray" />
            </button>
          </div>
          <div className="flex w-full justify-between items-center p-2 bg-[#eef0f3] rounded">
            <UserInfo
              header="Email"
              detail="Type this user E-mail to add and "
            />
            <UserInfo header="job Title" detail="What's the user job title" />
            <UserInfo header="code" detail="Enter User's Code " />
            <UserInfo
              header="Authorized Module"
              detail="which infamodern modeule this user's authorized to use "
            />
          </div>
          <div className="w-full ">
            <UserDetailCom />
            <UserDetailCom />
            <UserDetailCom />
            <UserDetailCom />
            <UserDetailCom />
          </div>
          <hr />
          <div className="w-full  flex justify-between items-center px-4 mt-3 z-50">
            <div className="bg-[#f8dfe8]  text-[#ff007a]  px-11 py-2 rounded-3xl">
              Add new user input
            </div>
            <div>
              <button className="Inframodern text-pink-700 mr-6 px-14 py-2">
                Cancel
              </button>
              <button className="px-16 py-2 bg-[#91a2b8] rounded-lg text-[#eaecef]">
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewBrand;
