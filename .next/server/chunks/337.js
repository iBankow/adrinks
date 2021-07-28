exports.id = 337;
exports.ids = [337];
exports.modules = {

/***/ 2210:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ Background; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/background/style.js

const Back = (external_styled_components_default()).section`
  z-index: -1000;
  @media (max-width: 500px) {
    max-width: 30rem;
  }

  .texture {
    z-index: -5;
    opacity: 0.2;
    background-size: contain;
    top: 0;
    position: absolute;
    width: 100%;
    height: 65.25rem;
    background-image: url("assets/img/texture-2.png");
  }

  &:after {
    opacity: 1;
    z-index: -1;
    position: absolute;
    bottom: ${props => props.theme.title === "dark" ? "0px" : "0px"};
    width: 100%;
    height: 150px;
    background: linear-gradient(
      0deg,
      ${props => props.theme.title === "dark" ? `${"#222"}` : "rgba(248, 249, 242, 1)"},
      transparent
    );

    @media (max-width: 500px) {
      content: none;
    }
    ${props => props.bar && "content: '';"}
  }

  .home {
    z-index: -1;
    opacity: 1;
    background-size: contain;
    mix-blend-mode: color-dodge;
    top: 0;
    z-index: -1;
    position: absolute;
    width: 100%;
    height: 65.25rem;

    background-image: linear-gradient(
      180deg,
      ${props => props.theme.title === "dark" ? `${"#222, #222"}` : "rgba(145, 166, 60, 0.28) 71.87%, rgba(145, 166, 60, 0) 100%"}
    );
  }

  .bar {
    z-index: -1000;
    opacity: 1;
    background-size: contain;
    top: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      180deg,
      ${props => props.theme.title === "dark" ? `${"#222, #222"}` : "rgba(255, 255, 255, 1) 71.87%, rgba(255, 255, 255, 1) 100%"}
    );
  }

  div.background {
    z-index: -20;
    position: absolute;
    width: 100%;
    height: 899px;
    left: 0px;
    top: 0px;
    background: linear-gradient(
      180deg,
      rgba(145, 166, 60, 0.28) 71.87%,
      rgba(145, 166, 60, 0) 100%
    );
    background: ${props => props.theme.colors.background};
  }

  div.rectangle.home {
    z-index: -6;
    position: absolute;
    width: 68.75rem;
    height: ${props => props.theme.title === "dark" ? `${"10rem"}` : "53.25rem"};
    left: 0px;
    top: 0px;

    background: ${props => props.theme.title === "dark" ? "black" : props.theme.colors.darkSecondary};
    border-radius: 0px 0px 500px 0px;
    div.rectangle > div.circle {
      border-radius: 50%;
      position: absolute;
      width: 480px;
      height: 480px;
      left: 45rem;
      top: -151px;

      background: rgba(255, 255, 255, 0.07);
    }

    div.circle2 {
      z-index: 1;

      border-radius: 50%;

      position: absolute;
      width: 323px;
      height: 323px;
      left: 50rem;
      top: -125px;

      background: rgba(255, 255, 255, 0.05);
    }
  }

  div.rectangle {
    ${props => props.hiddenOverflow && "overflow: hidden;"}
    ${props => props.theme.title === "dark" && `box-shadow: 0 0.25rem 3.125rem -1.562rem rgba(37, 70, 240, 0.6);`}
    

    z-index: -6;
    position: absolute;
    width: 75.625rem;
    height: 10.9375rem;
    left: 0px;
    top: 0px;

    @media (max-width: 500px) {
      width: 90%;
      border-radius: 0px 0px 150px 0px;
    }

    background: ${props => props.theme.colors.darkSecondary};
    border-radius: 0px 0px 500px 0px;
    div.circle {
      border-radius: 50%;
      position: absolute;
      width: 480px;
      height: 480px;
      left: 45rem;
      top: -151px;

      background: rgba(255, 255, 255, 0.07);
    }

    div.circle2 {
      z-index: 1;

      border-radius: 50%;

      position: absolute;
      width: 323px;
      height: 323px;
      left: 50rem;
      top: -125px;

      background: rgba(255, 255, 255, 0.05);
    }

    @media (max-width: 500px) {
      overflow: hidden;

      width: 100%;

      div.circle {
        border-radius: 50%;
        position: absolute;
        width: 280px;
        height: 280px;
        left: 2rem;
        top: -10rem;
        background: rgba(255, 255, 255, 0.07);
      }

      div.circle2 {
        z-index: 1;

        border-radius: 50%;

        position: absolute;
        width: 323px;
        height: 323px;
        left: 0rem;
        top: -125px;

        background: rgba(255, 255, 255, 0.05);
      }
    }
  }
`;

;// CONCATENATED MODULE: ./components/background/index.jsx





function Background({
  home,
  bar,
  content,
  hiddenOverflow
}) {
  const {
    0: contents,
    1: setContents
  } = (0,external_react_.useState)("");
  (0,external_react_.useEffect)(() => {
    function loadContent() {
      if (content === true) {
        setContents(null);
      } else {
        setContents(true);
      }
    }

    loadContent(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return /*#__PURE__*/jsx_runtime_.jsx(Back, {
    bar: contents,
    hiddenOverflow: hiddenOverflow,
    children: home === true ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "texture"
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "texture home"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "rectangle home",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "circle2"
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "circle"
        })]
      })]
    }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [bar ? /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "texture bar"
      }) : /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "texture home"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "rectangle",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "circle2"
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "circle"
        })]
      })]
    })
  });
}

