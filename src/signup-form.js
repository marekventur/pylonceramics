import React from 'react';
import "./signup-form.css";

export const SignupForm = () => {
  return <div className="block block--em block--signup-form">
    <form action="https://pylonceramics.us5.list-manage.com/subscribe/post?u=53f6eafa8049b7f5cea985b33&amp;id=e39c8bc277" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
      <h2>Let's stay in touch!</h2>
      <label>Email
        <input type="email" name="EMAIL" />
      </label>  
      <label>Name
        <input type="text" name="FNAME" />
      </label>  
      <input type="hidden" name="b_53f6eafa8049b7f5cea985b33_e39c8bc277" tabindex="-1" value="" />
      <input type="submit" value="Subscribe" name="subscribe" />
    </form>
  </div>;
};