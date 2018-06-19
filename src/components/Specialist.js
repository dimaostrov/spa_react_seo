import React, { Component } from "react";

import DENON from "../img/denon.png";
import HITACHI from "../img/hitachi.png";
import MITSU from "../img/mitsubishi.png";
import NESDA from "../img/padded-nesda-logo.png";
import RCA from "../img/rca.png";

class Specialist extends React.Component {
  render() {
    const logos = [DENON, HITACHI, MITSU, NESDA, RCA];
    return (
      <div className="center">
        <div className="f2 lh-title center pt1 pl2">CERTIFICATIONS</div>
        <div className="flex flex-wrap mh3">
          {logos.map(x => <img className="mw7 ma1 outline w-25 pa1" src={x} />)}
        </div>
      </div>
    );
  }
}

export default Specialist;
