import React from "react";
import "./User.css";
// import { useSelector } from 'react-redux'

const User = () => {
  // const user=useSelector((state)=>state.useReducer.user)
  return (
    <div class="container">
      <form id="user" action="" method="post">
        <h3>Quick Contact</h3>
        <h4>Contact us today, and get reply with in 24 hours!</h4>
        <fieldset>
          <input
            placeholder="Your name"
            type="text"
            tabindex="1"
            required
            autofocus
          ></input>
        </fieldset>
        <fieldset>
          <input
            placeholder="Your Email Address"
            type="email"
            tabindex="2"
            required
          ></input>
        </fieldset>
        <fieldset>
          <input
            placeholder="Your Phone Number"
            type="tel"
            tabindex="3"
            required
          ></input>
        </fieldset>
        <fieldset>
          <input
            placeholder="Your Web Site starts with http://"
            type="url"
            tabindex="4"
            required
          ></input>
        </fieldset>
        <fieldset>
          <textarea
            placeholder="Type your Message Here...."
            tabindex="5"
            required
          ></textarea>
        </fieldset>
        <fieldset>
          <button
            name="submit"
            type="submit"
            id="contact-submit"
            data-submit="...Sending"
          >
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default User;
