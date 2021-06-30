import styled from "styled-components";

const Head = styled.section`
  max-width: 100%;
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
          color: #222222;
          font-family: SantElia;
          font-weight: 700;
          font-size: 120px;
          line-height: 160px;
          margin-bottom: 30px;
        }

        p {
          color: #222222;
          width: 297px;
          line-height: 22px;
          font-family: Lato;
          font-size: 18px;
          font-style: normal;
          font-weight: 400;
        }

        button {
          margin-top: 64px;
          background-color: #61821f;
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
  overflow: hidden;
  max-width: 100%;

  &:after {
    content: "";
    position: absolute;
    width: 413px;
    height: 275px;
    bottom: 5rem;
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
    height: 590px;
    box-shadow: 0px 4px 50px -25px rgba(145, 166, 60, 0.67);
    border-radius: 0px 200px 0px 0px;

    div.title {
      padding: 4rem 0 2rem 4rem;
      h1 {
        font-family: Balbeer;
        font-size: 30px;
        font-weight: 400;
        line-height: 30px;
        color: #222222;

        span {
          font-family: Lato;
          font-size: 54px;
          color: #61821f;
          font-weight: 800;
        }
      }
    }

    div.container {
      display: grid;
      grid-template-columns: 2fr 1fr;
    }

    div.shop {
      background: #eff2e2;
      border-radius: 0px 40px 40px 40px;

      p.title {
        font-family: Lato;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: 19px;
        color: #222222;
        margin: 30px 0 0 4rem;
      }

      div.shop-items {
        grid-row-gap: 20px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        justify-content: space-around;
        padding: 2rem 2rem;

        div.item {
          display: flex;
          position: relative;
          height: 89px;
          width: 278px;
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
              color: #222222;
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
        color: #222222;
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
            color: #222222;

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
              background: #222222;
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

export { Body, Head, Tutorial };
