import React from "react";
import Typist from "react-typist";

import TELESOUND from "../img/telesound-black.png";

//import Particles from "react-particles-js";
import particleConfig from "../utils/particleConfig";

const TeleHero = props => (
  <div className="mw7 center mt6">
    <img src={TELESOUND} alt="" />
    <Typist cursor={{ show: false }}>
      <header class="tc ph0">
        <div class="f3 f3-m f3-l fw2 black-80 mt3 lh-copy marker">
          Est. 1979
        </div>
        <div class="f4 f4-m f4-l fw2 black-80 mt0 lh-copy marker">
          TV, Audio-Video Electronics Repair
        </div>
      </header>
    </Typist>
    <h4 className="pl2 ma0 pt6 f3 lh-copy">17711 Vanowen St</h4>
    <h4 className="pl2 ma0 f3 lh-copy">(Cross Street White Oak)</h4>
    <h4 className="pl2 ma0 f3 lh-copy">Reseda, CA 91335</h4>
  </div>
);

export default TeleHero;
