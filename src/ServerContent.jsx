import React from "react";
import Stack from "@mui/material/Stack";
import Button from "./Button";
import Image from "./Image";
import Grid from "@mui/material/Grid";
import ServerSetting from "./Server__Setting";
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
        <Stack direction={"row"} spacing={1}>
          <Button text="JOIN" isRating={false} />
          <Button text="SPECTATE" isRating={false} />
          <Button text="JOIN AS COMMANDER" isRating={false} />
          <Button text="13672" isRating={true} />
        </Stack>
      </div>
      <div className="server__current-stats-w">
        <Stack direction={"row"} spacing={11}>
          <div className="server__current-stats">
            <Stack>
              <div class="server__current-stats-h">players</div>
              <div class="server__current-stats-i-w">
                <Stack direction={"row"}>
                  <div class="server__current-stats-i">60</div>
                  <div class="server__current-stats-iline">/</div>
                  <div class="server__current-stats-i">64</div>
                </Stack>
              </div>
            </Stack>
          </div>
          <div className="server__current-stats">
            <Stack>
              <div class="server__current-stats-h">ping</div>
              <div class="server__current-stats-i-w">
                <Stack direction={"row"}>
                  <div class="server__current-stats-i">104</div>
                  <div class="server__current-stats-ping">ms</div>
                </Stack>
              </div>
            </Stack>
          </div>
          <div className="server__current-stats">
            <Stack>
              <div class="server__current-stats-h">tickrate</div>
              <div class="server__current-stats-i-w">
                <Stack direction={"row"}>
                  <div class="server__current-stats-i">60</div>
                  <div class="server__current-stats-hz">Hz</div>
                </Stack>
              </div>
            </Stack>
          </div>
        </Stack>
      </div>

      <div>
        <div className="server__settings-w">
          <Stack direction={"row"} spacing={4}>
            <div className="server__settings">
              <Stack>
                <div class="server__settings-h">settings</div>
                <ServerSetting text1="region" text2="europe - de" />
                <ServerSetting text1="punkbaster" text2="on" />
                <ServerSetting text1="fairfight" text2="on" />
                <ServerSetting text1="password" text2="off" />
                <ServerSetting text1="preset" text2="normal" />
              </Stack>
            </div>
            <div className="server__settings">
              <Stack>
                <div class="server__settings-h">advanced</div>
                <ServerSetting text1="minimap" text2="on" />
                <ServerSetting text1="only squad leader spawn" text2="off" />
                <ServerSetting text1="vehicles" text2="on" />
                <ServerSetting text1="team balance" text2="on" />
                <ServerSetting text1="minimap spoting" text2="on" />
                <ServerSetting text1="hud" text2="on" />
                <ServerSetting text1="3P vehicle cam" text2="on" />
                <ServerSetting text1="generative health" text2="on" />
                <ServerSetting text1="kill cam" text2="on" />
                <ServerSetting text1="friendly fire" text2="off" />
                <ServerSetting text1="3D spotting" text2="on" />
                <ServerSetting text1="enemy name tags" text2="on" />
              </Stack>
            </div>
            <div className="server__settings">
              <Stack>
                <div class="server__settings-h">rules</div>
                <ServerSetting text1="tickets" text2="400" />
                <ServerSetting text1="vehicle spawn delay" text2="25" />
                <ServerSetting text1="bullet damage" text2="100" />
                <ServerSetting text1="kick after team kills" text2="5" />
                <ServerSetting text1="player health" text2="100" />
                <ServerSetting text1="player respawn time" text2="100" />
                <ServerSetting text1="kick after idle" text2="100" />
                <ServerSetting text1="ban after kicks" text2="3" />
              </Stack>
            </div>
          </Stack>
        </div>
      </div>

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
