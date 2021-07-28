exports.id = 808;
exports.ids = [808];
exports.modules = {

/***/ 5148:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cd": function() { return /* binding */ SliderData; },
/* harmony export */   "W5": function() { return /* binding */ Slidedata; }
/* harmony export */ });
/* unused harmony export ShopItems */
const SliderData = [{
  id: 1,
  type: "Drinks",
  image: "/assets/img/drink.png",
  title: "Caishot",
  description: "Faça seus drinks na comodidade da sua casa com diversas combinações"
}, {
  id: 2,
  type: "Caishots",
  image: "/assets/img/drink-2.png",
  title: "Caishot",
  description: "Faça seus drinks na comodidade da sua casa com diversas combinações"
}];
const Slidedata = [{
  id: 1,
  type: "Drinks",
  image: "/assets/img/crew.jpg"
}, {
  id: 2,
  type: "Drinks",
  image: "/assets/img/crew.jpg"
}, {
  id: 3,
  type: "Drinks",
  image: "/assets/img/crew.jpg"
}, {
  id: 4,
  type: "Drinks",
  image: "/assets/img/crew.jpg"
}, {
  id: 5,
  type: "Drinks",
  image: "/assets/img/crew.jpg"
}, {
  id: 6,
  type: "Drinks",
  image: "/assets/img/crew.jpg"
}, {
  id: 7,
  type: "Drinks",
  image: "/assets/img/crew.jpg"
}, {
  id: 8,
  type: "Drinks",
  image: "/assets/img/crew.jpg"
}];
const ShopItems = [{
  id: 1,
  categorie: 2,
  name: "Pimenta Rosa",
  desc: "1 sachê de 100g",
  image: "/assets/img/pimenta-rosa.png",
  price: 25
}, {
  id: 2,
  categorie: 2,
  name: "Canela",
  desc: "1 sachê de 100g",
  image: "/assets/img/cinamon.png",
  price: 25
}, {
  id: 3,
  categorie: 2,
  name: "Canela",
  desc: "1 sachê de 100g",
  image: "/assets/img/cinamon.png",
  price: 25
}, {
  id: 4,
  categorie: 2,
  name: "Pimenta Rosa",
  desc: "1 sachê de 100g",
  image: "/assets/img/pimenta-rosa.png",
  price: 25
}, {
  id: 5,
  categorie: 2,
  name: "Alecrim",
  desc: "1 sachê de 100g",
  image: "/assets/img/alecrim-2.png",
  price: 25
}, {
  id: 7,
  categorie: 2,
  name: "Alecrim",
  desc: "1 sachê de 100g",
  image: "/assets/img/alecrim-2.png",
  price: 25
}, {
  id: 8,
  categorie: 2,
  name: "Alecrim",
  desc: "1 sachê de 100g",
  image: "/assets/img/alecrim-2.png",
  price: 25
}, {
  id: 9,
  categorie: 2,
  name: "Alecrim",
  desc: "1 sachê de 100g",
  image: "/assets/img/alecrim-2.png",
  price: 25
}];

/***/ }),

/***/ 9082:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ Slider; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./components/data.js
var data = __webpack_require__(5148);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/slider/style.js

