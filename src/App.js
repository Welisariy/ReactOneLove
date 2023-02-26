import React, { useState } from "react";
import clients from "./clients.json";
import UserDetails from "./components/UserDetails";
import UserList from "./components/UsersList";

const App = () => {
  const [user, setUser] = useState();
  // const [array, setArray] = useState([]);

  // useEffect(() => {
  //   console.log(array);
  // }, [array]);

  // const newFunction = () => {
  //   const newArray = Array(array)?.isArray && array?.push("+");
  //   setArray(newArray);
  // };

  return (
    <div style={{ display: "flex" }}>
      {/* <button
        onClick={() => {
          newFunction();
        }}
      >
        Push
      </button> */}
      <UserList clients={clients} setUser={setUser} />

      {user && <UserDetails user={user} />}
    </div>
  );
};

export default App;
