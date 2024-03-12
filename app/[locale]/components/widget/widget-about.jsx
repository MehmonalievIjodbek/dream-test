import React from "react";
import { widget } from "../common/static/widget";
import Image from "next/image";

const WidgetAbout = () => {
  return (
    <div className="widget-about">
      {widget?.map((item) => (
        <div className="widget-about__card">
          <div className="relative  overflow-hidden bg-cover bg-no-repeat">
            <h3 className="widget-value">$160 / PERSON</h3>
            <Image
              className="widget-image transition duration-300 ease-in-out hover:scale-110"
              src={item?.image}
              alt="Image"
              width={347}
              height={260}
            />
            {/* <img
              src="https://tecdn.b-cdn.net/img/new/fluid/city/113.webp"
              className="max-w-xs transition duration-300 ease-in-out hover:scale-110"
              alt="Louvre"
            /> */}
          </div>
          {/* <Image src={item?.image} alt="Image" width={347} height={260} /> */}
          <p>{item?.label}</p>
          <h4>{item?.text}</h4>
          <h5>{item?.description}</h5>
        </div>
      ))}
    </div>
  );
};

export default WidgetAbout;
