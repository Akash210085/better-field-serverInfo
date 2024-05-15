import React, { useState } from "react";
function Tabsimage(props) {
  const [imgState, SetImgState] = useState("Default");
  // const tab = props.tab;
  // const SetTab = props.SetTab;
  function handleClick() {
    SetImgState("Current");
  }
  return (
    <a href="#tabs" className="img-a">
      <img
        src={require("./images/type=" +
          props.type +
          ", State=" +
          imgState +
          ".svg")}
        alt={props.type}
        onMouseOver={() => {
          SetImgState("Hover");
        }}
        onMouseOut={() => {
          SetImgState("Default");
        }}
        onClick={handleClick}
        className={`img ${props.type} ${imgState} ${props.type}`}
      ></img>
    </a>
  );
}

export default Tabsimage;
