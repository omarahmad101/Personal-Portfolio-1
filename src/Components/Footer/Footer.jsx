import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>Omar.ahmad.dahy@Outlook.com</span>
        <div className="f-icons">
        <a href="https://www.instagram.com/omar.a.dahy288?igsh=M29vZzBvYzhoY3V2&utm_source=qr" target="_blank"><Insta color="white" size={"3rem"} /></a>
          <a href="https://www.facebook.com/omar.ahmad2001?mibextid=JRoKGi" target="_blank"><Facebook color="white" size={"3rem"} /></a>
          <a href="https://github.com/omarahmad101" target="_blank"><Gitub color="white" size={"3rem"} /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;