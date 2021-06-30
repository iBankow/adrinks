import styled from "styled-components";

const Main = styled.section`
  margin-top: 12rem;
  width: 100%;
  position: relative;

  div.img-test {
    &:after {
      content: "";
      position: absolute;
      width: 320px;
      height: 213px;
      background-image: url("assets/img/leaves.png");
      background-size: 100%;
      background-repeat: no-repeat;
      right: -10rem;
      bottom: 30rem;
    }

    &:before {
      content: "";
      position: absolute;
      width: 320px;
      height: 213px;
      background-image: url("assets/img/leaves-2.png");
      background-size: 100%;
      background-repeat: no-repeat;
      right: 5rem;
      top: 0;
      transform: rotate(270deg);
      filter: blur(7px) contrast(70%);
    }

    overflow: hidden;
    z-index: -2;
    top: -13rem;
    position: absolute;
    width: 100%;
    height: 900px;
    background-repeat: repeat;
    background: linear-gradient(
        180deg,
        #ffffff 11.98%,
        rgba(255, 214, 89, 0.35) 100%
      ),
      url("assets/img/crew.jpg");
  }

  section.services {
    justify-content: space-between;
    position: relative;
    max-width: 68.75rem;
    margin: 3rem auto 0 auto;
    background-color: white;
    width: 100%;
    height: 680px;
    box-shadow: 0px 4px 50px -25px rgba(145, 166, 60, 0.67);
    border-radius: 0px 200px 20px 20px;
    align-items: center;

    h2 {
      padding-top: 5rem;
      font-size: 30px;
      font-style: normal;
      font-weight: 800;
      line-height: 42px;
      letter-spacing: 0em;
      color: rgba(51, 51, 51, 1);
    }

    p {
      font-size: 16px;
      padding: 1rem 0;

      font-style: normal;
      font-weight: 400;
      line-height: 26px;
      color: rgba(112, 112, 112, 1);
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
      grid-gap: 35px;

      .service-content {
        justify-content: space-around;
        width: 100%;
        align-items: center;
        display: flex;
        text-align: left;
        width: 448px;
        height: 142px;
        border-radius: 20px;
        background: rgba(145, 166, 60, 0.05);
        div.info {
          width: 300px;

          p {
            padding: 0;
          }
        }
      }

      h3 {
        color: rgba(34, 34, 34, 1);
        font-size: 24px;
        line-height: 38px;
      }
    }
  }
`;

const Head = styled.section`
  max-width: 68.75rem;
  z-index: 100;
  position: relative;
  padding: 0 50px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 65px;
  align-items: flex-start;

  div.img {
    position: relative;
    width: 548px;
    height: 355px;
    img {
      border-radius: 100px 0px 0px 0px;
    }

    &:after {
      content: "";
      position: absolute;
      width: 413px;
      height: 275px;
      background-image: url("assets/img/leaves.png");
      background-size: 100%;
      background-repeat: no-repeat;
      top: 15rem;
      left: -8rem;
      filter: blur(3px);
      transform: rotate(120.75deg);
    }
  }
  div.info {
    h2 {
      font-family: SantElia;
      font-size: 120px;
      font-style: normal;
      font-weight: 700;
      line-height: 161px;
      margin-bottom: 10px;
    }
    hr.divider {
      background-image: url("/assets/img/divisor-2.svg");
      background-repeat: no-repeat;
      background-size: contain;
      width: 113px;
      height: 10px;
      margin-bottom: 20px;
    }
    p {
      color: rgb(97, 130, 31);
      margin-bottom: 20px;
      font-family: Lato;
      font-size: 22px;
      font-style: normal;
      font-weight: 800;
      line-height: 31px;
    }
    button {
      color: rgb(97, 130, 31);
      height: 55px;
      width: 305px;
      border-radius: 70px;
      font-family: Lato;
      font-size: 20px;
      font-weight: 800;
      line-height: 24px;
      letter-spacing: 0.1em;
    }
  }
`;

const Assets = styled.div`
  max-width: 1000px;
  div.leaves {
    position: absolute;
    top: -8rem;
    left: 14rem;
    width: 282px;
  }
  div.leave.three {
    position: absolute;
    right: -20rem;
    top: 10rem;
    width: 413px;
  }
  div.ellipse {
    z-index: -1;
    position: absolute;
    top: -9rem;
    left: -8rem;
    width: 413px;
  }
`;

export { Main, Head, Assets };
