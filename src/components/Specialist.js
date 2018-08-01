import React from "react";

import DENON from "../img/denon.png";
// import NESDA from "../img/padded-nesda-logo.png";
import KENWOOD from '../img/kenwood.png';
import LG from '../img/lg.png';
import PANA from '../img/panasonic.png';
import PIONEER from '../img/pioneer.png';
import SAMSUNG from '../img/samsung.png';
import SONY from '../img/sony.png';
import TOSHIBA from '../img/toshiba.png';
import VIZIO from '../img/vizio.png';
import YAMAHA from '../img/yamaha.png';

class Specialist extends React.Component {
  render() {
    const tvlogos = [LG, PANA, SAMSUNG, SONY, TOSHIBA, VIZIO];
    const audiologos = [YAMAHA, DENON, KENWOOD, PIONEER];
    const liCollection = (arr) => {
      return arr.map((x, i) => <img key={i} className="mw3 h-50 mw4-ns ma1 pa1 ba b--white-50 br-bottom w-25 h3-l" src={x} alt='brand logo' />)
    }
    return (
      <div className="mw8 center">
        <div className="f1-ns f2 lh-copy tc shri mb5">We Service</div>
        <div className="center flex flex-wrap justify-around">
          {liCollection(tvlogos)}
        </div>
        <div className="center flex flex-wrap justify-around mt4">
          {liCollection(audiologos)}
        </div>
      </div>
    );
  }
}

export default Specialist;