/***/ }),

/***/ 5862:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ Footer; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/footer/styles.js

const FooterMain = (external_styled_components_default()).footer`
  background: ${props => props.theme.colors.background};

  padding: 5rem 0;
  align-items: center;
  position: relative;
  overflow-y: hidden;

  @media (max-width: 500px) {
    padding: 2rem 0;
  }
  &:before {
    content: "";
    position: absolute;
    width: 173.67px;
    height: 304.43px;
    background-image: url("assets/img/alecrim.png");
    background-size: 100%;
    background-repeat: no-repeat;
    left: 50%;
    bottom: -5rem;
    transform: rotate(-68.62deg);
    z-index: -1;

    @media (max-width: 500px) {
      content: none;
    }
  }

  .svg {
    filter: invert(${props => props.theme.title === "dark" ? "0" : "1"});
  }
  section {
    z-index: 1000;
    position: relative;
    .top {
      position: absolute;
      right: 0;
      top: -2rem;

      &:hover {
        cursor: pointer;
      }

      @media (max-width: 500px) {
        top: -1.5rem;
        img {
          width: 3rem;
        }
      }
    }
    border-top: solid 1px rgba(221, 221, 221, 1);
    height: 100%;
    align-items: center;
    max-width: 68.75rem;
    margin: 0 auto;
    a {
      color: ${props => props.theme.colors.textBlack};
      font-family: Ubuntu;
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: 24px;
    }

    .container {
      padding: 3rem 0;
      display: flex;
      .links {
        margin-left: 5rem;
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 40rem;
        @media (max-width: 500px) {
          margin-left: 2rem;
        }
        .icons {
          display: flex;
          width: 5rem;
          justify-content: space-around;
        }
      }
    }

    .copy {
      display: flex;
      justify-content: space-between;

      font-family: Ubuntu;
      text-align: left;
      color: ${props => props.theme.colors.textBlack};
      span {
        font-size: 12px;
        font-weight: 700;
        line-height: 24px;
      }
      p {
        font-size: 12px;
        font-weight: 400;
        line-height: 12px;
      }

      img {
        filter: invert(
          ${props => props.theme.title === "dark" ? "1" : "0"}
        );
      }
    }

    @media (max-width: 500px) {
      max-width: 30rem;

      a {
        font-size: 16px;
        line-height: initial;
      }
    }
  }
`;
const WhatsApp = (external_styled_components_default()).div`
  z-index: 200;
  position: fixed;
  bottom: 230px;
  right: 397px;
  border-radius: 50px;
  background-color: #5db543;
  border: 0px solid transparent;
  color: #fff;
  padding: 20px;
  display: flex;
  cursor: pointer;
  transition: all 300ms ease;
  align-items: center;

  & > span {
    margin-left: -10px;
    overflow: hidden;
    width: 0;
    transition: 300ms all ease;
  }
  &:hover > span {
    margin-left: 0px;
    width: 75px;
  }
  &:hover {
    transform: scale(1.1);
    padding: 15px 20px;
    margin-left: -75px;
    border: 10px solid #cff1c4;
  }
  &::before {
    position: absolute;
    z-index: -1;
    top: -10px;
    left: -10px;
    content: "";
    width: calc(100% + 20px);
    height: calc(100% + 20px);
    background-color: #5db543;
    border-radius: 50px;
    -webkit-animation: ping 3s ease-in-out infinite both;
    animation: ping 3s ease-in-out infinite both;
  }

  & > svg {
    margin-left: 10px;
  }
  @-webkit-keyframes ping {
    0% {
      -webkit-transform: scale(0.2);
      transform: scale(0.2);
      opacity: 1;
    }
    80% {
      -webkit-transform: scale(1.2);
      transform: scale(1.2);
      opacity: 0;
    }
    100% {
      -webkit-transform: scale(2.2);
      transform: scale(2.2);
      opacity: 0;
    }
  }
  @keyframes ping {
    0% {
      -webkit-transform: scale(0.2);
      transform: scale(0.2);
      opacity: 1;
    }
    80% {
      -webkit-transform: scale(1.2);
      transform: scale(1.2);
      opacity: 0;
    }
    100% {
      -webkit-transform: scale(2.2);
      transform: scale(2.2);
      opacity: 0;
    }
  }
`;

