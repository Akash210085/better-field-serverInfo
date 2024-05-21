import React, { useState } from "react";
import StarRateIcon from "@mui/icons-material/StarRate";
import { Stack } from "@mui/material";
function Button(props) {
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      className="server__button"
      onMouseOver={() => {
        setIsHover(true);
      }}
      onMouseOut={() => {
        setIsHover(false);
      }}
      style={{ width: props.isRating && 100 }}
    >
      <div
        className="server__button-text"
        style={{ color: isHover && "black" }}
      >
        <Stack direction={"row"} alignItems={"center"} spacing={2}>
          {props.isRating && <StarRateIcon style={{ fontSize: 20 }} />}
          {props.text}
        </Stack>
      </div>
    </div>
  );
}

export default Button;
