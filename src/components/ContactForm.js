import React from 'react';

const ContactForm = props => 
<div>
<form class="pa4 black-80 bg-orange w-90 center">
  <div class="measure">
    <label for="name" class="f6 b db mb2">Name <span class="normal black-60">(optional)</span></label>
    <input id="name" class="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" />>
    <small id="name-desc" class="f6 black-60 db mb2">Helper text for the form control.</small>
  </div>
  <div>
    <label for="comment" class="f6 b db mb2">Comments <span class="normal black-60">(optional)</span></label>
    <textarea id="comment" name="comment" class="db border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2" aria-describedby="comment-desc"></textarea>
    <small id="comment-desc" class="f6 black-60">Helper text for a form control. Can use this text to <a href="#" class="link underline black-80 hover-blue">link to more info.</a></small>
  </div>
</form>
</div>

export default ContactForm;