// EXTERNAL MODULE: ./public/assets/img/logo.svg
var logo = __webpack_require__(2627);
;// CONCATENATED MODULE: ./public/assets/img/insta.svg
/* harmony default export */ var insta = ({"src":"/_next/static/image/public/assets/img/insta.488d4d8e7dab4ef2e468571af4f643ec.svg","height":30,"width":30});
;// CONCATENATED MODULE: ./public/assets/img/face.svg
/* harmony default export */ var face = ({"src":"/_next/static/image/public/assets/img/face.49b7853b4b9b8bfa69aaebfde91f9106.svg","height":30,"width":30});
;// CONCATENATED MODULE: ./public/assets/img/zukt.svg
/* harmony default export */ var zukt = ({"src":"/_next/static/image/public/assets/img/zukt.4f870d618943d9b29be31d0cb443c536.svg","height":16,"width":31});
;// CONCATENATED MODULE: ./public/assets/img/top.svg
/* harmony default export */ var img_top = ({"src":"/_next/static/image/public/assets/img/top.e5cbbfd4bed32023d9cf934b91142a4d.svg","height":58,"width":58});
;// CONCATENATED MODULE: ./components/footer/footer.jsx









function Footer() {
  const handleClick = () => {
    window[`scrollTo`]({
      top: 0
    });
  };

  return /*#__PURE__*/jsx_runtime_.jsx(FooterMain, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "top",
        children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
          src: img_top,
          alt: "logo zukt",
          onClick: handleClick
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "container",
        children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
          src: logo/* default */.Z,
          alt: "logo",
          className: "svg"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "links",
          children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
            children: "KIT GIN"
          }), /*#__PURE__*/jsx_runtime_.jsx("a", {
            children: "BAR A.DRINKS"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "icons",
            children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
              src: face,
              alt: "face",
              className: "icon svg"
            }), /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
              src: insta,
              alt: "insta",
              className: "icon svg"
            })]
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "copy",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            children: "Pol\xEDtica de Privacidade e Termos de Uso"
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            children: "\xA9 2021. a.drinks. Todos os direitos Reservados. "
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
          src: zukt,
          alt: "logo zukt"
        })]
      })]
    })
  });
}

/***/ }),

