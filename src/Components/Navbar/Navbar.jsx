import React, { useContext } from "react";
import "./Navbar.css";
import Toggle from "../Toggle/Toggle";
import Chinna from './Chinna-Kadinti.gif'
import { Link } from "react-scroll";
import { themeContext } from '../../Contex';

function Navbar() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div style={{ color: darkMode ? 'white' : '', background: darkMode ? 'black' : 'white' }} className="n-wrapper" id='Navbar'>
      <div className="n-left">
        <div className="n-name"><img src={Chinna} alt="" /></div>
        <Toggle />
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <Link
              spy={true}
              to ='Intro'
              smooth={true}
              activeClass="activeClass"
            >
              <li>Home</li>
            </Link>
            <Link
              spy={true}
              to='Services'
              smooth={true}
              
            >
              <li>Services</li>
            </Link>
            <Link
              spy={true}
              to='Experience'
              smooth={true}
              
            >
              <li>Experience</li>
            </Link>
            <Link
              spy={true}
              to='Portfolio'
              smooth={true}
             
            >
              <li>Portfolio</li>
            </Link>
          </ul>
        </div>
        <Link
          spy={true}
          to='Contact'
          smooth={true}
          
        >
          <button className="button n-button">Contact</button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
