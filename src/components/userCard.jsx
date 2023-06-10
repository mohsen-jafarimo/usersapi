import React from "react";

const UserCard = (props) => {
  return (
    <div className=" flex flex-col">
      <img
        src={props.content.avatar}
        alt="user"
        className="w-12 h-12 rounded-full relative transition-all hover:h-14 hover:w-14"
      />
    </div>
  );
};

export default UserCard;
