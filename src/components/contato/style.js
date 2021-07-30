import styled from "styled-components";

const Main = styled.section`
  background: ${(props) => props.theme.colors.background};
  width: 100%;
  position: relative;
  padding-bottom: 10rem;
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

    @media (max-width: 500px) {
      content: none;
    }

    z-index: 10000;
  }

  div.container {
    max-width: 68.75rem;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media (max-width: 500px) {
      max-width: 30rem;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

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
        border-bottom: solid 4px ${(props) => props.theme.colors.secondary};

        &:focus {
          border-bottom: solid 4px ${(props) => props.theme.colors.primary};
        }

        &::placeholder {
          transform: translateX(1rem);
          font-size: 16px;
          font-weight: 400;
          line-height: 26px;
          color: --text-light;
        }
      }
      h2 {
        font-family: SantElia;
        font-size: 5.625rem;
        font-style: normal;
        font-weight: 700;
        line-height: 121px;
        letter-spacing: 0em;
        text-align: left;
        color: ${(props) => props.theme.colors.secondary};
      }
      button {
        margin-top: 1rem;
        background-color: ${(props) => props.theme.colors.secondary};
        width: 168px;
        height: 55px;
        border-radius: 70px;

        font-weight: 700;
        color: white;
        font-size: 20px;
        line-height: 24px;
        letter-spacing: 0.1em;
      }

      @media (max-width: 500px) {
        width: 80%;
        margin-bottom: 20px;
        button {
          width: 130px;
          height: 40px;
          letter-spacing: 0.08em;
        }
      }
    }

    .contato {
      position: relative;
      width: 100%;
      background: ${(props) => props.theme.colors.background};
      border-radius: 0px 10rem 0px 0px;
      box-shadow: 0px 0px 200px -20px ${(props) => props.theme.colors.shadowOne};
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

        @media (max-width: 500px) {
          content: none;
        }
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

        @media (max-width: 500px) {
          content: none;
        }
      }

      span {
        font-size: 24px;
        font-style: normal;
        color: ${(props) => props.theme.colors.textBlack};
        font-weight: 600;
        line-height: 38px;
      }
      p {
        color: ${(props) => props.theme.colors.textLight};
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 26px;
      }

      @media (max-width: 500px) {
        box-shadow: 0px 0px 90px -20px ${(props) => props.theme.colors.shadowOne};
        border-radius: 0px 8rem 0px 0px;
        span {
          font-size: 20px;
        }
        p {
          font-size: 14px;
        }
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
            border: 2px solid ${(props) => props.theme.colors.secondary};
            border-radius: 4.375rem;
            background-color: white;

            color: ${(props) => props.theme.colors.secondary};
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            line-height: 24px;
            letter-spacing: 0.1em;

            @media (max-width: 500px) {
              margin-top: 1rem;
              width: 80%;
              height: 45px;
              border-radius: 4.375rem;
              background-color: ${(props) => props.theme.colors.background};

              font-size: 16px;
              font-style: normal;
              font-weight: 700;
              line-height: 24px;
              letter-spacing: 0.1em;
            }
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

          @media (max-width: 500px) {
            div > p {
              margin-top: 0;
            }
            div + div {
              margin-top: 0;
            }
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