/***/ 1627:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ Header; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./public/assets/img/logo.svg
var logo = __webpack_require__(2627);
;// CONCATENATED MODULE: ./public/assets/img/thema.png
/* harmony default export */ var thema = ({"src":"/_next/static/image/public/assets/img/thema.a2b6f5acb244f65c0d224a4fee0b4be1.png","height":44,"width":105,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAUElEQVR42i3LsRGCQBQFwH1oYsQ4Y2opFmALRpYCBdECNdAFMdfA5wKCDTf/6f0krzCgSXY88MM2SEZxVHRuhe7Tzd14J1/RlLrmQq1kQjsBaaAUHTYLSSwAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./public/assets/img/thema-2.png
/* harmony default export */ var thema_2 = ({"src":"/_next/static/image/public/assets/img/thema-2.03a9a14cf187dd6ab74950d8adedc6b4.png","height":44,"width":105,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAQAAAAEwYbDAAAAOUlEQVR42gXAsQ1AQAAF0F9odDRCotCIAZhAYQjK09jbHC+X6K02k2gVeywGo1lcfmd8Hrei03gdFdO5HOmRgD6kAAAAAElFTkSuQmCC"});
;// CONCATENATED MODULE: ./public/assets/img/menu.png
/* harmony default export */ var menu = ({"src":"/_next/static/image/public/assets/img/menu.74a1e129064487fa26a421a376dfbeb2.png","height":50,"width":50,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA1UlEQVR4nCVPuwrCQBCczSXxgWJjIVjoRhQEQW0stFAICIIWgr2djaV+hpZptPIrrPID+SbPcw4PBoabx+5KkiSO7y4iVwAFOchn5DfAXURVSZATb+JMwISShTE27otUVJVf8CnDtKWI6aJimq3I2g/bOMLXvkQko+8Zl+HWh8ap26+eRXAUVS0ovJjMwgiPKBak+8ap06v8DWxAYIDJvGza3ZJlEyiawIiFX5iGG2vz1a7+HoxqPoUgQEZpwytSGtRFJbkvt/XrcFwrvIEbz+D8mbj8AJQnO8T32pbeAAAAAElFTkSuQmCC"});
;// CONCATENATED MODULE: ./public/assets/img/menu-dark.svg
/* harmony default export */ var menu_dark = ({"src":"/_next/static/image/public/assets/img/menu-dark.8169bcfdb54b5b09035c0292d3764009.svg","height":50,"width":50});
;// CONCATENATED MODULE: ./public/assets/img/menu-2.png
/* harmony default export */ var menu_2 = ({"src":"/_next/static/image/public/assets/img/menu-2.810f3771849eb568a32c72c439983ff0.png","height":50,"width":50,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAs0lEQVR4nF2PMQrCQBBFfwheyQtYeQo7G8vkGKYSG1NpkSukCohl0CNYaKMYooUYYpEd30awcODBzs6fPzOBc84kJRBDCT6GMIfIC/yjgBxm4GMpubEUjLyAvI8QOpCaU6j20ikYyAu87RroUkqnqdpNVWe4vSd/AreS4VhtEWxmsq+AGtGcQ72OjCCvs1D25B30I1jSFbrvc91SbytZi5t+S3KmJXocYl0XJUX+OdOMRkUfLH1dKrkRs+wAAAAASUVORK5CYII="});
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/menu/style.js

const Menu = (external_styled_components_default()).nav`
  z-index: 100;
  cursor: initial;
  list-style: none;
  text-align: right;
  color: ${props => props.theme.colors.textWhite};
  height: 1000px;
  position: relative;
  a,
  span {
    font-size: 30px;
    line-height: 40px;
    font-weight: 900;
  }

  ul {
    margin-top: 3rem;
    li {
      display: flex;
      flex-direction: column;
      padding: 1.5rem 0;

      transition: color 200ms ease-in-out;

      &:hover {
        color: ${props => props.theme.colors.primary};
        cursor: pointer;
      }
      p {
        font-size: 16px;
        line-height: 26px;
      }
    }
  }

  @media (max-width: 500px) {
    cursor: initial;
    text-align: right;
    height: 750px;
    position: relative;

    ul {
      margin-top: 1rem;
      margin-right: 0.5rem;
    }
  }
`;

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/menu/footer/style.js

const Footer = (external_styled_components_default()).section`
  margin-top: 30px;
  div.rodape {
    align-items: center;
    margin-left: auto;
    display: flex;
    div.info {
      margin-left: 80px;
    }
    div.icons {
      display: flex;
      .icon {
        margin-left: 1rem;
      }
    }
    div > span {
      font-size: 18px;
      color: ${props => props.theme.colors.primary};
      font-weight: 900;
      line-height: 30px;
    }
    div > p {
      font-size: 16px;
      line-height: 25px;
      margin: 0;
    }
  }

  @media (max-width: 500px) {
    div.rodape {
      justify-content: space-around;
      align-items: center;
      display: flex;
      div.info {
        margin: 0 15px;
      }
      div.icons {
        margin-right: 15px;
        display: flex;
        .icon {
          margin-left: 1rem;
        }
      }
      div > span {
        font-size: 18px;
        font-weight: 900;
        line-height: 30px;
      }
      div > p {
        font-size: 1rem;
        line-height: 25px;
        margin: 0;
      }
    }
  }
`;

;// CONCATENATED MODULE: ./public/assets/img/insta.png
/* harmony default export */ var insta = ({"src":"/_next/static/image/public/assets/img/insta.de092ba6e506743c7166b941daca207f.png","height":30,"width":30,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAYklEQVR42g3BsQ2CAAAEwI8dPdGOHdgBp2EV4xIaiFoYgSCxgckucheNzaTTexqcY1WLo0LlYoxBtH7eriqvuCvN4uCj8Iib0iLi66SPUbRmi1YMsalFuY/aGo3VoNtPNs0fMSFaktX81zAAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./public/assets/img/face.png
/* harmony default export */ var face = ({"src":"/_next/static/image/public/assets/img/face.d4db8f83f0b17d1b40430886b2b1f12f.png","height":30,"width":30,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAWklEQVR42kXKsQnCABQE0N+Ie7iHuJ1jWCjYWVk7iJCsIIiVQd/lV0l1j7srg4CIGErwEzc7J6ll3ToY1+LROvrqICb71sZ9fbxaZzGV+ItPylV0jCLerYt4zsAxcjRbTTOwAAAAAElFTkSuQmCC"});
;// CONCATENATED MODULE: ./components/menu/footer/menuFooter.jsx






function MenuFooter() {
  return /*#__PURE__*/jsx_runtime_.jsx(Footer, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "rodape",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "icons",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "icon",
          children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
            src: face,
            alt: "face",
            className: "icon"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "icon",
          children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
            src: insta,
            alt: "insta",
            className: "icon"
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "info",
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          children: "TELEFONE"
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: "(65)9 9999-9999"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "info",
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          children: "EMAIL"
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: "conta@adrinks.com"
        })]
      })]
    })
  });
}
;// CONCATENATED MODULE: ./components/menu/menu.jsx





function Nav() {
  return /*#__PURE__*/jsx_runtime_.jsx(Menu, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
      children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            children: "INICIO"
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
        children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/bar",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            children: "BAR A.DRINKS"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: "Conhe\xE7a nosso servi\xE7os do bar"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
        children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/caishots",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            children: "CAISHOTS"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: "Conhe\xE7a nosso servi\xE7os do bar"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
        children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/consultoria",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            children: "CONSULTORIA"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: "Conhe\xE7a nosso servi\xE7os do bar"
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
        children: /*#__PURE__*/jsx_runtime_.jsx("span", {
          children: "FALE CONOSCO"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(MenuFooter, {})]
    })
  });
}
;// CONCATENATED MODULE: ./components/header/style.js

const Top = (external_styled_components_default()).header`
  padding: 3rem 0;
  display: flex;
  margin: 0;
  position: relative;
  z-index: 1000;
  align-items: center;

  &:before {
    content: "";
    z-index: -200;
    position: absolute;
    width: 320px;
    height: 213px;
    background-image: url("assets/img/leaves-2.png");
    background-size: 100%;
    background-repeat: no-repeat;
    left: -10rem;
    top: 10rem;
    transform: rotate(1deg);
    filter: contrast(50%) brightness(90%);

    @media (max-width: 500px) {
      content: none;
    }
  }

  div.head {
    width: 100%;
    display: flex;
    max-width: 68.75rem;
    margin: 0 auto;
    position: relative;
    justify-content: space-between;

    .img:hover {
      cursor: pointer;
    }
  }

  .img-menu {
    z-index: -1;
    position: absolute;
    top: 0;
    width: 100%;
    height: 900px;
    filter: grayscale(100%);

    div.img-bg {
      position: absolute;
      width: 100%;
      height: 900px;
      background-image: url("/assets/img/crew.jpg");
      object-fit: cover;
    }
    .overlay {
      background: rgba(34, 34, 34, 0.95);
      color: ${props => props.theme.colors.colorText};
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
    }
  }

  section {
    align-items: center;
    display: flex;

    div.icon {
      margin-left: 3rem;
      &:hover {
        cursor: pointer;
      }
    }

    div.background {
      position: absolute;
      right: 0;
      top: 50px;
      z-index: 3000;
      width: 100%;
      height: 100%;
    }
  }

  @media (max-width: 500px) {
    div.head {
      align-items: flex-end;
      max-width: 30rem;

      .thema {
        fill: white;
        filter: brightness(0) invert(1);
      }
    }

    .img-menu {
      z-index: -1;
      position: absolute;
      top: 0;
      width: 100%;
      height: 700px;
      filter: grayscale(100%);

      div.img-bg {
        width: 100%;
        height: 700px;
      }
    }

    img {
      min-width: 0;
    }
    .img {
      width: 12rem !important;
    }
  }
`;

;// CONCATENATED MODULE: ./components/header/header.jsx













function Header({
  toggleTheme,
  theme
}) {
  const {
    0: handleActiveMenu,
    1: setActiveMenu
  } = (0,external_react_.useState)(false);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Top, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "head",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/",
          passHref: true,
          children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
            src: logo/* default */.Z,
            alt: "logo",
            className: "img"
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "icon",
          onClick: e => {
            toggleTheme();
          },
          children: theme.title === "dark" ? /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
            src: thema_2,
            alt: "thema",
            className: "thema"
          }) : /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
            src: handleActiveMenu ? thema_2 : thema,
            alt: "thema",
            className: "thema"
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "icon",
          children: [theme.title === "dark" ? /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
            src: menu_dark,
            alt: "menu",
            onClick: () => {
              handleActiveMenu === true ? setActiveMenu(false) : setActiveMenu(true);
            }
          }) : /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
            src: handleActiveMenu ? menu_2 : menu,
            alt: "menu",
            onClick: () => {
              handleActiveMenu === true ? setActiveMenu(false) : setActiveMenu(true);
            }
          }), handleActiveMenu && /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: `background ${handleActiveMenu ? "fadeIn" : "fadeOut"}`,
            children: /*#__PURE__*/jsx_runtime_.jsx(Nav, {})
          })]
        })]
      })]
    }), handleActiveMenu && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: `img-menu ${handleActiveMenu ? "fadeIn" : "fadeOut"}`,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "img-bg",
        alt: "crew"
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "overlay"
      })]
    })]
  });
}

