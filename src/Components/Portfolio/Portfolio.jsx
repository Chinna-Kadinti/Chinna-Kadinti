import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
// import Sidebaom "../../img/sidebar.png";
import Ecommerce from "../../img/Ecommerce (2).png";
// import HOC from "../../img/hoc.png";
import Redux1 from "../../img/ReduxImg.jpg";
// import MusicApp from "../../img/musicapp.png";
import Youtube from "../../img/Ytclone.jpg";
import Netflix from "../../img/Netflix.jpg";
import "swiper/css";
import { themeContext } from "../../Contex";
function Portfolio() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="Portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
      <span>Portfolio</span>
      {/* slider */}
      <>
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          grabCursor={true}
          className="portfolio-slider"
        >
          <SwiperSlide>
            <a
              href="https://github.com/Chinna-Kadinti/youtube-clone.git"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Youtube} alt="" />
            </a>
            <p
              style={{
                fontFamily: "cursive",
                color: darkMode ? "white" : "",
                fontSize: "12px",
              }}
            >
              A fully responsive YouTube clone built with React, featuring video
              display, search functionality, and user interface similar to
              YouTube.
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <a
              href="https://github.com/Chinna-Kadinti/netflix-clone-chinna.git"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Netflix} alt="" />
            </a>
            <p
              style={{
                fontFamily: "cursive",
                color: darkMode ? "white" : "",
                fontSize: "12px",
              }}
            >
              A Netflix-like streaming platform developed using React,
              incorporating dynamic content display, user interface design, and
              browsing functionality.
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <a
              href="https://github.com/Chinna-Kadinti/Ecommerce.git"
              rel="noreferrer"
              target="_blank"
            >
              <img src={Ecommerce} alt="" />
            </a>
            <p
              style={{
                fontFamily: "cursive",
                color: darkMode ? "white" : "",
                fontSize: "12px",
              }}
            >
              A comprehensive e-commerce front-end built with React, showcasing
              product listings, filtering options, and an interactive shopping
              cart interface.
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <a
              href="https://github.com/Chinna-Kadinti/Redux-Router.git"
              rel="noreferrer"
              target="_blank"
            >
              <img src={Redux1} alt="" />
            </a>
            <p
              style={{
                fontFamily: "cursive",
                color: darkMode ? "white" : "",
                fontSize: "12px",
              }}
            >
              Redux project demonstrates basics of state management with user
              authentication and a dynamic counter, ensuring consistent state
              across routes.
            </p>
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
}

export default Portfolio;
