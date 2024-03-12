import React from "react";
import OurAbout from "./components/ourabout/index";
import Image from "next/image";
import ImageMainBottom from "../../public/image/imga.jpg";
import Widget from "../../app/[locale]/components/widget/index";
import WidgetAbout from "./components/widget/widget-about";
import WidgedRoom from "./components/widget-room/index";
import About from "./components/about/about";
import AboutCard from "./components/about/aboutCard";

export const metadata = {
  title: "Dream Inn",
  description: "Dream Inn",
};
const Home = () => {
  return (
    <div>
      <div className="page">
        <OurAbout />
      </div>
      <Image alt="Image" src={ImageMainBottom} className="main-bottom" />
      <div className="page">
        <Widget />
        <WidgetAbout />
      </div>
      <WidgedRoom />
      <div className="widget-room__button">
        <button>Discover All Suites</button>
      </div>
      <div className="page">
        <About />
        <AboutCard />
      </div>
    </div>
  );
};

export default Home;
