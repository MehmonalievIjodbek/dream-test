//@ts-nocheck
"use client";
import React, { useState } from "react";
import { useRef } from "react";
import { addActiveScroll } from "@/utils/add-active-scroll";
import { useChangeLocale, useCurrentLocale, useI18n } from "@/locales/client";

import type { MenuProps } from "antd";
import { Button, Dropdown } from "antd";
import EngIcon from "../../common/Icons/language-en-icon";
import RuIcon from "../../common/Icons/language-ru-icon";
import Navbar from "./../../main/Navbar";
import Image from "next/image";

import DreamLogo from "../../../../../public/image/dream.png";
import MainLeft from "./../../main/mainLeft";
import MainRight from "./../../main/mainRight";
import MobileMenu from "./mobileMenu";

const Header = () => {
  const [open, setOpen] = useState(false);
  const currentLocale = useCurrentLocale();
  const changeLocale = useChangeLocale();
  const t = useI18n();

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <button type="button" onClick={() => changeLocale("en")}>
          EN
        </button>
      ),
    },
    {
      key: "2",
      label: (
        <button type="button" onClick={() => changeLocale("ru")}>
          RU
        </button>
      ),
    },
  ];

  const siteHeaderRef = useRef() as any;
  addActiveScroll(siteHeaderRef);
  return (
    <header ref={siteHeaderRef}>
      <div className="container-page">
        <div className="menuNav">
          <Navbar />
          <div className="mobile-menu">
            <MobileMenu />
          </div>

          <Image src={DreamLogo} width={70} height={70} />
          <div className="navbar-lang">
            <a className="navbar-lang__number" href="tel:+9989000000">
              +99890000000
            </a>
            <Dropdown menu={{ items }}>
              <a
                style={{ cursor: "pointer" }}
                onClick={(e) => e.preventDefault()}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  {currentLocale === "en" ? <EngIcon /> : <RuIcon />}
                  <p
                    style={{
                      fontSize: "16px",
                      textTransform: "uppercase",
                      color: "white",
                    }}
                  >
                    {currentLocale}
                  </p>
                </div>
              </a>
            </Dropdown>
            <Button className="navbar-lang__button">Reserve Now</Button>
          </div>
        </div>
      </div>
      <div className="main-order">
        <div className="main-order__flex">
          <MainLeft />
          <MainRight />
        </div>
      </div>
    </header>
  );
};

export default Header;
