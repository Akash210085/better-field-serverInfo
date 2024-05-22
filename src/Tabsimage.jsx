import React, { useState } from "react";
function Tabsimage(props) {
  const [imgState, SetImgState] = useState("Default");
  const [isSelected, SetSelected] = useState(3);

  return (
    <div>
      <a href="#tabs" className="img-a">
        {isSelected === props.id ? (
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
              SetImgState("Current");
            }}
            key={props.id}
            className={`img ${props.type} ${imgState} ${props.type}`}
          ></img>
        ) : (
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
            key={props.id}
            onClick={() => {
              SetSelected(props.id);
            }}
            className={`img ${props.type} ${imgState} ${props.type}`}
          ></img>
        )}
      </a>
    </div>
  );
}

export default Tabsimage;
