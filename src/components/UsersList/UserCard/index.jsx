import React from "react";

const UserCard = ({ client }) => {
  const { id, firstName, lastName, avatar } = client?.general;

  return (
    <div className="card">
      <img src={avatar} alt="" width={100} height={100} />
      <div> Name: {firstName} </div>
      <div> LastName: {lastName}</div>
    </div>
  );
};

export default UserCard;
