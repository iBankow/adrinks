import React, { useState } from "react";
import Switch from "react-switch";
import logo from "../../public/assets/img/logo.svg";
//import thema from "../../public/assets/img/thema.png";
//import thema2 from "../../public/assets/img/thema-2.png";
import menu from "../../public/assets/img/menu.png";
import menudark from "../../public/assets/img/menu-dark.svg";
import menu2 from "../../public/assets/img/menu-2.png";

import Nav from "../menu/menu";
import { Top } from "./style";

export default function Header({ toggleTheme, theme }) {
  const [handleActiveMenu, setActiveMenu] = useState(false);
  const [checked, setChecked] = useState(() => {
    if (theme.title === "dark") {
      return false;
    } else {
      return true;
    }
  });

  function handleChange(checked) {
    checked ? setChecked(true) : setChecked(false);
    toggleTheme();
  }

  return (
    <Top>
      <div className="head">
        <div>
          <a href="/">
            <img src={logo} alt="logo" className="img" />
          </a>
        </div>
        <section>
          <label htmlFor="small-radius-switch">
            <Switch
              checked={checked}
              onChange={handleChange}
              handleDiameter={28}
              offColor="#2546F0"
              onColor="#61821f"
              offHandleColor="#fff"
              onHandleColor="#222"
              height={40}
              width={70}
              borderRadius={50}
              activeBoxShadow="0px 0px 1px 2px #fffc35"
              uncheckedIcon={
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    fontSize: 15,
                    paddingRight: 2,
                  }}
                ></div>
              }
              checkedIcon={
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    color: "red",
                    fontSize: 18,
                  }}
                ></div>
              }
              uncheckedHandleIcon={
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    fontSize: 20,
                  }}
                ></div>
              }
              checkedHandleIcon={
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    color: "red",
                    fontSize: 18,
                  }}
                ></div>
              }
              className="react-switch"
              id="small-radius-switch"
            />
          </label>
          {/*<div
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
            </div>*/}
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
