import styled from "styled-components";

const Top = styled.section`
  max-width: 100%;

  @keyframes popUp {
    0% {
      transform: translateY(50%);
      opacity: 0;
    }
    100% {
      transform: translateX(0%);
      opacity: 1;
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  .head {
    padding-top: 90px;
    max-width: 68.75rem;
    margin: 0 auto;
    position: relative;
    color: white;
    color: ${(props) => props.theme.colors.textBlack};

    div.slide {
      display: flex;
      justify-content: space-between;

      div.info {
        p.subtittle {
          font-family: Lato;
          font-weight: 800;
          font-size: 22px;
          line-height: 31px;
          color: ${(props) => props.theme.colors.textBlack};
          width: 297px;
        }

        hr.divisor {
          margin: 3rem 0;
          ${(props) =>
            props.theme.title === "light" &&
            "background-image: url('/assets/img/divisor-2.svg')"};
          ${(props) =>
            props.theme.title === "dark" &&
            "background-image: url('/assets/img/divisordark-2.svg')"};
          background-size: contain;
          width: 113px;
          height: 10px;
          background-repeat: no-repeat;
        }

        h1 {
          color: ${(props) => props.theme.colors.textBlack};
          font-family: SantElia;
          font-weight: 700;
          font-size: 120px;
          line-height: 160px;
          margin-bottom: 30px;
        }

        p {
          color: ${(props) => props.theme.colors.textBlack};
          width: 297px;
          line-height: 22px;
          font-family: Lato;
          font-size: 18px;
          font-style: normal;
          font-weight: 400;
        }

        button {
          margin-top: 64px;
          background-color: var(--green);
          width: 220px;
          height: 55px;
          border-radius: 70px;

          font-weight: 700;
          color: white;
          font-size: 20px;
          line-height: 24px;
          letter-spacing: 0.1em;
        }
      }

      .slider {
        align-items: flex-start;
        justify-content: center;

        &:before {
          z-index: -1;
          content: "";
          background-color: ${(props) => props.theme.colors.primary};
          position: absolute;
          width: 370px;
          height: 370px;
          right: 3rem;
          bottom: 0;
          border-radius: 50%;
          @media (max-width: 500px) {
            content: "";
            width: 150px;
            height: 150px;
            left: 0;
            top: 1rem;
          }
        }
      }
    }
    @media (max-width: 500px) {
      max-width: 30rem;
      padding-top: 45px;

      div.slide {
        .slide-container {
          display: none;
          position: absolute;
          right: 1rem;
          top: 1rem;
          width: 12rem;

          img {
            top: -17rem;
            position: absolute;
            max-width: 150px;
            object-fit: contain;
          }
        }
        div.info {
          margin-bottom: 5rem;
          p.subtittle {
            font-family: Lato;
            font-weight: 800;
            font-size: 22px;
            line-height: 31px;
            width: 297px;
          }
          h1 {
            margin-top: 70px;
            font-size: 80px;
            line-height: 90px;
            margin-bottom: 10px;
          }

          hr.divisor {
            margin: 1rem 0;
            background-size: contain;
            width: 108px;
            height: 10px;
            background-repeat: no-repeat;
          }
        }
      }
    }
  }
`;

