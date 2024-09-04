import React from "react";

function LpuSlide() {
  return React.createElement(
    "div",
    {
      style: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "white",
      },
    },
    React.createElement(
      "div",
      {
        style: {
          backgroundColor: "#FDD835",
          padding: "20px",
          borderRadius: "8px",
          textAlign: "center",
          height:"150px",
          border:"2px solid black"
        },
      },
      React.createElement(
        "h1",
        {
          style: {
            color: "red",
            fontSize: "3rem",
            margin: 0,
            padding:"5px"
          },
        },
        "LPU"
      ),
      React.createElement(
        "p",
        {
          style: {
            color: "red",
            fontSize: "1.5rem",
            margin: 0,
            marginTop: "10px",
            // padding:"3px",
          },
        },
        <b>Transforming Education, Transforming India</b>
      )
    )
  );
}

export default LpuSlide;
