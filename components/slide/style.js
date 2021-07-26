import styled from "styled-components";

const SlideShow = styled.section`
  overflow: hidden;
  max-width: 100%;
  margin-bottom: -0.8rem;

  section {
    padding-top: 90px;
    max-width: 68.75rem;
    margin: 0 auto;
    position: relative;
    color: white;

    @media (max-width: 500px) {
      max-width: 30rem;

      padding-top: 45px;
    }

    div.nav {
      position: absolute;
      bottom: 8rem;

      button {
        .icon {
          fill: ${(props) => props.theme.colors.secondary};
        }
        z-index: 1;
        background-color: ${(props) => props.theme.colors.primary};
        width: 64px;
        height: 54px;
        border-radius: 50px 0 0 50px;

        &.second {
          border-left: solid white 2px;
          border-radius: 0px 50px 50px 0px;
        }

        font-size: 20px;

        transition: filter, background-color 300ms ease-in-out;
        &:hover {
          background-color: ${(props) => props.theme.colors.secondary};
          cursor: pointer;
          filter: brightness(0.8);
          .icon {
            fill: ${(props) => props.theme.colors.primary};
          }
        }
      }

      @media (max-width: 500px) {
        bottom: 30rem;
        display: flex;
        width: 100px;
        height: 40px;
        right: 37%;
        bottom: 5rem;
        button {
          height: 100%;
        }
      }
    }

    div.divisor {
      display: flex;
      top: 10rem;
      position: absolute;
      background-size: contain;
      width: 100%;
      height: 10px;
      background-repeat: no-repeat;
      .ellipse {
        align-items: center;
        display: flex;
        margin: 0 0.5rem;
        filter: brightness(0) invert(1);
        &.active {
          filter: none;
        }
        cursor: pointer;
      }
    }

    div.slide {
      height: 756px;
      display: flex;
      z-index: 1;

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

          &:before {
            content: "";
            background-color: ${(props) => props.theme.colors.primary};
            z-index: -1;
            position: absolute;
            width: 534px;
            height: 534px;
            left: 3rem;
            bottom: 5rem;
            border-radius: 50%;

            @media (max-width: 500px) {
              content: "";
              width: 200px;
              height: 200px;
              left: 0;
              top: 0;
            }
          }

          .image {
            animation: slideIn 500ms;
          }

          @keyframes slideIn {
            0% {
              transform: translateX(150%);
              opacity: 0;
            }
            100% {
              transform: translateX(0%);
              opacity: 1;
            }
          }
        }

        span > p {
          font-family: Balbeer;
          font-size: 50px;
          line-height: 50px;
          color: ${(props) =>
            props.theme.title === "dark"
              ? props.theme.colors.secondary
              : props.theme.colors.primary};
          margin-bottom: 42px;
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
          background-color: ${(props) => props.theme.colors.secondary};
          width: 220px;
          height: 55px;
          border-radius: 70px;

          font-weight: 700;
          color: white;
          font-size: 20px;
          line-height: 24px;
          letter-spacing: 0.1em;
        }

        @media (max-width: 500px) {
          .slide-container {
            z-index: 0;
            position: absolute;
            right: 1rem;
            top: 1rem;
            width: 12rem;
          }
          h1 {
            font-size: 5rem;
            line-height: 5rem;
            margin-top: 1rem;
            margin-bottom: 1rem;
          }
          button {
            margin-top: 15px;
            background-color: ${(props) => props.theme.colors.secondary};
            width: 150px;
            height: 45px;
            border-radius: 70px;

            font-weight: 700;
            color: white;
            font-size: 15px;
            line-height: 24px;
            letter-spacing: 0.1em;
          }
        }
      }
      @media (max-width: 500px) {
        height: 456px;

        .slider.active {
          display: grid;
          grid-template-columns: 1fr;
        }
        .info {
          z-index: 1;
        }
      }
    }
  }
`;

export { SlideShow };
