import React, { useRef, useEffect } from "react";
import IntlTelInput from "intl-tel-input";
import "intl-tel-input/build/css/intlTelInput.css"; // CSS for intl-tel-input
import emailjs from "@emailjs/browser";
import "./ContactUs.css"; // Assuming you have saved the CSS styles in this file

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form.current, {
        publicKey: "YOUR_PUBLIC_KEY",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="Intro" id="ContactUs">
      <div className="c-left">
        <div className="c-name">
          <span>Contact Us</span>
          <span>We'd love to hear from you</span>
          <span>
            Feel free to reach out with any questions or comments! <br /> dont
            forget to write your phone number with your country code
          </span>
        </div>
        <div className="c-buttons">
          <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
    </div>
  );
};