/***/ }),

/***/ 4535:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": function() { return /* binding */ api; },
/* harmony export */   "x": function() { return /* binding */ directus; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const api = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  baseURL: "http://localhost:5000"
});
const directus = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  baseURL: "https://adrinks-painel.host.zukt.cloud/"
});


/***/ }),

/***/ 8379:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9914);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["Z"] = (styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle`
    :root {
      --yellow: #ffd659;
      --green: #61821f;
      --text-light: #707070;
      --color-text: #222222;
      --white: #ffffff;
    }

    body::-webkit-scrollbar {
    width: 8px;
    }
    body::-webkit-scrollbar-track {
      background: ${props => props.theme.colors.background}; 
      box-shadow: inset 0 0 5px rgb(0, 0, 0, 0.1);
      border-radius: 10px;
    }
    body::-webkit-scrollbar-thumb {
      background: rgb(0, 0, 0, 0.1);
      border-radius: 10px;
    }
    body::-webkit-scrollbar-thumb:hover {
      background: ${props => props.theme.colors.secondary};
    }

    @font-face {
      font-family: Balbeer;
      src: url('/assets/fonts/Balbeer-Rustic.ttf');
    }

    @font-face {
      font-family: SantElia;
      src: url('/assets/fonts/santelia-rough.otf');
    }

    * {
      padding: 0;
      margin: 0;
      border: 0;
      box-sizing: border-box;
    }

    @media (max-width: 1080px) {
      html {
        font-size: 93.75%;
      }
    }

    @media (max-width: 500px) {
      html {
        font-size: 75%;
      }
    }


    html,
    body {
      padding: 0;
      margin: 0 auto;
      font-family: "Lato", sans-serif;
      scroll-behavior: smooth;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    .fadeIn {
      animation: fadeIn 500ms linear;
    }

    .fadeOut {
      animation: fadeOut 500ms linear;
    }

    @keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    @keyframes fadeOut {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    .slide-container {
      z-index: -1;
    }
`);

