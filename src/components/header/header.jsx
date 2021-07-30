import React, { useState } from "react";
import logo from "../../public/assets/img/logo.svg";
import thema from "../../public/assets/img/thema.png";
import thema2 from "../../public/assets/img/thema-2.png";
import menu from "../../public/assets/img/menu.png";
import menudark from "../../public/assets/img/menu-dark.svg";
import menu2 from "../../public/assets/img/menu-2.png";

import Nav from "../menu/menu";
import { Top } from "./style";

export default function Header({ toggleTheme, theme }) {
  const [handleActiveMenu, setActiveMenu] = useState(false);

  return (
    <Top>
      <div className="head">
        <div>
          <a href="/" passHref>
            <img src={logo} alt="logo" className="img" />
          </a>
        </div>
        <section>
          <div
            className="icon"
            onClick={(e) => {
              toggleTheme();
            }}
          >
            {theme.title === "dark" ? (
              <img src={thema2} alt="thema" className="thema" />
            ) : (
              <img
                src={handleActiveMenu ? thema2 : thema}
                alt="thema"
                className="thema"
              />
            )}
          </div>
          <div className="icon">
            {theme.title === "dark" ? (
              <img
                src={menudark}
                alt="menu"
                onClick={() => {
                  handleActiveMenu === true
                    ? setActiveMenu(false)
                    : setActiveMenu(true);
                }}
              />
            ) : (
              <img
                src={handleActiveMenu ? menu2 : menu}
                alt="menu"
                onClick={() => {
                  handleActiveMenu === true
                    ? setActiveMenu(false)
                    : setActiveMenu(true);
                }}
              />
            )}
            {handleActiveMenu && (
              <div
                className={`background ${
                  handleActiveMenu ? "fadeIn" : "fadeOut"
                }`}
              >
                <Nav />
              </div>
            )}
          </div>
        </section>
      </div>
      {handleActiveMenu && (
        <div className={`img-menu ${handleActiveMenu ? "fadeIn" : "fadeOut"}`}>
          <div className="img-bg" alt="crew" />
          <div className="overlay"></div>
        </div>
      )}
    </Top>
  );
}
