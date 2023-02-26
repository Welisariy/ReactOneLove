import React, { useState } from "react";
import UserCard from "./UserCard";

const UserList = ({ clients, setUser }) => {
  const users = clients;

  const clientsList = users?.map((client, index) => {
    return (
      <div key={index} onClick={() => setUser(client)}>
        <UserCard client={client} />
      </div>
    );
  });

  return <div className="user_list_full">{clientsList}</div>;
};

export default UserList;