const Body = styled.section`
  margin-top: -2rem;
  max-width: 100%;
  position: relative;
  z-index: 1000;

  &:after {
    content: "";
    position: absolute;
    width: 413px;
    height: 275px;
    top: -8rem;
    right: 37rem;
    background: url("assets/img/leaves.png");
    background-size: 100%;
    background-repeat: no-repeat;
    filter: blur(3px);
    transform: rotate(-220.62deg);
    @media (max-width: 500px) {
      content: none;
    }
  }

  .body {
    background-color: white;
    margin: 0 auto;
    max-width: 68.75rem;
    width: 100%;
    min-height: 40rem;

    box-shadow: 0px 4px 50px -25px ${(props) => props.theme.colors.shadowOne};
    border-radius: 0px 200px 0px 40px;

    div.title {
      padding: 4rem 0 2rem 4rem;
      h1 {
        font-family: Balbeer;
        font-size: 30px;
        font-weight: 400;
        line-height: 30px;
        color: ${(props) => props.theme.colors.text};

        span {
          font-family: Lato;
          font-size: 54px;
          color: ${(props) => props.theme.colors.secondary};
          font-weight: 800;
        }
      }
    }

    @media (max-width: 500px) {
      max-width: 30rem;
      border-radius: 0px 60px 60px 60px;
      div.title {
        padding: 4rem 0 2rem 1.75rem;
      }
      div.container {
        display: grid;
        grid-template-columns: 1fr;
        position: relative;
      }
    }

    div.container {
      display: grid;
      grid-template-columns: 2fr 1fr;
      position: relative;

      div.shop {
        z-index: 1000;
        height: 100%;
        background-color: ${(props) => props.theme.colors.shop};
        border-radius: 0px 40px 40px 40px;

        transition: height 2s ease-in-out;

        .filter-container {
          min-height: 32rem;
        }

        div.filter {
          width: 100%;
          padding: 2rem 3rem;

          div.filter-content {
            background: #ffffff;
            border-radius: 70px;
            margin: 0 auto;

            div.buttons {
              display: flex;
              align-items: center;
              justify-content: space-around;
              button {
                background-color: white;
                width: 155px;
                height: 40px;
                border-radius: 70px;

                color: ${(props) => props.theme.colors.secondary};
                font-family: Lato;
                font-size: 16px;
                font-weight: 800;
                line-height: 22px;
                text-align: center;

                transition: 0.3s ease-in-out;

                &.select {
                  background-color: ${(props) => props.theme.colors.secondary};
                  color: ${(props) => props.theme.colors.button};
                }

                &:hover {
                  cursor: pointer;
                  background-color: ${(props) => props.theme.colors.secondary};
                  color: ${(props) => props.theme.colors.button};
                }
              }
            }
          }
        }

        p.title {
          font-family: Lato;
          font-size: 16px;
          font-style: normal;
          font-weight: 700;
          line-height: 19px;
          color: var(--color-tex);
          margin: 0 0 0 4rem;
        }

        div.shop-items {
          grid-row-gap: 20px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          justify-content: space-around;
          padding: 2rem 2rem;

          div.item {
            animation: fadeIn 0.2s ease-in-out;
            display: grid;
            grid-template-columns: 1fr 2fr;
            grid-gap: 0.5rem;
            padding: 0 1rem;

            position: relative;

            height: 89px;
            border-radius: 20px;
            border: 1px solid ${(props) => props.theme.colors.trace};
            background: white;

            justify-content: space-around;
            align-items: center;
            justify-self: center;

            div.infos {
              height: 60%;
              display: flex;
              flex-direction: column;
              justify-items: unset;
              align-items: unset;
              justify-content: space-between;
              padding-right: 2.5rem;

              p.name {
                font-family: Lato;
                font-size: 18px;
                font-weight: 800;
                line-height: 25px;
                color: var(--color-tex);
              }
              p.desc {
                font-family: Lato;
                font-size: 13px;
                font-style: normal;
                font-weight: 400;
                line-height: 16px;
                color: ${(props) => props.theme.colors.secondary};
              }
            }

            div.img {
              width: 91px;
              height: 61px;
            }

            div.plus {
              background: url("assets/img/plus.svg");
              background-size: 100%;
              background-repeat: no-repeat;
              position: absolute;
              right: 0.5rem;
              bottom: 0.5rem;
              width: 30px;
              height: 30px;
              border-radius: 50%;

              &.dark {
                background: url("assets/img/plusdark.svg");
              }

              &:hover {
                cursor: pointer;
              }
            }
          }
        }
      }

      div.cart {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin: 1rem auto;
        div.cart-title {
          color: var(--color-tex);
          p.title {
            font-family: Lato;
            font-size: 22px;
            font-weight: 800;
            line-height: 31px;
            margin-bottom: 1rem;

            color: ${(props) => props.theme.colors.secondary};
          }

          p.desc {
            font-family: Lato;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 19px;

            margin-bottom: 1rem;
            span {
              font-family: Lato;
              font-size: 16px;
              font-style: normal;
              font-weight: 700;
              line-height: 19px;
            }
          }
        }

        div.cart-content {
          display: flex;
          flex-direction: column;

          align-items: center;

          div.item {
            display: grid;
            grid-template-columns: 1fr 2fr;
            grid-gap: 0.5rem;
            position: relative;
            height: 89px;
            min-width: 278px;
            border-radius: 20px;
            justify-content: space-around;
            animation: popUp 500ms;

            align-items: center;
            justify-self: center;

            div.infos {
              height: 60%;
              display: flex;
              flex-direction: column;
              justify-items: unset;
              align-items: unset;
              justify-content: space-around;
              padding-right: 2.5rem;

              p.name {
                font-family: Lato;
                font-size: 18px;
                font-style: normal;
                font-weight: 500;
                line-height: 25px;

                color: var(--color-tex);
              }
              p.desc {
                font-family: Lato;
                font-size: 13px;
                font-style: normal;
                font-weight: 400;
                line-height: 16px;
                color: ${(props) => props.theme.colors.secondary};
              }
            }

            div.img {
              width: 69px;
              height: 69px;
              border-radius: 50%;
              border: 2px solid #eeeeee;
              overflow: hidden;

              display: flex;
              align-content: center;
            }

            div.less {
              position: absolute;
              right: 0;
              background: url("assets/img/less.svg");
              background-size: 100%;
              background-repeat: no-repeat;
              width: 30px;
              height: 30px;
              border-radius: 50%;

              &.dark {
                background: url("assets/img/lessdark.svg");
              }

              &:hover {
                cursor: pointer;
              }
            }

            & + div.item {
              margin-top: 6px;
              &:before {
                top: -3px;
                position: absolute;
                content: "";
                width: 100%;
                background-color: #cccccc;
                height: 1px;
              }
            }
          }
        }

        button.button {
          margin: 2rem auto;
          width: 256px;
          height: 55px;

          background: ${(props) => props.theme.colors.secondary};
          border-radius: 70px;
          display: flex;
          align-items: center;
          justify-content: center;
          p {
            font-family: Lato;
            font-size: 20px;
            font-style: normal;
            font-weight: 800;
            line-height: 24px;
            letter-spacing: 0.1em;
            color: white;
          }

          &:hover {
            cursor: pointer;
          }

          animation: popUp 500ms;
        }
      }
    }
    @media (max-width: 500px) {
      max-width: 30rem;

      border-radius: 0px 60px 60px 60px;
      div.title {
        padding: 4rem 0 2rem 1.75rem;
      }
      div.container {
        display: grid;
        grid-template-columns: 1fr;
        position: relative;

        div.shop {
          z-index: 100;
          overflow-x: hidden;

          transition: height 2s ease-in-out;
          div.filter-container {
            overflow: hidden;

            div.filter {
              width: 100%;
              padding: 2rem 1.75rem;

              .filter-content {
                height: 55px;

                overflow: scroll;
                display: flex;
                align-items: center;
              }
            }

            p {
              margin-bottom: 1rem;
            }

            div.item-container {
              height: 30rem;
              overflow: scroll;
              div.shop-items {
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                padding: 2rem 2rem;
              }
            }
          }
        }
      }
    }
  }
`;