const Container = (external_styled_components_default()).section`
  background: ${props => props.theme.colors.background};
  max-width: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;
  position: relative;

  &:before {
    z-index: 1000;
    content: "";
    position: absolute;
    width: 259px;
    height: 454px;
    background-image: url("assets/img/alecrim.png");
    background-size: 60%;
    background-repeat: no-repeat;
    top: 20rem;
    left: 0;
    @media (max-width: 500px) {
      content: none;
    }
  }

  &:after {
    z-index: 1000;
    content: "";
    position: absolute;
    width: 259px;
    height: 454px;
    background-image: url("assets/img/dots.svg");
    background-size: 60%;
    background-repeat: no-repeat;
    right: 20rem;
    bottom: -10rem;
    @media (max-width: 500px) {
      content: none;
    }
  }

  div.nav {
    z-index: 1000;
    position: absolute;
    bottom: 8rem;
    left: 25rem;

    @media (max-width: 500px) {
      left: 1rem;
      bottom: 2rem;
    }

    button {
      .icon {
        fill: ${props => props.theme.colors.primary};
      }
      z-index: 1;
      background-color: ${props => props.theme.colors.secondary};
      width: 64px;
      height: 55px;
      border-radius: 50px 0 0 50px;

      &.second {
        border-left: solid white 2px;
        border-radius: 0px 50px 50px 0px;
      }

      font-weight: 700;
      color: white;
      font-size: 20px;
      line-height: 24px;
      letter-spacing: 0.1em;

      transition: filter, background-color 300ms ease-in-out;
      &:hover {
        background-color: ${props => props.theme.colors.primary};
        cursor: pointer;
        filter: brightness(0.8);
        .icon {
          fill: ${props => props.theme.colors.secondary};
        }
      }
    }
  }

  .slide-container {
    z-index: 1000;
    width: 100%;
    height: 51.43rem;
    display: flex;
    align-items: center;
    overflow-x: hidden;

    @media (max-width: 500px) {
      height: 41.43rem;
    }

    .image-slider {
      width: 100%;
      height: 600px;
      position: absolute;
      left: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 0.7s;
      transform: translateX(50%);

      .slides-div {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 30px 0 30px;

        .img {
          object-fit: cover;
          height: 249px;
          width: 364px;
          position: relative;
          transition: 0.5s;
          filter: saturate(10%) blur(5px);
          border-radius: 30px;
          background: linear-gradient(
            0deg,
            rgba(255, 214, 89, 0.29),
            rgba(255, 214, 89, 0.29)
          );
          &:hover {
            cursor: pointer;
          }
        }

        .button {
          position: absolute;
          width: 364px;
          height: 249px;
        }

        .img.active {
          z-index: 101;
          width: 364px;
          height: 311px;
          object-fit: cover;
          filter: none;
          border-radius: 30px;
        }
      }
    }
  }
`;

// EXTERNAL MODULE: ./node_modules/react-icons/io/index.esm.js
var index_esm = __webpack_require__(1649);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
;// CONCATENATED MODULE: ./components/slider/slider.jsx



/* eslint-disable @next/next/no-img-element */




function Slider() {
  const {
    0: slider,
    1: setSlider
  } = (0,external_react_.useState)(10);
  const {
    0: current,
    1: setCurrent
  } = (0,external_react_.useState)(0);
  const lenght = data/* Slidedata.length */.W5.length;

  function styleSlide() {
    return {
      left: `-${slider}%`
    };
  }

  function nextSlide() {
    if (current === lenght - 1) {
      setCurrent(0);
      setSlider(10);
    } else {
      setSlider(slider + 20);
      setCurrent(current + 1);
    }
  }

  function prevSlide() {
    if (current === 0) {
      setCurrent(lenght - 1);
      setSlider(110);
    } else {
      setCurrent(current - 1);
      setSlider(slider - 20);
    }
  }

  if (!Array.isArray(data/* Slidedata */.W5) || data/* Slidedata.length */.W5.length <= 0) {
    return null;
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Container, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "slide-container",
      children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
        className: "slider-span"
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "image-slider",
        style: styleSlide(),
        children: data/* Slidedata.map */.W5.map((slide, index) => {
          return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "slides-div",
            children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
              className: index === current ? "img active" : "img",
              src: slide.image,
              alt: slide.type
            }), /*#__PURE__*/jsx_runtime_.jsx("a", {
              href: `slider-span${index}`,
              className: "button"
            })]
          }, slide.id);
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "nav",
      children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
        onClick: prevSlide,
        children: /*#__PURE__*/jsx_runtime_.jsx(index_esm/* IoIosArrowBack */.u1R, {
          className: "icon"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("button", {
        onClick: nextSlide,
        className: "second",
        children: /*#__PURE__*/jsx_runtime_.jsx(index_esm/* IoIosArrowForward */.hjJ, {
          className: "icon"
        })
      })]
    })]
  });
}

/***/ }),

/***/ 4244:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";
/* harmony default export */ __webpack_exports__["Z"] = ({"src":"/_next/static/image/public/assets/img/beerdark.8d69d4c965fc4e0a9ec696a7576752bc.svg","height":60,"width":60});

/***/ }),

/***/ 4921:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";
/* harmony default export */ __webpack_exports__["Z"] = ({"src":"/_next/static/image/public/assets/img/divisor-3.1e6abf87c7826215702efc19e63878b0.svg","height":10,"width":103});

/***/ })

};
;