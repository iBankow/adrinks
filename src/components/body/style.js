import styled from "styled-components";

const Main = styled.section`
  &:after {
    z-index: 1;
    opacity: 1;
    position: absolute;
    top: ${(props) =>
      props.bar && props.theme.title !== "dark" ? "" : "-210px"};
    width: 100%;
    height: 150px;
    background: linear-gradient(
      180deg,
      ${(props) =>
        props.theme.title === "dark" ? `${"#222"}` : "rgba(248, 249, 242, 1)"},
      transparent
    );
    @media (max-width: 500px) {
      top: -120px;
      ${(props) =>
        props.theme.title === "dark" ? "content: '';" : "content: none"}
    }
    content: "";
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
      ${(props) => (props.theme.title === "dark" ? `${"#222"}` : "white")},
      transparent
    );

    @media (max-width: 500px) {
      content: none;
    }
  }
  margin-top: ${(props) => (props.bar ? "17rem" : "12rem")};
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
      @media (max-width: 500px) {
        content: none;
      }
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
      @media (max-width: 500px) {
        content: none;
      }
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
    box-shadow: 0 0.25rem 3.125rem -1.562rem ${(props) => props.theme.colors.shadowOne};
    border-radius: 0 12.5rem 1.25rem 1.25rem;
    align-items: center;

    @media (max-width: 500px) {
      max-width: 30rem;

      display: flex;
      box-shadow: 0 1rem 3.125rem -1.562rem ${(props) => props.theme.colors.shadowOne};

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
      color: ${(props) => props.theme.colors.colorText};
    }

    p {
      font-size: 1rem;
      padding: 1rem 0;

      font-style: normal;
      font-weight: 400;
      line-height: 1.625rem;
      color: ${(props) => props.theme.colors.colorText};
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
        background: ${(props) => props.theme.colors.translucid};
        div.info {
          width: 18.75rem;

          p {
            padding: 0;
          }
        }
      }

      h3 {
        color: ${(props) => props.theme.colors.colorText};
        font-size: 1.5rem;
        line-height: 2.37rem;
      }
    }
  }
`;

const Head = styled.section`
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
      color: ${(props) => props.theme.colors.textBlack};
    }
    hr.divider {
      ${(props) =>
        props.theme.title === "light" &&
        "background-image: url('/assets/img/divisor-2.svg')"};
      ${(props) =>
        props.theme.title === "dark" &&
        "background-image: url('/assets/img/divisordark-2.svg')"};
      background-repeat: no-repeat;
      background-size: contain;
      width: 7rem;
      height: 0.62rem;
      margin-bottom: 1.25rem;
    }
    p {
      color: ${(props) =>
        props.theme.title === "dark"
          ? props.theme.colors.textBlack
          : props.theme.colors.secondary};
      margin-bottom: 1.25rem;
      font-family: Lato;
      font-size: 1.375rem;
      font-style: normal;
      font-weight: 800;
      line-height: 2rem;
    }
    button {
      color: ${(props) => props.theme.colors.secondary};
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
    max-width: 30rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    div.img {
      display: none;
    }
  }
`;

const Assets = styled.div`
  max-width: 62.5rem;
  div.leaves {
    position: absolute;
    top: -8rem;
    left: 14rem;
    width: 17rem;
    @media (max-width: 500px) {
      display: none;
    }
  }
  div.leave.three {
    position: absolute;
    right: -20rem;
    top: 10rem;
    width: 25rem;
  }

  div.ellipse {
    background: ${(props) => props.theme.colors.ellipse};
    border-radius: 50%;
    z-index: -1;
    position: absolute;
    top: -6rem;
    left: -5rem;
    width: 25rem;
  }
  @media (max-width: 500px) {
    display: none;
  }
`;

export { Main, Head, Assets };