const Tutorial = styled.section`
  padding-top: 8rem;
  position: relative;

  background-color: ${(props) => props.theme.colors.background};

  &:before {
    content: "";
    position: absolute;
    width: 466px;
    height: 466px;
    background-image: url("assets/img/ellipse.svg");
    background-size: 100%;
    background-repeat: no-repeat;
    right: 20rem;
    top: 5rem;
    @media (max-width: 500px) {
      content: none;
    }
  }

  overflow: hidden;
  max-width: 100%;
  div.container {
    max-width: 68.75rem;
    margin: 0 auto;
    @media (max-width: 500px) {
      max-width: 30rem;
    }

    div.title {
      padding: 2rem 0;
      p {
        font-family: Balbeer;
        font-size: 30px;
        font-style: normal;
        font-weight: 400;
        line-height: 30px;
        color: ${(props) => props.theme.colors.secondary};
      }

      h1 {
        font-family: SantElia;
        font-size: 120px;
        font-weight: 700;
        line-height: 161px;
        color: ${(props) => props.theme.colors.textBlack};
      }
    }

    @media (max-width: 500px) {
      max-width: 30rem;
      div.title {
        padding: 4rem 0 2rem 0;
        p {
          font-size: 30px;
          line-height: 30px;
        }

        h1 {
          margin-top: 1rem;
          font-size: 85px;
          line-height: 95px;
        }
      }
    }

    div.content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      margin-bottom: 150px;
      justify-content: space-around;

      div.tutorial-content {
        ol {
          padding-left: 5rem;
          li {
            padding-top: 4rem;
            position: relative;
            width: 25rem;
            color: ${(props) => props.theme.colors.textBlack};

            font-family: Lato;
            font-size: 18px;
            font-weight: 400;
            line-height: 22px;
            span {
              font-family: Lato;
              font-size: 18px;
              font-style: normal;
              font-weight: 900;
              line-height: 28px;
              letter-spacing: 0em;
              text-align: left;
            }
            &::marker {
              color: ${(props) => props.theme.colors.secondary};
              font-family: Balbeer;
              font-size: 40px;
              font-style: normal;
              font-weight: 400;
              line-height: 56px;
            }
          }
        }
      }

      @media (max-width: 500px) {
        display: flex;
        flex-direction: column;
        div.image {
          img {
            object-fit: cover;
            max-width: 100%;
          }
        }
        div.tutorial-content {
          ol {
            padding-left: 5rem;
            li {
              padding-top: 0;
              position: relative;
              width: 25rem;

              font-family: Lato;
              font-size: 18px;
              font-weight: 400;
              line-height: 22px;
              &::marker {
                font-family: Balbeer;
                font-size: 40px;
                font-style: normal;
                font-weight: 400;
                line-height: 56px;
              }
            }
            li + li {
              padding-top: 4rem;
            }
          }
        }
      }

      div.image {
        @media (max-width: 500px) {
          margin-top: 4rem;
          img {
            object-fit: cover;
            max-width: 100%;
            border-radius: 7rem;
          }
          img.image-content {
            border-radius: 5rem;
          }
        }
        img {
          height: 350px;
          &:before {
            content: "";
            background-color: ${(props) => props.theme.colors.primary};
            position: absolute;
            width: 370px;
            height: 370px;
            right: 3rem;
            bottom: 0;
            border-radius: 50%;
            @media (max-width: 500px) {
              content: "";
              width: 150px;
              height: 150px;
              left: 0;
              top: 1rem;
            }
          }
        }
        position: relative;
        .image-content {
          border-radius: 7rem 0px 0px 0px;
        }

        &:before {
          content: "";
          position: absolute;
          width: 282px;
          height: 188px;
          background-image: url("assets/img/leaves.png");
          background-size: 100%;
          background-repeat: no-repeat;
          left: 0;
          top: -8rem;
          @media (max-width: 500px) {
            content: none;
          }
        }
        &:after {
          content: "";
          position: absolute;
          width: 413px;
          height: 275px;
          background-image: url("assets/img/leaves.png");
          background-size: 100%;
          background-repeat: no-repeat;
          right: -7rem;
          transform: rotate(120.75deg);
          bottom: 10rem;
          filter: blur(2px);
          @media (max-width: 500px) {
            content: none;
          }
        }
      }
    }
  }
`;

