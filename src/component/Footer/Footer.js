import React from "react";
import Image from "../Images/youtube.png";
import InstaImg from "../Images/instagram-logo-270x270 (1).jpg";
import TwitImg from "../Images/twitter.png";

const Footer = (props) => {
  return (
    <div className="container mt-3 bg-light mt-3">
      <div class="social-container text-center">
        <h3>Social Follow</h3>
        <a
          href="http://www.football365.com/aston-villa/rss"
          className="youtube social"
        >
          <img style={{ height: "40px" }} src={Image} alt="" />
        </a>

        <a
          href="http://www.football365.com/aston-villa/rss"
          className="youtube social"
        >
          <img style={{ height: "40px" }} src={InstaImg} alt="" />
        </a>
        <a
          href="http://www.football365.com/aston-villa/rss"
          className="youtube social"
        >
          <img style={{ height: "65px" }} src={TwitImg} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
