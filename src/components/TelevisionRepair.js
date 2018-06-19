import React from "react";
import TELESOUND from "../img/telesound.png";

const TelevisionRepair = () => (
  <nav class="bg-black-80 pa3 pa4-ns">
    <a class="link dim white b f6 f5-ns dib mr3 mw5" href="#Home" title="Home">
      <img src={TELESOUND} alt="" />
    </a>
    <a class="link dim white f6 f5-ns dib mr3" href="#About" title="About">
      About
    </a>
    <a class="link dim white f6 f5-ns dib mr3" href="#Gallery" title="Gallery">
      Gallery
    </a>
    <a class="link dim white f6 f5-ns dib mr3" href="#Contact" title="Contact">
      Contact
    </a>
  </nav>
);

export default TelevisionRepair;
