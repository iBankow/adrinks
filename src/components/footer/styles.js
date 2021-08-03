import styled from "styled-components";
const FooterMain = styled.footer`
  background: ${(props) => props.theme.colors.background};

  padding: 5rem 0;
  align-items: center;
  position: relative;
  overflow-y: hidden;

  @media (max-width: 500px) {
    padding: 2rem 0;
  }
  &:before {
    content: "";
    position: absolute;
    width: 173.67px;
    height: 304.43px;
    background-image: url("assets/img/alecrim.png");
    background-size: 100%;
    background-repeat: no-repeat;
    left: 50%;
    bottom: -5rem;
    transform: rotate(-68.62deg);
    z-index: -1;

    @media (max-width: 500px) {
      content: none;
    }
  }

  .svg {
    filter: invert(${(props) => (props.theme.title === "dark" ? "0" : "1")});
  }
  section {
    z-index: 1000;
    color: ${(props) => props.theme.colors.textBlack};
    position: relative;
    .top {
      position: absolute;
      right: 0;
      top: -2rem;

      &:hover {
        cursor: pointer;
      }

      @media (max-width: 500px) {
        top: -1.5rem;
        img {
          width: 3rem;
        }
      }
    }
    border-top: solid 1px rgba(221, 221, 221, 1);
    height: 100%;
    align-items: center;
    max-width: 68.75rem;
    margin: 0 auto;
    a {
      color: ${(props) => props.theme.colors.textBlack};
      font-family: Ubuntu;
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: 24px;
    }

    .container {
      padding: 3rem 0;
      display: flex;
      @media (max-width: 500px) {
        flex-direction: column;
        img {
          max-width: 150px;
        }
      }
      .links {
        margin-left: 5rem;
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 40rem;
        @media (max-width: 500px) {
          flex-direction: column;
          margin-left: 0;
          align-items: flex-start;
          max-width: 100%;
          p {
            margin-top: 10px;
          }
          div {
            margin-top: 10px;
          }
        }
        div.icons {
          display: flex;
          width: 5rem;
          justify-content: space-around;
        }
      }
    }

    .copy {
      display: flex;
      justify-content: space-between;

      font-family: Ubuntu;
      text-align: left;
      color: ${(props) => props.theme.colors.textBlack};
      span {
        font-size: 12px;
        font-weight: 700;
        line-height: 24px;
      }
      p {
        font-size: 12px;
        font-weight: 400;
        line-height: 12px;
      }

      img {
        filter: invert(
          ${(props) => (props.theme.title === "dark" ? "1" : "0")}
        );
      }
    }

    @media (max-width: 500px) {
      max-width: 30rem;

      a {
        font-size: 16px;
        line-height: initial;
      }
    }
  }
`;

const WhatsApp = styled.div`
  z-index: 1999;
  position: fixed;
  bottom: 350px;
  right: 400px;
  border-radius: 50px;
  background-color: #5db543;
  border: 0px solid transparent;
  color: #fff;
  padding: 20px;
  display: none;
  cursor: pointer;
  transition: all 300ms ease;
  align-items: center;

  & > span {
    margin-left: -10px;
    overflow: hidden;
    width: 0;
    transition: 300ms all ease;
  }
  &:hover > span {
    margin-left: 0px;
    width: 75px;
  }
  &:hover {
    transform: scale(1.1);
    padding: 15px 20px;
    margin-left: -75px;
    border: 10px solid #cff1c4;
  }
  &::before {
    position: absolute;
    z-index: -1;
    top: -10px;
    left: -10px;
    content: "";
    width: calc(100% + 20px);
    height: calc(100% + 20px);
    background-color: #5db543;
    border-radius: 50px;
    -webkit-animation: ping 3s ease-in-out infinite both;
    animation: ping 3s ease-in-out infinite both;
  }

  & > svg {
    margin-left: 10px;
  }
  @-webkit-keyframes ping {
    0% {
      -webkit-transform: scale(0.2);
      transform: scale(0.2);
      opacity: 1;
    }
    80% {
      -webkit-transform: scale(1.2);
      transform: scale(1.2);
      opacity: 0;
    }
    100% {
      -webkit-transform: scale(2.2);
      transform: scale(2.2);
      opacity: 0;
    }
  }
  @keyframes ping {
    0% {
      -webkit-transform: scale(0.2);
      transform: scale(0.2);
      opacity: 1;
    }
    80% {
      -webkit-transform: scale(1.2);
      transform: scale(1.2);
      opacity: 0;
    }
    100% {
      -webkit-transform: scale(2.2);
      transform: scale(2.2);
      opacity: 0;
    }
  }
`;
export { FooterMain, WhatsApp };
