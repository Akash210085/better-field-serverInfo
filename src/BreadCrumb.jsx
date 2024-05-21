import React from "react";
import backImg from "./images/State=Default.svg";
import BCHeader from "./BCHeader";
import Stack from "@mui/material/Stack";
function BreadCrumb() {
  return (
    <div>
      <Stack direction="row" alignItems="center" spacing={2}>
        <a href="#backpage">
          <img src={backImg} alt="backImg"></img>
        </a>
        <BCHeader text={"MULTIPLAYER"} />
        <div style={{ color: "#fff" }}>/</div>
        <BCHeader text={"SERVER BROWSER"} />
      </Stack>
    </div>
  );
}

export default BreadCrumb;
