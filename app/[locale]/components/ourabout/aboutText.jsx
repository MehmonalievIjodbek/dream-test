"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";

const AboutText = () => {
  // const textVariants = {
  //   offscreen: {
  //     y: 30,
  //     opacity: 0,
  //   },
  //   onscreen: {
  //     y: 0,
  //     opacity: 1,
  //     transition: {
  //       duration: 0.4,
  //     },
  //   },
  // };
  // useEffect(() => {
  //   let w = window.innerWidth > 1024;

  //   gsap.to("#textTeam1", {
  //     y: w ? "-20" : "-100",
  //     duration: 5,
  //     scrollTrigger: {
  //       trigger: "#textTeam1",
  //       // markers: true,
  //       start: "bottom center",
  //       scrub: 1,
  //     },
  //   });
  // }, []);

  return (
    <main>
      {/* <motion.div
        whileHover={{ scale: 1.1 }} // Scale up the box when hovered
        style={{
          width: 100,
          height: 100,
          background: "blue",
          borderRadius: 20,
        }}
      ></motion.div> */}
      {/* <motion.div
        id="textTeam1"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 1 }}
      >
        <motion.p variants={textVariants}>WELCOME TO COZYSTAY LODGE</motion.p>
        <motion.h2 variants={textVariants}>
          {" "}
          Exceptional Chalets, tailored services and the experience of unique
          holidays
        </motion.h2>
        <motion.h4 variants={textVariants}>
          {" "}
          The CozyStay Lodge consists of exceptional hotels chalets forming a
          harmonious and refined environment. Each room is unique, with
          colourful décor, Victorian furniture and claw-foot bathtubs. We
          welcome guests with authentic wine country hospitality. Stay, sip, and
          savor the best of Napa wine country at CozyStay.
        </motion.h4>
        <div className="story-button">
          <motion.button>Explore Our Story</motion.button>
        </div>
        <motion.h6
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1,
          }}
        >
          Nestled in Napa Valley, CozyStay Lodge is a luxury boutique hotel in
          the heart of wine <br /> country, conveniently located in the historic
          Napa Mill neighbourhood, just steps from <br /> some of the best
          wineries and restaurants.
        </motion.h6>
      </motion.div> */}
      {/* <motion.h6
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 3,
        }}
      >
        Nestled in Napa Valley, CozyStay Lodge is a luxury boutique hotel in the
        heart of wine <br /> country, conveniently located in the historic Napa
        Mill neighbourhood, just steps from <br /> some of the best wineries and
        restaurants.
      </motion.h6> */}
      <p>WELCOME TO COZYSTAY LODGE</p>

      <h2>
        Exceptional Chalets, tailored services and the experience of unique
        holidays
      </h2>
      <h4>
        The CozyStay Lodge consists of exceptional hotels chalets forming a
        harmonious and refined environment. Each room is unique, with colourful
        décor, Victorian furniture and claw-foot bathtubs. We welcome guests
        with authentic wine country hospitality. Stay, sip, and savor the best
        of Napa wine country at CozyStay.
      </h4>
      <div className="story-button">
        <button>Explore Our Story</button>
      </div>
    </main>
  );
};

export default AboutText;
