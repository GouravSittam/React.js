import React, { useContext } from "react";
import { UserContext } from "./User";

const Child3 = () => {
  const user = useContext(UserContext);
  return (
    <div>
      <h2>Information of Child</h2>
      <p>
        Name: {user.name}, Age: {user.age}
      </p>
    </div>
  );
};

export default Child3;