(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[734],{5148:function(n,e,t){"use strict";t.d(e,{cd:function(){return i},W5:function(){return r}});var i=[{id:1,type:"Drinks",image:"/assets/img/drink.png",title:"Caishot",description:"Fa\xe7a seus drinks na comodidade da sua casa com diversas combina\xe7\xf5es"},{id:2,type:"Caishots",image:"/assets/img/drink-2.png",title:"Caishot",description:"Fa\xe7a seus drinks na comodidade da sua casa com diversas combina\xe7\xf5es"}],r=[{id:1,type:"Drinks",image:"/assets/img/crew.jpg"},{id:2,type:"Drinks",image:"/assets/img/crew.jpg"},{id:3,type:"Drinks",image:"/assets/img/crew.jpg"},{id:4,type:"Drinks",image:"/assets/img/crew.jpg"},{id:5,type:"Drinks",image:"/assets/img/crew.jpg"},{id:6,type:"Drinks",image:"/assets/img/crew.jpg"},{id:7,type:"Drinks",image:"/assets/img/crew.jpg"},{id:8,type:"Drinks",image:"/assets/img/crew.jpg"}]},9082:function(n,e,t){"use strict";t.d(e,{Z:function(){return l}});var i=t(5893),r=t(5148),a=t(7261);function o(){var n=(0,a.Z)(["\n  background: ",';\n  max-width: 100%;\n  display: flex;\n  align-items: center;\n  overflow: hidden;\n  position: relative;\n\n  &:before {\n    z-index: 1000;\n    content: "";\n    position: absolute;\n    width: 259px;\n    height: 454px;\n    background-image: url("assets/img/alecrim.png");\n    background-size: 60%;\n    background-repeat: no-repeat;\n    top: 20rem;\n    left: 0;\n    @media (max-width: 500px) {\n      content: none;\n    }\n  }\n\n  &:after {\n    z-index: 1000;\n    content: "";\n    position: absolute;\n    width: 259px;\n    height: 454px;\n    background-image: url("assets/img/dots.svg");\n    background-size: 60%;\n    background-repeat: no-repeat;\n    right: 20rem;\n    bottom: -10rem;\n    @media (max-width: 500px) {\n      content: none;\n    }\n  }\n\n  div.nav {\n    z-index: 1000;\n    position: absolute;\n    bottom: 8rem;\n    left: 25rem;\n\n    @media (max-width: 500px) {\n      left: 1rem;\n      bottom: 2rem;\n    }\n\n    button {\n      .icon {\n        fill: ',";\n      }\n      z-index: 1;\n      background-color: ",";\n      width: 64px;\n      height: 55px;\n      border-radius: 50px 0 0 50px;\n\n      &.second {\n        border-left: solid white 2px;\n        border-radius: 0px 50px 50px 0px;\n      }\n\n      font-weight: 700;\n      color: white;\n      font-size: 20px;\n      line-height: 24px;\n      letter-spacing: 0.1em;\n\n      transition: filter, background-color 300ms ease-in-out;\n      &:hover {\n        background-color: ",";\n        cursor: pointer;\n        filter: brightness(0.8);\n        .icon {\n          fill: ",";\n        }\n      }\n    }\n  }\n\n  .slide-container {\n    z-index: 1000;\n    width: 100%;\n    height: 51.43rem;\n    display: flex;\n    align-items: center;\n    overflow-x: hidden;\n\n    @media (max-width: 500px) {\n      height: 41.43rem;\n    }\n\n    .image-slider {\n      width: 100%;\n      height: 600px;\n      position: absolute;\n      left: 0;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      transition: 0.7s;\n      transform: translateX(50%);\n\n      .slides-div {\n        width: 100%;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        margin: 0 30px 0 30px;\n\n        .img {\n          object-fit: cover;\n          height: 249px;\n          width: 364px;\n          position: relative;\n          transition: 0.5s;\n          filter: saturate(10%) blur(5px);\n          border-radius: 30px;\n          background: linear-gradient(\n            0deg,\n            rgba(255, 214, 89, 0.29),\n            rgba(255, 214, 89, 0.29)\n          );\n          &:hover {\n            cursor: pointer;\n          }\n        }\n\n        .button {\n          position: absolute;\n          width: 364px;\n          height: 249px;\n        }\n\n        .img.active {\n          z-index: 101;\n          width: 364px;\n          height: 311px;\n          object-fit: cover;\n          filter: none;\n          border-radius: 30px;\n        }\n      }\n    }\n  }\n"]);return o=function(){return n},n}var s=t(9163).ZP.section(o(),(function(n){return n.theme.colors.background}),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.colors.secondary}),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.colors.secondary})),c=t(1649),d=t(7294);function l(){var n=(0,d.useState)(10),e=n[0],t=n[1],a=(0,d.useState)(0),o=a[0],l=a[1],p=r.W5.length;return!Array.isArray(r.W5)||r.W5.length<=0?null:(0,i.jsxs)(s,{children:[(0,i.jsxs)("div",{className:"slide-container",children:[(0,i.jsx)("span",{className:"slider-span"}),(0,i.jsx)("div",{className:"image-slider",style:{left:"-".concat(e,"%")},children:r.W5.map((function(n,e){return(0,i.jsxs)("div",{className:"slides-div",children:[(0,i.jsx)("img",{className:e===o?"img active":"img",src:n.image,alt:n.type}),(0,i.jsx)("a",{href:"slider-span".concat(e),className:"button"})]},n.id)}))})]}),(0,i.jsxs)("div",{className:"nav",children:[(0,i.jsx)("button",{onClick:function(){0===o?(l(p-1),t(110)):(l(o-1),t(e-20))},children:(0,i.jsx)(c.u1R,{className:"icon"})}),(0,i.jsx)("button",{onClick:function(){o===p-1?(l(0),t(10)):(t(e+20),l(o+1))},className:"second",children:(0,i.jsx)(c.hjJ,{className:"icon"})})]})]})}},8740:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return Z}});var i=t(5893),r=t(809),a=t.n(r),o=t(2447),s=t(5675),c=t(1398),d=t(1627),l=t(9082),p=t(5862),g=t(2210),m=t(4921),u=t(7953),h=t(7261),x=t(9163);function f(){var n=(0,h.Z)(["\n  position: relative;\n  overflow-x: hidden;\n  justify-content: space-between;\n  position: relative;\n  max-width: 68.75rem;\n  margin: 3rem auto 0 auto;\n  width: 100%;\n  height: 680px;\n  border-radius: 0px 200px 20px 20px;\n  align-items: center;\n\n  h2 {\n    padding-top: 5rem;\n    font-size: 30px;\n    font-style: normal;\n    font-weight: 800;\n    line-height: 42px;\n    letter-spacing: 0em;\n    color: rgba(51, 51, 51, 1);\n  }\n\n  @media (max-width: 500px) {\n    max-width: 30rem;\n    margin: 0 auto;\n    h2 {\n      padding-top: 3rem;\n    }\n  }\n\n  p {\n    font-size: 16px;\n    padding: 1rem 0;\n\n    font-style: normal;\n    font-weight: 400;\n    line-height: 26px;\n    color: var(--text-light);\n  }\n\n  .services-title {\n    justify-content: center;\n    margin: 0 auto;\n    text-align: start;\n  }\n  .services-container {\n    padding: 5rem 0 0 0;\n    justify-items: center;\n    text-align: center;\n    display: grid;\n    grid-gap: 5rem;\n    grid-template-columns: 1fr 1fr;\n\n    .service-content {\n      justify-content: space-around;\n      align-items: center;\n      display: flex;\n      text-align: left;\n      width: 485px;\n      height: 142px;\n      border-radius: 20px;\n      background: rgba(145, 166, 60, 0.05);\n      div.info {\n        width: 300px;\n\n        p {\n          padding: 0;\n        }\n      }\n    }\n\n    @media (max-width: 500px) {\n      grid-template-columns: 1fr;\n      grid-gap: 2rem;\n\n      .service-content {\n        justify-content: space-around;\n        width: 100%;\n        align-items: center;\n        display: flex;\n        text-align: left;\n        height: 142px;\n        border-radius: 20px;\n        background: rgba(145, 166, 60, 0.05);\n        div.info {\n          margin-left: 10px;\n          p {\n            padding: 0;\n          }\n        }\n      }\n    }\n\n    h3 {\n      color: rgba(34, 34, 34, 1);\n      font-size: 24px;\n      line-height: 38px;\n    }\n  }\n"]);return f=function(){return n},n}function b(){var n=(0,h.Z)(['\n  position: relative;\n  overflow-x: hidden;\n\n  @media (max-width: 500px) {\n    overflow: hidden;\n  }\n\n  &:before {\n    content: "";\n    position: absolute;\n    width: 320px;\n    height: 213px;\n    background-image: url("assets/img/leaves-2.png");\n    background-size: 100%;\n    background-repeat: no-repeat;\n    right: -5rem;\n    top: 50rem;\n    transform: rotate(270deg);\n    filter: blur(7px) contrast(70%);\n\n    @media (max-width: 500px) {\n      content: none;\n    }\n  }\n\n  div.container {\n    max-width: 68.75rem;\n    margin: 6rem auto 0 auto;\n\n    h1 {\n      font-family: SantElia;\n      font-size: 120px;\n      font-style: normal;\n      font-weight: 700;\n      line-height: 161px;\n      margin-bottom: 10px;\n    }\n\n    div.content {\n      display: flex;\n      flex-direction: row;\n      margin: 0;\n      justify-content: space-between;\n      position: relative;\n      &:before {\n        content: "";\n        position: absolute;\n        width: 395px;\n        height: 395px;\n        background-image: url("assets/img/ellipse.svg");\n        background-size: 100%;\n        background-repeat: no-repeat;\n        right: 18rem;\n        top: 5rem;\n        transform: rotate(270deg);\n        @media (max-width: 500px) {\n          content: none;\n        }\n      }\n      &:after {\n        content: "";\n        position: absolute;\n        width: 170px;\n        height: 170px;\n        background-image: url("assets/img/dots.svg");\n        background-size: 100%;\n        background-repeat: no-repeat;\n        right: 5rem;\n        top: 20rem;\n        transform: rotate(270deg);\n        @media (max-width: 500px) {\n          content: none;\n        }\n      }\n      div.info {\n        p {\n          font-size: 22px;\n          font-style: normal;\n          font-weight: 800;\n          line-height: 31px;\n          color: var(--green);\n          width: 361px;\n          margin-bottom: 2rem;\n        }\n\n        button {\n          margin-top: 1rem;\n          background-color: var(--green);\n          width: 252px;\n          height: 55px;\n          border-radius: 70px;\n\n          font-weight: 700;\n          color: white;\n          font-size: 20px;\n          line-height: 24px;\n          letter-spacing: 0.1em;\n        }\n      }\n      div.image-container {\n        max-width: 597px;\n        height: 355px;\n        border-radius: 100px 0px;\n        position: relative;\n\n        &:after {\n          content: "";\n          position: absolute;\n          width: 320px;\n          height: 213px;\n          background-image: url("assets/img/leaves.png");\n          background-size: 100%;\n          background-repeat: no-repeat;\n          left: 25rem;\n          bottom: 15rem;\n        }\n        &:before {\n          z-index: 1;\n          content: "";\n          position: absolute;\n          width: 413px;\n          height: 275px;\n          background-image: url("assets/img/leaves.png");\n          background-size: 100%;\n          background-repeat: no-repeat;\n          top: 15rem;\n          left: -8rem;\n          filter: blur(3px);\n          transform: rotate(120.75deg);\n        }\n        .img {\n          max-width: 597px;\n          height: 355px;\n          border-radius: 100px 0px;\n        }\n      }\n    }\n\n    @media (max-width: 500px) {\n      max-width: 30rem;\n      margin: 6rem auto 0 auto;\n      text-align: center;\n      h1 {\n        font-size: 62px;\n        line-height: 85px;\n        margin-bottom: 1px;\n      }\n\n      div.content {\n        flex-direction: column;\n        div.info {\n          p {\n            margin-bottom: 0;\n          }\n          button {\n            margin: 1rem 0;\n            background-color: var(--green);\n            width: 222px;\n            height: 45px;\n            border-radius: 70px;\n\n            font-weight: 700;\n            color: white;\n            font-size: 18px;\n            line-height: 24px;\n            letter-spacing: 2px;\n          }\n        }\n        div.image-container {\n          max-width: 597px;\n          height: 100%;\n          border-radius: 0px 0px;\n          position: relative;\n\n          &:after {\n            content: none;\n          }\n          &:before {\n            content: none;\n          }\n          .img {\n            max-width: 597px;\n            height: 0;\n            border-radius: 50% 0px;\n          }\n        }\n      }\n    }\n  }\n  section.services {\n    justify-content: space-between;\n    position: relative;\n    max-width: 68.75rem;\n    margin: 3rem auto 0 auto;\n    width: 100%;\n    height: 680px;\n    border-radius: 0px 200px 20px 20px;\n    align-items: center;\n\n    h2 {\n      padding-top: 5rem;\n      font-size: 30px;\n      font-style: normal;\n      font-weight: 800;\n      line-height: 42px;\n      letter-spacing: 0em;\n      color: rgba(51, 51, 51, 1);\n    }\n\n    @media (max-width: 500px) {\n      max-width: 30rem;\n      margin: 0 auto;\n      h2 {\n        padding-top: 3rem;\n      }\n    }\n\n    p {\n      font-size: 16px;\n      padding: 1rem 0;\n\n      font-style: normal;\n      font-weight: 400;\n      line-height: 26px;\n      color: var(--text-light);\n    }\n\n    .services-title {\n      justify-content: center;\n      margin: 0 auto;\n      text-align: start;\n    }\n    .services-container {\n      padding: 5rem 0 0 0;\n      justify-items: center;\n      text-align: center;\n      display: grid;\n      grid-gap: 5rem;\n      grid-template-columns: 1fr 1fr;\n\n      .service-content {\n        justify-content: space-around;\n        align-items: center;\n        display: flex;\n        text-align: left;\n        width: 485px;\n        height: 142px;\n        border-radius: 20px;\n        background: rgba(145, 166, 60, 0.05);\n        div.info {\n          width: 300px;\n\n          p {\n            padding: 0;\n          }\n        }\n      }\n\n      @media (max-width: 500px) {\n        grid-template-columns: 1fr;\n        grid-gap: 2rem;\n\n        .service-content {\n          justify-content: space-around;\n          width: 100%;\n          align-items: center;\n          display: flex;\n          text-align: left;\n          height: 142px;\n          border-radius: 20px;\n          background: rgba(145, 166, 60, 0.05);\n          div.info {\n            margin-left: 10px;\n            p {\n              padding: 0;\n            }\n          }\n        }\n      }\n\n      h3 {\n        color: rgba(34, 34, 34, 1);\n        font-size: 24px;\n        line-height: 38px;\n      }\n    }\n  }\n']);return b=function(){return n},n}var v=x.ZP.section(b()),w=x.ZP.section(f()),j=t(7294),y=t(4535),k=t(577),N=t(426),z=t(8379);function Z(){var n=(0,j.useState)([]),e=n[0],t=n[1],r=(0,j.useState)([]),h=r[0],f=r[1],b=(0,j.useState)(k.Z),Z=b[0],O=b[1];(0,j.useEffect)((function(){function n(){return(n=(0,o.Z)(a().mark((function n(){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,y.x.get("items/services?filter[local][_eq]=2");case 2:e=n.sent,f(e.data.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),(0,j.useEffect)((function(){function n(){return(n=(0,o.Z)(a().mark((function n(){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,y.x.get("items/imagens?filter[local][_eq]=consultoria");case 2:e=n.sent,t(e.data.data[0]);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]);return(0,i.jsxs)(x.f6,{theme:Z,children:[(0,i.jsx)(d.Z,{toggleTheme:function(){O("light"===Z.title?N.Z:k.Z),console.log(Z)},theme:Z}),(0,i.jsx)(v,{children:(0,i.jsxs)("div",{className:"container",children:[(0,i.jsx)("h1",{children:e.title}),(0,i.jsxs)("div",{className:"content",children:[(0,i.jsxs)("div",{className:"info",children:[(0,i.jsx)("p",{children:e.desc}),(0,i.jsx)("button",{children:"OR\xc7AMENTO"})]}),(0,i.jsx)("div",{className:"image-container",children:(0,i.jsx)(s.default,{src:c.Z,alt:"crew",objectFit:"fill",className:"img"})})]})]})}),(0,i.jsxs)(w,{className:"services",children:[(0,i.jsxs)("div",{className:"services-title",children:[(0,i.jsx)("h2",{children:"SERVI\xc7OS"}),(0,i.jsx)("p",{children:"Servi\xe7os do pacote do bar a.drinks"}),(0,i.jsx)(s.default,{src:m.Z,alt:"divisor"})]}),(0,i.jsx)("div",{className:"services-container",children:h.map((function(n){return(0,i.jsxs)("div",{className:"service-content",children:[(0,i.jsx)("div",{className:"img",children:(0,i.jsx)(s.default,{src:u.Z,alt:"beer-logo"})}),(0,i.jsxs)("div",{className:"info",children:[(0,i.jsx)("h3",{children:n.title}),(0,i.jsx)("p",{children:n.description})]})]},n.map)}))})]}),(0,i.jsx)(l.Z,{}),(0,i.jsx)(p.Z,{}),(0,i.jsx)(z.Z,{}),(0,i.jsx)(g.Z,{theme:Z,content:!0})]})}},2674:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/consultoria",function(){return t(8740)}])},4921:function(n,e){"use strict";e.Z={src:"/_next/static/image/public/assets/img/divisor-3.1e6abf87c7826215702efc19e63878b0.svg",height:10,width:103}},4405:function(n,e,t){"use strict";t.d(e,{w_:function(){return d}});var i=t(7294),r={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=i.createContext&&i.createContext(r),o=function(){return(o=Object.assign||function(n){for(var e,t=1,i=arguments.length;t<i;t++)for(var r in e=arguments[t])Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}).apply(this,arguments)},s=function(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(null!=n&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(n);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(n,i[r])&&(t[i[r]]=n[i[r]])}return t};function c(n){return n&&n.map((function(n,e){return i.createElement(n.tag,o({key:e},n.attr),c(n.child))}))}function d(n){return function(e){return i.createElement(l,o({attr:o({},n.attr)},e),c(n.child))}}function l(n){var e=function(e){var t,r=n.attr,a=n.size,c=n.title,d=s(n,["attr","size","title"]),l=a||e.size||"1em";return e.className&&(t=e.className),n.className&&(t=(t?t+" ":"")+n.className),i.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,r,d,{className:t,style:o(o({color:n.color||e.color},e.style),n.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),c&&i.createElement("title",null,c),n.children)};return void 0!==a?i.createElement(a.Consumer,null,(function(n){return e(n)})):e(r)}}},function(n){n.O(0,[866,530,381,934,774,888,179],(function(){return e=2674,n(n.s=e);var e}));var e=n.O();_N_E=e}]);