import React from "react";

import TELESOUND from "../img/telesound-black.png";

const TeleHero = (props) => (
  <div className="center mt4 mt5-l mw8">
    <img className="w-90 pl3" src={TELESOUND} alt="" />
    <div>
      <header className="tc ph0 pt4">
        <div className="f2 f2-m f2-l fw2 black-90 mt1 lh-copy shri">
          TV - Audio - Video Electronics Services
        </div>
        <div className="f3 f3-m f2-l fw2 black-90 mt3 mt1-l lh-copy shri">
          Servicing LA since 1979
        </div>
        <div className="f3 f3-m f1-l fw2 black-90 mt3 mt1-l lh-copy shri">
          (818) 705-0572
        </div>
      </header>
    </div>
    <h4 className="pl2 ma0 pt5 f3 lh-copy">17711 Vanowen St</h4>
    <h4 className="pl2 ma0 f3 lh-copy">Reseda, CA 91335</h4>
    <h4 className="pl2 ma0 f5 lh-copy">(Cross Street White Oak)</h4>
  </div>
);

export default TeleHero;
