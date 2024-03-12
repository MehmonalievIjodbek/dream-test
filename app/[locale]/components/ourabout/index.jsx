import React from "react";
import AboutText from "./aboutText";
import AboutLeft from "./aboutLeft";
import AboutRight from "./aboutRight";
import AboutCenter from "./aboutCenter";

const OurAbout = () => {
  return (
    <div>
      <AboutText />
      <div className="aboutour">
        <AboutLeft />
        <AboutCenter />
        <AboutRight />
      </div>
    </div>
  );
};

export default OurAbout;
