import Image from "next/image";
import React from "react";
import Horse from "../../../../public/image/maincloud.jpg";
import Friend from "../../../../public/image/mainfruit.jpg";
const AboutRight = () => {
  return (
    <div className="about-right">
      <Image src={Horse} className="image-cloud" />
      <div className="image-cloud__text">
        <span></span>
        <p>Horse Riding Valley Tour</p>
      </div>
      <Image src={Friend} className="image-fruit" />
      <div className="image-fruit__text">
        <span></span>
        <p>Perfect Picnic Settings & Spots</p>
      </div>
    </div>
  );
};

export default AboutRight;