const Container = styled.div`
  width: 80%;
  height: 80vh;
  background-color: black;
  z-index: 2000;
  position: fixed;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  margin-right: -50%;
  transform: translate(-50%, -50%);
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  h2 {
    margin-bottom: 2rem;
    font-size: 1.5rem;
    color: var(--text-title);
  }
  input {
    margin: 1rem auto;
    outline: none;
    font-size: 16px;
    width: 80%;
    height: 3rem;
    border-radius: 0.5rem;
    border-bottom: solid 4px #91a63c;

    &:focus {
      border-bottom: solid 4px var(--yellow);
    }

    &::placeholder {
      transform: translateX(1rem);
      font-size: 16px;
      font-weight: 400;
      line-height: 26px;
      color: --text-light;
    }
  }
  button[type="submit"] {
    margin-top: 1.5rem;
    padding: 0 1.5rem;
    width: 100%;
    height: 4rem;
    font-size: 1rem;
    font-weight: 600;
    color: #ffffff;
    background: var(--green);
    border: 0;
    border-radius: 0.25rem;
    transition: filter 0.2s ease-in-out;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

const Beneficios = styled.section`
  background-color: ${(props) => props.theme.colors.background};
  max-width: 100%;
  overflow: hidden;
  padding-bottom: 10rem;
  div.container {
    max-width: 68.75rem;
    margin: 0 auto;

    div.infos {
      text-align: center;
      h2 {
        margin: 1rem 0;
        font-family: Lato;
        font-size: 30px;
        font-weight: 800;
        line-height: 42px;
        color: ${(props) => props.theme.colors.textBlack};
      }
      p {
        margin: 1rem 0;
        font-family: Lato;
        font-size: 16px;
        font-weight: 400;
        line-height: 26px;
        color: ${(props) => props.theme.colors.textLight};
      }
    }
    hr.divisor {
      margin: 3rem auto;
      ${(props) =>
        props.theme.title === "light" &&
        "background-image: url('/assets/img/divisor-3.svg')"};
      ${(props) =>
        props.theme.title === "dark" &&
        "background-image: url('/assets/img/divisor-dark-2.svg')"};
      background-size: contain;
      width: 103px;
      height: 10px;
      background-repeat: no-repeat;
    }
    .services {
      margin: 0 auto;
      .services-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        @media (max-width: 500px) {
          margin: 0 auto;
          grid-template-columns: 1fr;
          max-width: 30rem;
        }
        .service-content {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          padding: 2rem 0;

          @media (min-width: 700px) {
            &:nth-child(odd) {
              border-right: 1px solid ${(props) => props.theme.colors.secondary};
            }
            &:nth-child(n + 3):nth-child(-n + 4) {
              border-top: 1px solid ${(props) => props.theme.colors.secondary};
            }
          }
          div {
            margin: 1rem;
          }
          div > h3 {
            color: ${(props) => props.theme.colors.secondary};
            font-family: Lato;
            font-size: 24px;
            font-weight: 600;
            line-height: 38px;
          }
          div > p {
            color: ${(props) => props.theme.colors.textLight};
            max-width: 310px;
            font-family: Lato;
            font-size: 16px;
            font-weight: 400;
            line-height: 26px;
          }
        }
      }
    }
  }
`;

export { Body, Top, Tutorial, Beneficios, Form, Container };
