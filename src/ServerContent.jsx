import React from "react";
import Stack from "@mui/material/Stack";
import Button from "./Button";
import Image from "./Image";
import Grid from "@mui/material/Grid";
function ServerContent() {
  return (
    <div className="server_content">
      <div className="server__info-box">
        <div className="server-heading">! RC3-BASEMAPS</div>
        <div className="server__info">
          <Stack direction={"row"} spacing={1}>
            <img
              src="https://uploads-ssl.webflow.com/6022d2c0d37628c87d9e16ab/6022d74ce15ae958f20e10a9_america-flag.svg"
              alt="country-flag"
            ></img>
            <div class="server__mode">conquest large</div>
            <div class="server__linfo-line">-</div>
            <div class="server__game">Lancang Dam</div>
            <div class="server__linfo-line">-</div>
            <div class="server__preset">Custom</div>
            <div class="server__linfo-line">-</div>
            <div class="server__no-hz">60</div>
            <div class="server__hz">hz</div>
          </Stack>
        </div>
        <div class="server__desc">
          Server protected by The_K-50 AntiCheat. Vip !Rules, Questions,
          Request, Appeal, Visit us: www.epg.gg | Discord
          https://discord.gg/3r5NK4d
        </div>
      </div>
      <div className="server__buttons">
        <Stack direction={"row"} spacing={2}>
          <Button text="JOIN" isRating={false} />
          <Button text="SPECTATE" isRating={false} />
          <Button text="JOIN AS COMMANDER" isRating={false} />
          <Button text="13672" isRating={true} />
        </Stack>
      </div>
      {/* <div>
        <Stack>
          <div>
            <Stack>
              <div class="server__current-stats-h">players</div>
            </Stack>
          </div>
        </Stack>
      </div> */}
      <div>
        <div className="server__next">MAP ROTATION</div>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Image />
          </Grid>
          <Grid item xs={3}>
            <Image />
          </Grid>
          <Grid item xs={3}>
            <Image />
          </Grid>
          <Grid item xs={3}>
            <Image />
          </Grid>
          <Grid item xs={3}>
            <Image />
          </Grid>
          <Grid item xs={3}>
            <Image />
          </Grid>
          <Grid item xs={3}>
            <Image />
          </Grid>
          <Grid item xs={3}>
            <Image />
          </Grid>
          <Grid item xs={3}>
            <Image />
          </Grid>
          <Grid item xs={3}>
            <Image />
          </Grid>
          <Grid item xs={3}>
            <Image />
          </Grid>
          <Grid item xs={3}>
            <Image />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default ServerContent;
