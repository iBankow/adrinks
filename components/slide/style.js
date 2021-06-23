import styled from "styled-components";

const SlideShow = styled.section`
  padding-top: 90px;
  max-width: 1100px;
  margin: 0 auto;
  position: relative;
  color: white;

  div.nav {
    position: absolute;
    bottom: 0rem;

    button {
      z-index: 1;
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

  div.slide {
    height: 756px;
    display: flex;

    .slider.active {
      align-items: flex-start;
      justify-content: center;
      display: grid;
      grid-template-columns: 1fr 1fr;

      span > p {
        font-family: Balbeer;
        font-size: 50px;
        line-height: 50px;
        color: var(--yellow);
      }

      h1 {
        font-family: SantElia;
        font-weight: 700;
        font-size: 120px;
        line-height: 160px;
        margin-bottom: 30px;
      }

      p {
        width: 297px;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 22px;
        margin-bottom: 64px;
      }

      button {
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
  }
`;

export { SlideShow };
