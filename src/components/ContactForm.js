import React from 'react';

import EmailForm from './EmailForm';


// import Particles from "react-particles-js";
// import particleConfig from "../utils/particleConfig";

const ContactForm = props =>
    <div className="mw8 center">
        <div className="w-50 fr">
            <p>Or Visit Us</p>
            <div className="f3 f3-m f1-l fw2 black-90 mt3 mt1-l lh-copy shri">
                (818) 705-0572
        </div>
            <h4 className="pl2 ma0 pt3 pt4-l f3 lh-copy">17711 Vanowen St</h4>
            <h4 className="pl2 ma0 f3 lh-copy">Reseda, CA 91335</h4>
            <h4 className="pl2 ma0 f6 lh-copy">(Cross Street White Oak)</h4>
        </div>
        <div className="w-50 fr">
            <p>Send Us An Email</p>
            <EmailForm to="telesoundreseda@gmail.com" className='mw6' />
        </div>
    </div>

export default ContactForm;