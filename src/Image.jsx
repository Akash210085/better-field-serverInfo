import React from "react";
import img1 from "./images/browser__SI-next-image-w.svg";
import img2 from "./images/browser__SI-next-image-w(1).svg";
import Stack from "@mui/material/Stack";
function Image() {
  const [isHover, setIsHover] = React.useState(false);
  return (
    <div className="server__map">
      <div
        onMouseOver={() => {
          setIsHover(true);
        }}
        onMouseOut={() => {
          setIsHover(false);
        }}
      >
        <Stack spacing={0}>
          <img
            src={isHover ? img1 : img2}
            alt="img"
            className="server__map-image"
          ></img>
          <div
            className="server__map-div"
            style={{
              color: isHover ? "white" : "black",
              backgroundColor: isHover ? "black" : "white",
            }}
          >
            <div className="server__map-text1">conquest large</div>
            <div className="server__map-text2">dawnbreaker</div>
          </div>
        </Stack>
      </div>
    </div>
  );
}

export default Image;
