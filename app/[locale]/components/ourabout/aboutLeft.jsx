import Image from "next/image";
import React from "react";
import Horse from "../../../../public/image/mainhorse.jpg";
import Friend from "../../../../public/image/mainfriend.jpg";

const AboutLeft = () => {
  return (
    <div className="about-left">
      <Image src={Horse} className="image-horse" />
      <div className="image-horse__text">
        <span></span>
        <p>Horse Riding Valley Tour</p>
      </div>
      <Image src={Friend} className="image-friend" />
      <div className="image-friend__text">
        <span></span>
        <p>Perfect Picnic Settings & Spots</p>
      </div>
    </div>
  );
};

export default AboutLeft;