/***/ }),

/***/ 426:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";
// eslint-disable-next-line import/no-anonymous-default-export
/* harmony default export */ __webpack_exports__["Z"] = ({
  title: "dark",
  colors: {
    primary: "#ffffff",
    secondary: "#2546F0",
    button: "#ffffff",
    darkSecondary: "#222222",
    textWhite: "#222222",
    textBlack: "#ffffff",
    textLight: "#707070",
    colorText: "#222222",
    background: "#222",
    shadowOne: "rgba(37, 70, 240, 0.6)",
    translucid: "rgba(37, 70, 240, 0.05)",
    ellipse: "#2546F0",
    shop: "#9f9f9f",
    trace: "#afcdfb"
  }
});

/***/ }),

/***/ 577:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";
// eslint-disable-next-line import/no-anonymous-default-export
/* harmony default export */ __webpack_exports__["Z"] = ({
  title: "light",
  colors: {
    primary: "#ffd659",
    secondary: "#61821f",
    button: "#ffffff",
    darkSecondary: "#2a3613",
    textWhite: "#ffffff",
    textBlack: "#222222",
    textLight: "#707070",
    colorText: "#222222",
    background: "#ffffff",
    shadowOne: "rgba(145, 166, 60, 0.6)",
    translucid: "rgba(145, 166, 60, 0.05)",
    ellipse: "#ffd659",
    shop: "#eff2e2",
    trace: "#dee4c4"
  }
});

