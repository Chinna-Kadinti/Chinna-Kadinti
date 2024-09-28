import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";
import Github from "@iconscout/react-unicons/icons/uil-github";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";

function Footer() {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>chinna.kadinti1@gmail.com</span>
        <div className="f-icons">
          <a href="https://www.linkedin.com/in/kadinti-chinna004/" rel="noreferrer" target="_blank">
            <LinkedIn color="white" size="3rem" />
          </a>
          <a href="https://github.com/Chinna-Kadinti" rel="noreferrer" target="_blank">
            <Github color="white" size="3rem" />
          </a>
          <a href="https://www.instagram.com/c_h_i_n_n_a.5/" rel="noreferrer" target="_blank">
            <Insta color="white" size="3rem"/>
          </a>
          
        </div>
        <span>2024 Copyright © Chinna</span>
      </div>
    </div>
  );
}

export default Footer;
