import React from "react";
import widget from "../../../../public/image/section.jpg";
import Image from "next/image";

const index = () => {
  return (
    <div className="widget-container">
      <div>
        <div className="">
          <Image src={widget} className=" widget-container__image" />
        </div>
      </div>
      <div className="widget-container__text">
        <p>THINGS TO DO IN THE VALLEY</p>
        <h1>Make The Most Of Your Time</h1>
        <h6>
          Make the most of your time in Napa Valley with our collection of
          curated packages and experiences. From private wine tours of the
          valley’s most celebrated vineyards to romantic couples’ getaways, our
          team will take care of every detail so you can enjoy a relaxing
          retreat.
        </h6>
        <div className="widget-container__button">
          <button>View Packages</button>
        </div>
      </div>
    </div>
  );
};

export default index;
