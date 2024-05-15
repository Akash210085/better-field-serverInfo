import React from "react";
import Tabsimage from "./Tabsimage";
function Leftsidetabs(props) {
  return (
    <div className="sidetabs">
      <Tabsimage type="BF5" tab={props.tab} SetTab={props.SetTab} />
      <Tabsimage type="BF1" tab={props.tab} SetTab={props.SetTab} />
      <Tabsimage type="BF4" tab={props.tab} SetTab={props.SetTab} />
      <Tabsimage type="BH" tab={props.tab} SetTab={props.SetTab} />
      <Tabsimage type="career" tab={props.tab} SetTab={props.SetTab} />
      <Tabsimage type="watch" tab={props.tab} SetTab={props.SetTab} />
      <Tabsimage type="news" tab={props.tab} SetTab={props.SetTab} />
      <Tabsimage
        type="side-menu__help-wrapper"
        tab={props.tab}
        SetTab={props.SetTab}
      />
      <Tabsimage
        type="side-menu__quit-wrapper"
        tab={props.tab}
        SetTab={props.SetTab}
      />
    </div>
  );
}

export default Leftsidetabs;
