import styled from "styled-components";

const Container = styled.section`
  max-width: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    width: 259px;
    height: 454px;
    background-image: url("assets/img/alecrim.png");
    background-size: 60%;
    background-repeat: no-repeat;
    top: 20rem;
    left: 0;
    z-index: -1;
    @media (max-width: 500px) {
      content: none;
    }
  }

  &:after {
    content: "";
    position: absolute;
    width: 259px;
    height: 454px;
    background-image: url("assets/img/dots.svg");
    background-size: 60%;
    background-repeat: no-repeat;
    right: 20rem;
    bottom: -10rem;
    @media (max-width: 500px) {
      content: none;
    }
  }

  div.nav {
    position: absolute;
    bottom: 8rem;
    left: 25rem;

    @media (max-width: 500px) {
      left: 1rem;
      bottom: 2rem;
    }

    button {
      .icon {
        fill: var(--yellow);
      }
      z-index: 1;
      background-color: var(--green);
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
        background-color: var(--yellow);
        cursor: pointer;
        filter: brightness(0.8);
        .icon {
          fill: var(--green);
        }
      }
    }
  }

  .slide-container {
    width: 100%;
    height: 51.43rem;
    display: flex;
    align-items: center;
    overflow-x: hidden;

    @media (max-width: 500px) {
      height: 41.43rem;
    }

    .image-slider {
      z-index: 1000;
      width: 100%;
      height: 600px;
      position: absolute;
      left: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 0.7s;
      transform: translateX(50%);

      .slides-div {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 30px 0 30px;

        .img {
          object-fit: cover;
          height: 249px;
          width: 364px;
          position: relative;
          transition: 0.5s;
          filter: saturate(10%) blur(5px);
          border-radius: 30px;
          background: linear-gradient(
            0deg,
            rgba(255, 214, 89, 0.29),
            rgba(255, 214, 89, 0.29)
          );
          &:hover {
            cursor: pointer;
          }
        }

        .img.active {
          z-index: 101;
          width: 364px;
          height: 311px;
          object-fit: cover;
          filter: none;
          border-radius: 30px;
        }
      }
    }
  }
`;

export { Container };
