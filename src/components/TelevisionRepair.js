import React from "react";
import TELESOUND from "../img/telesound.png";


//add a function in here to change the color on swipe down to a more
//psychedelic pink to match the about purple

const TelevisionRepair = () => (
  <nav className="bg-black-80 pa3 pa4-ns center">
    <a className="link dim white b f6 f5-ns dib mr3 mw5" href="#Home" title="Home">
      <img src={TELESOUND} alt="" />
    </a>
    <a className="link dim white f6 f5-ns dib mr3" href="#About" title="About">
      About
    </a>
    <a className="link dim white f6 f5-ns dib mr3" href="#Gallery" title="Gallery">
      Gallery
    </a>
    <a className="link dim white f6 f5-ns dib mr3" href="#Contact" title="Contact">
      Location
    </a>
  </nav>
);

export default TelevisionRepair;
