import React from "react";
import ParentComponent from "./Components/Parent";
// import AuthProvider from "./Components/AuthContext";
// import AuthContext from "./Components/AuthContext"
import LoginButton from "./Components/LoginButton"
import "./App.css";

function App() {
  return (
    <div className="App">
      <ParentComponent />
      {/* <AuthContext /> */}
      {/* <AuthProvider /> */}
      <LoginButton />
    </div>
  );
}

export default App;
