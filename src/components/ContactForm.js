import React from 'react';

//import Particles from "react-particles-js";
import particleConfig from "../utils/particleConfig";

const ContactForm = props => 
<div>
<form className="pa4 black-80 bg-blue w-90 center">
  <div className="measure">
    <label htmlFor="name" className="f6 b db mb2">Name <span className="normal black-60">(optional)</span></label>
    <input id="name" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" />>
    <small id="name-desc" className="f6 black-60 db mb2">Helper text for the form control.</small>
  </div>
  <div>
    <label htmlFor="comment" className="f6 b db mb2">Comments <span className="normal black-60">(optional)</span></label>
    <textarea id="comment" name="comment" className="db border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2" aria-describedby="comment-desc"></textarea>
    <small id="comment-desc" className="f6 black-60">Helper text for a form control. Can use this text to <a href="#" className="link underline black-80 hover-blue">link to more info.</a></small>
  </div>
</form>
</div>

export default ContactForm;