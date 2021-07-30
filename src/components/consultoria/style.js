import styled from "styled-components";

const Head = styled.section`
  position: relative;

  @media (max-width: 500px) {
    overflow: hidden;
  }

  &:after {
    opacity: 1;
    content: "";
    z-index: -1;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: ${(props) => (props.theme.title === "dark" ? `300px` : "150px")};
    background: linear-gradient(
      0deg,
      ${(props) =>
        props.theme.title === "dark"
          ? `${"#2546F0"}`
          : "rgba(248, 249, 242, 1)"},
      transparent
    );

    @media (max-width: 500px) {
      content: none;
    }
  }

  div.container {
    max-width: 68.75rem;
    margin: 6rem auto 0 auto;

    h1 {
      font-family: SantElia;
      font-size: 120px;
      font-style: normal;
      font-weight: 700;
      line-height: 161px;
      margin-bottom: 10px;
      color: ${(props) => props.theme.colors.textBlack};
    }

    div.content {
      display: flex;
      flex-direction: row;
      margin: 0;
      justify-content: space-between;
      position: relative;
      &:before {
        content: "";
        position: absolute;
        width: 395px;
        height: 395px;
        background-image: url("assets/img/ellipse.svg");
        background-size: 100%;
        background-repeat: no-repeat;
        right: 18rem;
        top: 5rem;
        transform: rotate(270deg);
        @media (max-width: 500px) {
          content: none;
        }
      }
      &:after {
        content: "";
        position: absolute;
        width: 170px;
        height: 170px;
        background-image: url("assets/img/dots.svg");
        background-size: 100%;
        background-repeat: no-repeat;
        right: 5rem;
        top: 19rem;
        transform: rotate(270deg);
        @media (max-width: 500px) {
          content: none;
        }
      }
      div.info {
        p {
          font-size: 22px;
          font-style: normal;
          font-weight: 800;
          line-height: 31px;
          color: ${(props) => props.theme.colors.secondary};
          width: 361px;
          margin-bottom: 2rem;
        }

        button {
          margin-top: 1rem;
          background-color: ${(props) => props.theme.colors.secondary};
          width: 252px;
          height: 55px;
          border-radius: 70px;

          font-weight: 700;
          color: white;
          font-size: 20px;
          line-height: 24px;
          letter-spacing: 0.1em;
        }
      }
      div.image-container {
        max-width: 597px;
        height: 355px;
        border-radius: 100px 0px;
        position: relative;

        &:after {
          content: "";
          position: absolute;
          width: 320px;
          height: 213px;
          background-image: url("assets/img/leaves.png");
          background-size: 100%;
          background-repeat: no-repeat;
          left: 25rem;
          bottom: 15rem;
        }
        &:before {
          z-index: 1;
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
        .img {
          max-width: 597px;
          height: 355px;
          border-radius: 100px 0px;
        }
      }
    }

    @media (max-width: 500px) {
      max-width: 30rem;
      margin: 6rem auto 0 auto;
      text-align: center;
      h1 {
        font-size: 62px;
        line-height: 85px;
        margin-bottom: 1px;
      }

      div.content {
        flex-direction: column;
        div.info {
          p {
            margin-bottom: 0;
          }
          button {
            margin: 1rem 0;
            background-color: var(--green);
            width: 222px;
            height: 45px;
            border-radius: 70px;

            font-weight: 700;
            color: white;
            font-size: 18px;
            line-height: 24px;
            letter-spacing: 2px;
          }
        }
        div.image-container {
          max-width: 597px;
          height: 100%;
          border-radius: 0px 0px;
          position: relative;

          &:after {
            content: none;
          }
          &:before {
            content: none;
          }
          .img {
            max-width: 597px;
            height: 0;
            border-radius: 50% 0px;
          }
        }
      }
    }
  }
  section.services {
    justify-content: space-between;
    position: relative;
    max-width: 68.75rem;
    margin: 3rem auto 0 auto;
    width: 100%;
    height: 680px;
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

    @media (max-width: 500px) {
      max-width: 30rem;
      margin: 0 auto;
      h2 {
        padding-top: 3rem;
      }
    }

    p {
      font-size: 16px;
      padding: 1rem 0;

      font-style: normal;
      font-weight: 400;
      line-height: 26px;
      color: var(--text-light);
    }

    .services-title {
      justify-content: center;
      margin: 0 auto;
      text-align: start;
    }
    .services-container {
      padding: 5rem 0 0 0;
      justify-items: center;
      text-align: center;
      display: grid;
      grid-gap: 5rem;
      grid-template-columns: 1fr 1fr;

      .service-content {
        justify-content: space-around;
        align-items: center;
        display: flex;
        text-align: left;
        width: 485px;
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

      @media (max-width: 500px) {
        grid-template-columns: 1fr;
        grid-gap: 2rem;

        .service-content {
          justify-content: space-around;
          width: 100%;
          align-items: center;
          display: flex;
          text-align: left;
          height: 142px;
          border-radius: 20px;
          background: rgba(145, 166, 60, 0.05);
          div.info {
            margin-left: 10px;
            p {
              padding: 0;
            }
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

const Body = styled.section`
  background: ${(props) => props.theme.colors.background};
  position: relative;
  padding: 10rem 0;
  overflow-x: hidden;

  &:before {
    content: "";
    position: absolute;
    width: 320px;
    height: 213px;
    background-image: url("assets/img/leaves-2.png");
    background-size: 100%;
    background-repeat: no-repeat;
    right: -5rem;
    top: 30rem;
    transform: rotate(270deg);
    filter: blur(7px) contrast(70%);

    @media (max-width: 500px) {
      content: none;
    }
  }

  &:after {
    opacity: 1;
    content: "";
    z-index: 0;
    position: absolute;
    top: 0px;
    width: 100%;
    height: ${(props) => (props.theme.title === "dark" ? `150px` : "150px")};
    background: linear-gradient(
      180deg,
      ${(props) =>
        props.theme.title === "dark"
          ? `${"#2546F0"}`
          : "rgba(248, 249, 242, 1)"},
      transparent
    );

    @media (max-width: 500px) {
      content: none;
    }
  }

  div.services {
    position: relative;
    overflow-x: hidden;
    justify-content: space-between;
    position: relative;
    max-width: 68.75rem;
    margin: 3rem auto 0 auto;
    width: 100%;
    height: 680px;
    border-radius: 0px 200px 20px 20px;
    text-align: start;
    box-shadow: 0px 0px 90px -20px ${(props) => props.theme.colors.shadowOne};

    h2 {
      padding-top: 5rem;
      font-size: 30px;
      font-style: normal;
      font-weight: 800;
      line-height: 42px;
      letter-spacing: 0em;
      color: ${(props) => props.theme.colors.textBlack};
    }

    @media (max-width: 500px) {
      max-width: 30rem;
      margin: 0 auto;
      h2 {
        color: ${(props) => props.theme.colors.textBlack};
        padding-top: 3rem;
      }
    }

    p {
      font-size: 16px;
      padding: 1rem 0;

      font-style: normal;
      font-weight: 400;
      line-height: 26px;
      color: ${(props) => props.theme.colors.textBlack};
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
      grid-gap: 5rem;
      grid-template-columns: 1fr 1fr;

      .service-content {
        justify-content: space-around;
        align-items: center;
        display: flex;
        text-align: left;
        width: 485px;
        height: 142px;
        border-radius: 20px;
        background: ${(props) => props.theme.colors.translucid};
        div.info {
          width: 300px;

          p {
            padding: 0;
          }
        }
      }

      @media (max-width: 500px) {
        grid-template-columns: 1fr;
        grid-gap: 2rem;

        .service-content {
          justify-content: space-around;
          width: 100%;
          align-items: center;
          display: flex;
          text-align: left;
          height: 142px;
          border-radius: 20px;
          div.info {
            margin-left: 10px;
            p {
              padding: 0;
            }
          }
        }
      }

      h3 {
        color: ${(props) => props.theme.colors.textBlack};
        font-size: 24px;
        line-height: 38px;
      }
    }
  }
`;

export { Head, Body };
