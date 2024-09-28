import React, { useContext } from "react";
import "./Intro.css";
// import Github from "../../img/github.png";
// import LinkedIn from "../../img/linkedin.png";
// import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
// import boy from "../../img/boy.png";
import boy from "../../img/chinna.png";
import thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import glassessimoji from "../../img/glassesimoji.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { themeContext } from "../../Contex";
import { motion } from "framer-motion";

function Intro() {
  const transition = { duration: 2, type: "spring" };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    
    <div className="intro" id = 'Intro'>
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>Hey! I'm</span>
          <span>Chinna Kadinti</span>
          <span style= {{fontFamily: "cursive"}}>
            I am an innovative Front-End Developer with over 2 years of
            experience in creating seamless user experiences and efficient,
            responsive web applications. Recognized with the Brightest Beginner
            Award in 2022 for exceptional project contributions, I am proficient
            in modern libraries and frameworks, always eager to learn and
            implement the latest technologies.
          </span>
        </div>
        {/* <button className="button i-button">Hire me</button>
        <div className="i-icons">
          <a
            href="https://github.com/Chinna-Kadinti"
            rel="noreferrer"
            target="_blank"
          >
            <img src={Github} alt="Github" />
          </a>
          <a
            href="https://linkedin.com/in/kadinti-chinna004/"
            rel="noreferrer"
            target="_blank"
          >
            <img src={LinkedIn} alt="LinkedIn" />
          </a>
          <img src={Instagram} alt="Instagram" />
        </div> */}
      </div>

      <div className="i-right">
        <img src={Vector1} alt="Vector1" />
        <img src={Vector2} alt="Vector2" />
        <img src={boy} alt="boy" />
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassessimoji}
          alt="glasses emoji"
          className="floating-div"
        />
        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          style={{ top: "-4%", left: "68%" }}
          className="floating-div"
        >
          <FloatingDiv image={Crown} txt1="Web" txt2="Developer" />
        </motion.div>
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "8rem" }}
          transition={transition}
          style={{ top: "18rem", left: "0rem" }}
          className="floating-div"
        >
          <FloatingDiv
            image={thumbup}
            txt1="Brightest Beginner"
            txt2="Award(2022)"
          />
        </motion.div>
        {/* blur divs */}
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
}

export default Intro;
