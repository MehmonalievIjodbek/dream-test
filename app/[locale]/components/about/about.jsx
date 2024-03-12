"use client";

import React from "react";
import { about } from "./../common/static/about";
import Image from "next/image";
import AboutImage from "../../../../public/image/abooutimage.jpg";

const About = () => {
  console.log("q", about);
  return (
    <div className="about">
      <div>
        <p>DISCOVER THE SERVICES WE OFFERED</p>
        <h3>Chalets With All the Benefits of a Hotel</h3>
        <div className="about-icons">
          {about?.map((item) => (
            <div className="about-text">
              <span>{item?.icons}</span>
              <div>
                <h5>{item?.text}</h5>
                <h6>{item?.label}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Image className="about-image" src={AboutImage} alt="Image" />
      </div>
    </div>
  );
};

export default About;
