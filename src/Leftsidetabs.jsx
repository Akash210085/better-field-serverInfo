import React from "react";
import Tabsimage from "./Tabsimage";
function Leftsidetabs(props) {
  return (
    <div className="sidetabs">
      <Tabsimage type="BF5" tab={props.tab} SetTab={props.SetTab} id={1} />
      <Tabsimage type="BF1" tab={props.tab} SetTab={props.SetTab} id={2} />
      <Tabsimage type="BF4" tab={props.tab} SetTab={props.SetTab} id={3} />
      <Tabsimage type="BH" tab={props.tab} SetTab={props.SetTab} id={4} />
      <Tabsimage type="career" tab={props.tab} SetTab={props.SetTab} id={5} />
      <Tabsimage type="watch" tab={props.tab} SetTab={props.SetTab} id={6} />
      <Tabsimage type="news" tab={props.tab} SetTab={props.SetTab} id={7} />
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