/***/ }),

/***/ 7953:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";
/* harmony default export */ __webpack_exports__["Z"] = ({"src":"/_next/static/image/public/assets/img/beer.9bd91c2c3446897263eabf1715f49bbe.svg","height":60,"width":60});

/***/ }),

/***/ 1398:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";
/* harmony default export */ __webpack_exports__["Z"] = ({"src":"/_next/static/image/public/assets/img/crew.514500a558a364550bdb8a8ce46591bc.jpg","height":1212,"width":1920,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAUAAEAAAAAAAAAAAAAAAAAAAAE/9oACAEBAAAAAA//xAAUAQEAAAAAAAAAAAAAAAAAAAAC/9oACAECEAAAAD//xAAUAQEAAAAAAAAAAAAAAAAAAAAC/9oACAEDEAAAAH//xAAcEAACAgIDAAAAAAAAAAAAAAACAwQRAAEFEjL/2gAIAQEAAT8AgOkt4Q3NaJgKCEQ6153V5//EABkRAAEFAAAAAAAAAAAAAAAAAAEAAiEiMf/aAAgBAgEBPwBpNpOr/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAERAv/aAAgBAwEBPwDUUiR//9k="});

/***/ }),

/***/ 2627:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";
/* harmony default export */ __webpack_exports__["Z"] = ({"src":"/_next/static/image/public/assets/img/logo.69b96f6a760493b0778181c5c8794704.svg","height":48,"width":228});

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;