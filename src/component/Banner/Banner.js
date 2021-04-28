import React from "react";
import { Image } from "react-bootstrap";
import Images from "../Images/BannerFinal.png";

const Banner = () => {
  return (
    <div className="container mt-5">
      <Image src={Images} fluid />
    </div>
  );
};

export default Banner;
