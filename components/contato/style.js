import styled from "styled-components";

const Main = styled.section`
  width: 100%;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    width: 332px;
    height: 275px;
    background-image: url("assets/img/leaves.png");
    background-size: 100%;
    background-repeat: no-repeat;
    top: 0;
    left: -9rem;
    transform: rotate(-140deg);

    z-index: 10000;
  }

  div.container {
    max-width: 1100px;
    margin: 5rem auto;
    display: grid;
    grid-template-columns: 1fr 1fr;

    .form {
      text-align: right;
      margin: 0 auto;
      width: 23rem;
      input {
        margin: 1rem 0;
        outline: none;
        font-size: 16px;
        width: 100%;
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
          color: rgb(112, 112, 112);
        }
      }
      h2 {
        font-family: SantElia;
        font-size: 90px;
        font-style: normal;
        font-weight: 700;
        line-height: 121px;
        letter-spacing: 0em;
        text-align: left;
      }
      button {
        margin-top: 1rem;
        background-color: #61821f;
        width: 168px;
        height: 55px;
        border-radius: 70px;

        font-weight: 700;
        color: white;
        font-size: 20px;
        line-height: 24px;
        letter-spacing: 0.1em;
      }
    }

    .contato {
      position: relative;
      width: 100%;
      background-color: white;
      border-radius: 0px 10rem 0px 0px;
      box-shadow: 0px 0px 200px -20px rgba(145, 166, 60, 0.6);
      &::after {
        content: "";
        position: absolute;
        width: 332px;
        height: 275px;
        background-image: url("assets/img/leaves.png");
        background-size: 100%;
        background-repeat: no-repeat;
        top: -10rem;
        right: 6rem;
        transform: rotate(-10deg);

        z-index: 10000;
      }

      &::before {
        content: "";
        position: absolute;
        width: 439px;
        height: 439px;
        background-image: url("assets/img/ellipse.svg");
        background-size: 100%;
        background-repeat: no-repeat;
        top: -10rem;
        left: -5rem;

        z-index: -1;
      }

      span {
        font-size: 24px;
        font-style: normal;
        font-weight: 600;
        line-height: 38px;
      }
      p {
        color: var(--text-light);
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 26px;
      }
      .infos {
        display: grid;
        grid-template-columns: 1fr 1fr;

        .info-one {
          margin: 0 auto;
          width: 12.1875rem;
          padding: 3.25rem 0;

          button {
            margin-top: 1.3125rem;
            width: 100%;
            height: 55px;
            border: 2px solid #61821f;
            border-radius: 4.375rem;
            background-color: white;

            color: #61821f;
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            line-height: 24px;
            letter-spacing: 0.1em;
          }
        }

        .info-two {
          margin: 0 auto;
          width: 12.1875rem;
          padding: 3.25rem 0;

          div > p {
            margin-top: 0.5rem;
          }
          div + div {
            margin-top: 2rem;
          }
        }
      }

      .map {
        width: 100%;
      }
    }
  }
`;

export { Main };
