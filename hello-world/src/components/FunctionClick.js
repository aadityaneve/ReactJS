import React, { Component } from "react";

const FunctionClick = () => {
  function clickHandler() {
    console.log("Button Clicked");
  }

  return (
    <div>
      <button onClick={clickHandler}>FunctionClickBtn</button>
    </div>
  );
};

export default FunctionClick;
