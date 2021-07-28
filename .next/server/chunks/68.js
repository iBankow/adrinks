exports.id = 68;
exports.ids = [68];
exports.modules = {

/***/ 6068:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ Body; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/body/style.js

const Main = (external_styled_components_default()).section`
  background: ${props => props.theme.colors.background};
  &:after {
    z-index: 1;
    opacity: 1;
    content: "";
    position: absolute;
    top: ${props => props.theme.title === "dark" ? "-210px" : "-210px"};
    width: 100%;
    height: 150px;
    background: linear-gradient(
      180deg,
      ${props => props.theme.title === "dark" ? `${"#222"}` : "rgba(248, 249, 242, 1)"},
      transparent
    );
  }
  &:before {
    z-index: 2;
    opacity: 1;
    position: absolute;
    top: -210px;
    width: 100%;
    height: 150px;
    background: linear-gradient(
      180deg,
      ${props => props.theme.title === "dark" ? `${"#222"}` : "white"},
      transparent
    );

    @media (max-width: 500px) {
      content: none;
    }
    ${props => props.bar && "content: '';"}
  }
  margin-top: ${props => props.bar ? "17rem" : "12rem"};
  width: 100%;
  position: relative;
  div.img-test {
    &:after {
      z-index: 1000;
      content: "";
      position: absolute;
      width: 16rem;
      height: 13.3rem;
      background-image: url("assets/img/leaves.png");
      background-size: 100%;
      background-repeat: no-repeat;
      right: -7.5rem;
      bottom: 25rem;
    }

    &:before {
      content: "";
      position: absolute;
      width: 16rem;
      height: 13.3rem;
      background-image: url("assets/img/leaves-2.png");
      background-size: 100%;
      background-repeat: no-repeat;
      right: 5rem;
      top: 5rem;
      transform: rotate(270deg);
      filter: blur(0.5rem) contrast(70%);
    }
    z-index: 0;

    overflow: hidden;
    top: -13rem;
    position: absolute;
    width: 100%;
    height: 56.25rem;
    background-repeat: repeat;
    & {
      background: linear-gradient(
          -180deg,
          #ffffff 11.98%,
          rgba(255, 214, 89, 0.35) 100%
        ),
        url("assets/img/crew.jpg");
    }

    &.dark {
      background: linear-gradient(
          0deg,
          rgba(37, 70, 240, 0.75) 11.98%,
          rgba(34, 34, 34, 0.75) 100%
        ),
        url("assets/img/texture-2.png");
    }

    @media (max-width: 500px) {
      overflow: hidden;
      z-index: -2;
      top: -8rem;
      position: absolute;
      width: 100%;
      height: 50rem;
      background-repeat: repeat;
      background: linear-gradient(
          180deg,
          #ffffff 11.98%,
          rgba(255, 214, 89, 0.35) 100%
        ),
        url("assets/img/crew.jpg");
    }
  }

  section.services {
    z-index: 1;

    justify-content: space-between;
    position: relative;
    max-width: 68.75rem;
    margin: 3rem auto 0 auto;
    background-color: #fff;
    width: 100%;
    height: 42.5rem;
    box-shadow: 0 0.25rem 3.125rem -1.562rem ${props => props.theme.colors.shadowOne};
    border-radius: 0 12.5rem 1.25rem 1.25rem;
    align-items: center;

    @media (max-width: 500px) {
      max-width: 30rem;

      display: flex;
      box-shadow: 0 1rem 3.125rem -1.562rem ${props => props.theme.colors.shadowOne};

      flex-direction: column;
      height: 100%;
      border-radius: 0 8rem 0.5rem 0.5rem;
    }

    h2 {
      padding-top: 5rem;
      font-size: 2rem;
      font-style: normal;
      font-weight: 800;
      line-height: 2.62rem;
      letter-spacing: 0em;
      color: ${props => props.theme.colors.colorText};
    }

    p {
      font-size: 1rem;
      padding: 1rem 0;

      font-style: normal;
      font-weight: 400;
      line-height: 1.625rem;
      color: ${props => props.theme.colors.textLight};
    }

    .services-title {
      justify-content: center;
      margin: 0 auto;
      text-align: center;
    }
    .services-container {
      padding: 5rem 0 0 0;
      justify-items: center;
      text-align: center;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 2rem;

      @media (max-width: 500px) {
        display: flex;
        flex-direction: column;
        margin-bottom: 2rem;
      }

      .service-content {
        justify-content: space-around;
        width: 100%;
        align-items: center;
        display: flex;
        text-align: left;
        width: 28rem;
        height: 8.875rem;
        border-radius: 1.25rem;
        background: ${props => props.theme.colors.translucid};
        div.info {
          width: 18.75rem;

          p {
            padding: 0;
          }
        }
      }

      h3 {
        color: ${props => props.theme.colors.colorText};
        font-size: 1.5rem;
        line-height: 2.37rem;
      }
    }
  }
`;
const Head = (external_styled_components_default()).section`
  max-width: 68.75rem;
  z-index: 100;
  position: relative;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, minmax(3.125rem, 1fr));
  grid-gap: 2rem;
  align-items: flex-start;

  div.img {
    position: relative;
    width: 548px;
    height: 355px;
    justify-content: center;
    box-sizing: border-box;
    .imagem {
      border-radius: 6.25rem 0 0 0;
    }

    &:after {
      content: "";
      position: absolute;
      width: 25.81rem;
      height: 17.18rem;
      background-image: url("assets/img/leaves.png");
      background-size: 100%;
      background-repeat: no-repeat;
      top: 15rem;
      left: -8rem;
      filter: blur(0.1rem);
      transform: rotate(120.75deg);
    }
  }
  div.info {
    h2 {
      font-family: SantElia;
      font-size: 7.5rem;
      font-style: normal;
      font-weight: 700;
      line-height: 10rem;
      margin-bottom: 0.62rem;
      color: ${props => props.theme.colors.textBlack};
    }
    hr.divider {
      background-image: url("/assets/img/divisor-2.svg");
      background-repeat: no-repeat;
      background-size: contain;
      width: 7rem;
      height: 0.62rem;
      margin-bottom: 1.25rem;
    }
    p {
      color: ${props => props.theme.title === "dark" ? props.theme.colors.textBlack : props.theme.colors.secondary};
      margin-bottom: 1.25rem;
      font-family: Lato;
      font-size: 1.375rem;
      font-style: normal;
      font-weight: 800;
      line-height: 2rem;
    }
    button {
      color: ${props => props.theme.colors.secondary};
      height: 3.43rem;
      width: 19rem;
      border-radius: 4.375rem;
      font-family: Lato;
      font-size: 1.25rem;
      font-weight: 800;
      line-height: 1.5rem;
      letter-spacing: 0.1em;
    }
  }

  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    div.img {
      display: none;
    }
  }
`;
const Assets = (external_styled_components_default()).div`
  max-width: 62.5rem;
  div.leaves {
    position: absolute;
    top: -8rem;
    left: 14rem;
    width: 17rem;
  }
  div.leave.three {
    position: absolute;
    right: -20rem;
    top: 10rem;
    width: 25rem;
  }

  div.ellipse {
    background: ${props => props.theme.colors.ellipse};
    border-radius: 50%;
    z-index: -1;
    position: absolute;
    top: -6rem;
    left: -5rem;
    width: 25rem;
  }

  @media (max-width: 500px) {
    div {
      width: 0;
      height: 0;
    }
  }
`;

// EXTERNAL MODULE: ./public/assets/img/crew.jpg
var crew = __webpack_require__(1398);
;// CONCATENATED MODULE: ./public/assets/img/leaves.png
/* harmony default export */ var leaves = ({"src":"/_next/static/image/public/assets/img/leaves.658a20c965cda8492995de9e5a00a124.png","height":275,"width":332,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAAqklEQVR42mMAgYTCALak7ARuBiRgF2LGCOeEFxuJusWYPTBxMcwJybUxDkjydkVSaw9W6Zuue8g22OC/S6T5f1tf810gMWUzaRYGtzgdJhDHO9FQzSpQ9YdvnOt/QweN//J6En5g/UmVLswgOrXW3Te6wPF/aIZnl4WX/kJde4VcsIKs+jCwFTmNkQp5LZFhyA5VNhGDODS9NhDu4qzaNGZjF00WFVMpsNUA/XApam6lC6cAAAAASUVORK5CYII="});
// EXTERNAL MODULE: ./public/assets/img/ellipse.svg
var ellipse = __webpack_require__(4063);
// EXTERNAL MODULE: ./public/assets/img/beer.svg
var beer = __webpack_require__(7953);
// EXTERNAL MODULE: ./public/assets/img/beerdark.svg
var beerdark = __webpack_require__(4244);
// EXTERNAL MODULE: ./public/assets/img/divisor-3.svg
var divisor_3 = __webpack_require__(4921);
;// CONCATENATED MODULE: ./public/assets/img/divisor-dark.svg
/* harmony default export */ var divisor_dark = ({"src":"/_next/static/image/public/assets/img/divisor-dark.7d9aa2226ae97706bade84c4e125df82.svg","height":10,"width":103});
// EXTERNAL MODULE: ./services/api.js
var api = __webpack_require__(4535);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
;// CONCATENATED MODULE: ./components/body/body.jsx














function Body({
  theme,
  bar
}) {
  const {
    0: items,
    1: setItems
  } = (0,external_react_.useState)([]);
  const {
    0: title,
    1: setTitle
  } = (0,external_react_.useState)(null);
  (0,external_react_.useEffect)(() => {
    async function loadItems() {
      const services = await api/* directus.get */.x.get("items/services?filter[local][_eq]=1");
      setItems(services.data.data);
    }

    loadItems();
  }, []);
  (0,external_react_.useEffect)(() => {
    async function loadTitle() {
      const titles = await api/* directus.get */.x.get("items/imagens?filter[local][_eq]=bar");
      setTitle(titles.data.data[0]);
    }

    loadTitle(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Main, {
    bar: bar,
    children: [title !== null && /*#__PURE__*/(0,jsx_runtime_.jsxs)(Head, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "img",
        children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
          src: `http://adrinks-painel.host.zukt.cloud/assets/${title.imagem}`,
          alt: "crew",
          width: "548",
          height: "355",
          className: "imagem"
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "info",
        children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
          children: title.title
        }), /*#__PURE__*/jsx_runtime_.jsx("hr", {
          className: "divider"
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: title.desc
        }), /*#__PURE__*/jsx_runtime_.jsx("button", {
          children: "FAZER OR\xC7AMENTO"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Assets, {
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "leaves",
            children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
              src: leaves,
              alt: "leave"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "ellipse",
            children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
              src: ellipse/* default */.Z,
              alt: "ellipse"
            })
          })]
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
      className: "services",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "services-title",
        children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
          children: "SERVI\xC7OS"
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: "Servi\xE7os do pacote do bar a.drinks"
        }), theme.title === "dark" ? /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
          src: divisor_dark,
          className: "divisor-2",
          alt: "divisor"
        }) : /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
          src: divisor_3/* default */.Z,
          className: "divisor-2",
          alt: "divisor"
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "services-container",
        children: items.map(item => {
          return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "service-content",
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "img",
                children: theme.title === "dark" ? /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
                  src: beerdark/* default */.Z,
                  alt: "beer-logo"
                }) : /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
                  src: beer/* default */.Z,
                  alt: "beer-logo"
                })
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "info",
                children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                  children: item.title
                }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                  children: item.description
                })]
              })]
            }, item.id)
          });
        })
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: theme.title === "dark" ? "img-test dark" : "img-test"
    })]
  });
}

/***/ }),

/***/ 4063:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";
/* harmony default export */ __webpack_exports__["Z"] = ({"src":"/_next/static/image/public/assets/img/ellipse.30b80e0e006dcd5eed6bf1d13e56a7be.svg","height":439,"width":439});

/***/ })

};
;