import styled from "styled-components";

const Back = styled.section`
  .texture {
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

  div.rectangle {
    z-index: -2;
    position: absolute;
    width: 1100px;
    height: 852px;
    left: 0px;
    top: 0px;

    background: #2a3613;
    border-radius: 0px 0px 500px 0px;
  }

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
`;

export { Back };
