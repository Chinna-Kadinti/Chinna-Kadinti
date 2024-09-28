import React, { useContext } from 'react'
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import Card from '../Card/Card';
import Resume from'./chinna_kadinti.pdf'
import { themeContext } from '../../Contex';
import { motion } from 'framer-motion';
function Services() {
 
    const transition = {duration: 2, type: 'spring'}
    const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='services' id='Services'>
        {/* left side */}
        <div className="awesome">
            <span style={{color: darkMode ? 'white' : ''}}>My Expertise and </span>
            <span>Offerings</span>
            <span style= {{fontFamily: "cursive"}} >
            I specialize in delivering high-quality web development and design services 

                <br />
                tailored to meet your needs. Explore my skills, certifications, and Projects
                <br />
                to understand how I can contribute to your success.
            </span>
            <a href={Resume} download={Resume}>

            <button className="button s-button">Download CV</button>
            </a>
            <div className="blur s-blur1" style={{background:"#ABF1FF94"}}></div>
        </div>
        {/* right side */}
        <div className="cards">
            
            <motion.div
            whileInView = {{left: '14rem'}}
            initial = {{left: '25rem'}}
            transition = {transition}
            style={{left: '14rem'}}>
                <Card
                emoji = {HeartEmoji}
                heading= {'Skills'}
                detail={"Html, CSS, JavaScript(ES6+), ReactJS, ReduxJS, Typescript, NextJS, MongoDB, Tailwind CSS, Git, GitHub"}
                />
            </motion.div>
            {/* second card */}
            <div
            whileInView = {{left: '25rem'}}
            initial = {{left: '25%'}}
            transition = {transition}
            style={{top: '12rem', left: '-4rem'}}>
                <Card
                emoji={Glasses}
                heading={"Certifications"}
                detail={  <>
                    * ReactJS-Completed Guide 2024 | Udemy  <br />
                    * Javascript-Completed Guide 2024 | Udemy <br/>
                    * Git-Practical Guide | Udemy
                </>}
                
                />
            </div>
            <motion.div
            whileInView = {{left: '12rem' }}
            initial = {{top:'19rem', left: '25rem'}}
            transition = {transition}
            style={{top: '19rem', left: '12rem'}}>
                <Card
                emoji={Humble}
                heading={"Achievements"}
                detail={<>
                    * Quarterly Champ Award at Wipro <br />
                    * Brightest Beginner Award in Wipro (2022)<br />
                    * Prathibha Award in Diploma Education (2018) <br />
                </>}
                />
            </motion.div>
            <div className="blur s-blur2" style={{ background: "rgb(238 210 255"}}></div>
        </div>
    </div>
  )
}

export default Services