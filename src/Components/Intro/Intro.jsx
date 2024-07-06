import React from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png"
import glassesimoji from "../../img/glassesimoji.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";

const Intro = () => {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hy! I Am</span>
          <span>Oamr Ahmad Dahy</span>
          <span>
            Frontend Developer with high level of experience in web designing
            and development, producting the quality work
          </span>

          <button className="button i-button">Hire Me</button>

          <div className="i-icons">
            <a
              href="https://github.com/omarahmad101"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Github} alt="GitHub" />
            </a>
            <a
              href="http://linkedin.com/in/omarahmaddahy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={LinkedIn} alt="LinkedIn" />
            </a>
            <a
              href="https://www.instagram.com/omar.a.dahy288/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Instagram} alt="Instagram" />
            </a>
          </div>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        <img src={glassesimoji} alt="" />
      </div>
      <div style={{ position: 'absolute', top: '20%', left: '80%' }}>
      <FloatingDiv img={crown} text1="Web" text2="Developer" />
      </div>

      <div style={{ position: 'absolute', top: '29rem', left: '39rem' }}>
          <FloatingDiv img={ thumbup } text1="Best Design" text2="Award" />
        </div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "26rem",
            width: "21rem",
            height: "11rem",
            left: "28rem",
          }}
        ></div>

        
    </div>
  );
};

export default Intro;
