import React, { useState } from "react";
import Leftsidetabs from "./Leftsidetabs";
import BreadCrumb from "./BreadCrumb";
function App() {
  const [tab, SetTab] = useState({
    isBF1: false,
    isBF4: false,
    isBF5: false,
    isBH: false,
    iscareer: false,
    iswatch: false,
    isnews: false,
    ishelp: false,
    isquit: false,
  });
  return (
    <div className="app">
      <Leftsidetabs tab={tab} SetTab={SetTab} />
      <div className="sideTab-div"></div>
      <BreadCrumb />
      <div>SERVER INFO</div>
    </div>
  );
}

export default App;
