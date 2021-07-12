import styled from "styled-components";

const Back = styled.section`
  .aexture {
    z-index: -5;
    mix-blend-mode: screen;
    opacity: 0.2;
    background-size: contain;
    top: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url("assets/img/texture-2.png");
  }
  &:aafter {
    opacity: 1;
    content: "";
    z-index: -1;
    position: absolute;
    bottom: 70px;
    width: 100%;
    height: 100px;
    background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 1),
      rgba(255, 255, 255, 1)
    );
  }

  .texture.home {
    z-index: -1;
    opacity: 1;
    background-size: contain;
    mix-blend-mode: color-dodge;
    top: 0;
    z-index: -1;
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      180deg,
      rgba(145, 166, 60, 0.28) 71.87%,
      rgba(145, 166, 60, 0) 100%
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
  }

  div.rectangle.home {
    z-index: -6;
    position: absolute;
    width: 68.75rem;
    height: 53.25rem;
    left: 0px;
    top: 0px;

    background: #2a3613;
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

    @media (max-width: 500px) {
      width: 100%;
      height: 620px;

      border-radius: 0px 0px 300px 0px;
    }
  }

  div.rectangle {
    overflow: hidden;

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

    background: #2a3613;
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
  }
`;

export { Back };
