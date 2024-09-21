import React, { useContext } from "react";
import { AuthContext } from "./AuthContext";

const LoginButton = () => {
  const { isAuthenticated, login, logout } = useContext(AuthContext);

  return (
    <div>
      {isAuthenticated ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={login}>Login</button>
      )}
    </div>
  );
};


export default LoginButton;
