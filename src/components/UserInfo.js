import React from "react";

const UserInfo = ({ header, detail }) => {
  return (
    <div className="text-black">
      <span className="text-lg font-semibold">{header}</span>
      <p>{detail}</p>
    </div>
  );
};

export default UserInfo;
