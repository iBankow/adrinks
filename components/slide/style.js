import styled from "styled-components";

const SlideShow = styled.section`
  padding-top: 90px;
  max-width: 1100px;
  margin: 0 auto;
  position: relative;
  color: white;

  div.nav {
    position: absolute;
    bottom: 8rem;

    button {
      .icon {
        fill: var(--green);
      }
      z-index: 1;
      background-color: var(--yellow);
      width: 64px;
      height: 55px;
      border-radius: 50px 0 0 50px;

      &.second {
        border-left: solid white 2px;
        border-radius: 0px 50px 50px 0px;
      }

      font-weight: 700;
      color: white;
      font-size: 20px;
      line-height: 24px;
      letter-spacing: 0.1em;

      transition: filter, background-color 300ms ease-in-out;
      &:hover {
        background-color: #61821f;
        cursor: pointer;
        filter: brightness(0.8);
        .icon {
          fill: var(--yellow);
        }
      }
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

      .slide-container {
        z-index: 1;
        position: absolute;
        right: 5rem;
        top: 0;

        .bg {
          background-color: var(--yellow);
          z-index: -1;
          position: absolute;
          width: 534px;
          height: 534px;
          left: 3rem;
          bottom: 5rem;
          border-radius: 50%;
        }
      }

      span > p {
        font-family: Balbeer;
        font-size: 50px;
        line-height: 50px;
        color: var(--yellow);
        margin-bottom: 2rem;
      }

      hr.divisor {
        background-image: url("/assets/img/divisor.svg");
        background-size: contain;
        width: 108px;
        height: 10px;
        background-repeat: no-repeat;
      }

      h1 {
        font-family: SantElia;
        font-weight: 700;
        font-size: 120px;
        line-height: 160px;
        margin-top: 30px;
        margin-bottom: 30px;
      }

      p {
        width: 297px;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 22px;
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
  }
`;

export { SlideShow };
