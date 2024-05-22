import React, { useState } from "react";
import Stack from "@mui/material/Stack";
function ServerSetting(props) {
  const [isHover, SetIsHover] = useState(false);
  return (
    <div>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <div
          className="server__setting"
          style={{
            backgroundColor: isHover ? "white" : "",
          }}
          onMouseOver={() => {
            SetIsHover(true);
          }}
          onMouseOut={() => {
            SetIsHover(false);
          }}
        >
          <div
            className="server__setting-text"
            style={{ color: isHover ? "black" : "white" }}
          >
            {props.text1}
          </div>
          <div
            className="server__setting-text"
            style={{ color: isHover ? "black" : "white" }}
          >
            {props.text2}
          </div>
        </div>
      </Stack>
    </div>
  );
}

export default ServerSetting;
