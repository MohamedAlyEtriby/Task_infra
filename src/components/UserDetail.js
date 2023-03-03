import React from "react";

const UserDetail = ({ icon, placeholderr, number }) => {
  return (
    <div className="flex w-full border-2 mt-3">
      <div className="bg-[#eaecef] w-fit rounded-md p-1">{icon}</div>
      <input
        type={`${number ? "number" : "text"}`}
        placeholder={placeholderr}
        className="w-full border-0"
      />
    </div>
  );
};

export default UserDetail;
