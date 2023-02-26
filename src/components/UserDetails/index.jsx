import React from "react";

const UserDetails = ({ user }) => {
  const { id, firstName, lastName, avatar } = user?.general;
  if (!user) {
    return <div></div>;
  }
  return (
    <div className="card">
      <img src={avatar} alt="" width={100} height={100} />
      <div> Name: {firstName} </div>
      <div> LastName: {lastName}</div>
    </div>
  );
};

export default UserDetails;
