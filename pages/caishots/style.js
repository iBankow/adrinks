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
    div.slide {
      display: flex;
      justify-content: space-between;

      div.info {
        p.subtittle {
          font-family: Lato;
          font-weight: 800;
          font-size: 22px;
          line-height: 31px;
          color: var(--green);
          width: 297px;
        }

        hr.divisor {
          margin: 3rem 0;
          background-image: url("/assets/img/divisor-2.svg");
          background-size: contain;
          width: 108px;
          height: 10px;
          background-repeat: no-repeat;
        }

        h1 {
          color: var(--color-tex);
          font-family: SantElia;
          font-weight: 700;
          font-size: 120px;
          line-height: 160px;
          margin-bottom: 30px;
        }

        p {
          color: var(--color-tex);
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
          content: "";
          background-color: var(--yellow);
          position: absolute;
          width: 370px;
          height: 370px;
          right: 3rem;
          bottom: 0;
          border-radius: 50%;
        }
      }
    }
  }
`;

const Body = styled.section`
  margin-top: -2rem;
  max-width: 100%;
  position: relative;

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
  }

  .body {
    background-color: white;
    margin: 0 auto;
    max-width: 68.75rem;
    width: 100%;
    min-height: 40rem;

    box-shadow: 0px 4px 50px -25px rgba(145, 166, 60, 0.67);
    border-radius: 0px 200px 0px 0px;

    div.title {
      padding: 4rem 0 2rem 4rem;
      h1 {
        font-family: Balbeer;
        font-size: 30px;
        font-weight: 400;
        line-height: 30px;
        color: var(--color-tex);

        span {
          font-family: Lato;
          font-size: 54px;
          color: var(--green);
          font-weight: 800;
        }
      }
    }

    div.container {
      display: grid;
      grid-template-columns: 2fr 1fr;
      position: relative;

      div.shop {
        z-index: 1000;
        height: 100%;
        background: #eff2e2;
        border-radius: 0px 40px 40px 40px;

        transition: height 2s ease-in-out;

        div.filter {
          width: 100%;
          padding: 2rem 3rem;

          div {
            height: 55px;
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

                color: var(--green);
                font-family: Lato;
                font-size: 16px;
                font-weight: 800;
                line-height: 22px;
                text-align: center;

                transition: 0.3s ease-in-out;

                &.select {
                  background-color: var(--green);
                  color: white;
                }

                &:hover {
                  cursor: pointer;
                  background-color: var(--green);
                  color: white;
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
            border: 1px solid #dee4c4;
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
                color: var(--green);
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

            color: var(--green);
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
                color: var(--green);
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

          background: var(--green);
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
  }
`;

const Tutorial = styled.section`
  overflow: hidden;
  max-width: 100%;
  div.container {
    max-width: 68.75rem;
    margin: 0 auto;

    div.title {
      padding: 2rem 0;
      p {
        font-family: Balbeer;
        font-size: 30px;
        font-style: normal;
        font-weight: 400;
        line-height: 30px;
        color: var(--green);
      }

      h1 {
        font-family: SantElia;
        font-size: 120px;
        font-weight: 700;
        line-height: 161px;
        color: var(--color-tex);
      }
    }

    div.content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      padding-bottom: 300px;
      justify-content: space-around;

      div.tutorial-content {
        ol {
          padding-left: 5rem;
          li {
            padding-top: 4rem;
            position: relative;
            width: 25rem;
            color: var(--color-tex);

            font-family: Lato;
            font-size: 18px;
            font-weight: 400;
            line-height: 22px;
            /*&:before {
              position: absolute;
              height: 80%;
              width: 6px;
              content: "";
              border-radius: 40px;
              background: var(--color-tex);
              left: -5rem;
            }

            &:after {
              position: absolute;
              height: 7px;
              width: 7px;
              content: "";
              border-radius: 50%;
              background: var(--green);
              top: 0;
              left: -5rem;
            }*/
            &::marker {
              color: var(--green);
              font-family: Balbeer;
              font-size: 40px;
              font-style: normal;
              font-weight: 400;
              line-height: 56px;
            }
          }
        }
      }

      div.image {
        position: relative;
        .image-content {
          border-radius: 7rem 0px 0px 0px;
        }

        &:before {
          z-index: 1;
          content: "";
          position: absolute;
          width: 282px;
          height: 188px;
          background-image: url("assets/img/leaves.png");
          background-size: 100%;
          background-repeat: no-repeat;
          left: 0;
          top: -8rem;
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
          bottom: 7rem;
          filter: blur(2px);
        }
      }
    }
  }
`;

export const Container = styled.div`
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

export const Form = styled.form`
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

export const TransactionTypeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  margin: 1rem 0;
`;

export { Body, Top, Tutorial };
