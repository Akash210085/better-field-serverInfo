import React from "react";
import backImg from "./images/State=Default.svg";
import BCHeader from "./BCHeader";
function BreadCrumb() {
  return (
    <div>
      <a href="#backpage">
        <img src={backImg} alt="backImg"></img>
      </a>
      <BCHeader text={"MULTIPLAYER"} />
    </div>
  );
}

export default BreadCrumb;
