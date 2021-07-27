import styled from "styled-components";

const Back = styled.section`
  z-index: -1000;
  @media (max-width: 500px) {
    max-width: 30rem;
  }

  .texture {
    z-index: -5;
    opacity: 0.2;
    background-size: contain;
    top: 0;
    position: absolute;
    width: 100%;
    height: 65.25rem;
    background-image: url("assets/img/texture-2.png");
  }

  &:after {
    opacity: 1;
    z-index: -1;
    position: absolute;
    bottom: ${(props) => (props.theme.title === "dark" ? "0px" : "0px")};
    width: 100%;
    height: 150px;
    background: linear-gradient(
      0deg,
      ${(props) =>
        props.theme.title === "dark" ? `${"#222"}` : "rgba(248, 249, 242, 1)"},
      transparent
    );

    @media (max-width: 500px) {
      content: none;
    }
    ${(props) => props.bar && "content: '';"}
  }

  .home {
    z-index: -1;
    opacity: 1;
    background-size: contain;
    mix-blend-mode: color-dodge;
    top: 0;
    z-index: -1;
    position: absolute;
    width: 100%;
    height: 65.25rem;

    background-image: linear-gradient(
      180deg,
      ${(props) =>
        props.theme.title === "dark"
          ? `${"#222, #222"}`
          : "rgba(145, 166, 60, 0.28) 71.87%, rgba(145, 166, 60, 0) 100%"}
    );
  }

  .bar {
    z-index: -1000;
    opacity: 1;
    background-size: contain;
    top: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      180deg,
      ${(props) =>
        props.theme.title === "dark"
          ? `${"#222, #222"}`
          : "rgba(255, 255, 255, 1) 71.87%, rgba(255, 255, 255, 1) 100%"}
    );
  }

  div.background {
    z-index: -20;
    position: absolute;
    width: 100%;
    height: 899px;
    left: 0px;
    top: 0px;
    background: linear-gradient(
      180deg,
      rgba(145, 166, 60, 0.28) 71.87%,
      rgba(145, 166, 60, 0) 100%
    );
    background: ${(props) => props.theme.colors.background};
  }

  div.rectangle.home {
    z-index: -6;
    position: absolute;
    width: 68.75rem;
    height: ${(props) =>
      props.theme.title === "dark" ? `${"10rem"}` : "53.25rem"};
    left: 0px;
    top: 0px;

    background: ${(props) =>
      props.theme.title === "dark"
        ? "black"
        : props.theme.colors.darkSecondary};
    border-radius: 0px 0px 500px 0px;
    div.rectangle > div.circle {
      border-radius: 50%;
      position: absolute;
      width: 480px;
      height: 480px;
      left: 45rem;
      top: -151px;

      background: rgba(255, 255, 255, 0.07);
    }

    div.circle2 {
      z-index: 1;

      border-radius: 50%;

      position: absolute;
      width: 323px;
      height: 323px;
      left: 50rem;
      top: -125px;

      background: rgba(255, 255, 255, 0.05);
    }
  }

  div.rectangle {
    z-index: -6;
    position: absolute;
    width: 75.625rem;
    height: 10.9375rem;
    left: 0px;
    top: 0px;

    @media (max-width: 500px) {
      width: 90%;
      border-radius: 0px 0px 150px 0px;
    }

    background: ${(props) => props.theme.colors.darkSecondary};
    border-radius: 0px 0px 500px 0px;
    div.circle {
      border-radius: 50%;
      position: absolute;
      width: 480px;
      height: 480px;
      left: 45rem;
      top: -151px;

      background: rgba(255, 255, 255, 0.07);
    }

    div.circle2 {
      z-index: 1;

      border-radius: 50%;

      position: absolute;
      width: 323px;
      height: 323px;
      left: 50rem;
      top: -125px;

      background: rgba(255, 255, 255, 0.05);
    }

    @media (max-width: 500px) {
      overflow: hidden;

      width: 100%;

      div.circle {
        border-radius: 50%;
        position: absolute;
        width: 280px;
        height: 280px;
        left: 2rem;
        top: -10rem;
        background: rgba(255, 255, 255, 0.07);
      }

      div.circle2 {
        z-index: 1;

        border-radius: 50%;

        position: absolute;
        width: 323px;
        height: 323px;
        left: 0rem;
        top: -125px;

        background: rgba(255, 255, 255, 0.05);
      }
    }
  }
`;

export { Back };
