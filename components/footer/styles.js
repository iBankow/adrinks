import styled from "styled-components";
const FooterMain = styled.footer`
  padding: 5rem 0;
  align-items: center;

  .svg {
    filter: invert(1);
  }
  section {
    position: relative;
    .top {
      position: absolute;
      right: 0;
      top: -2rem;

      &:hover {
        cursor: pointer;
      }
    }
    border-top: solid 1px rgba(221, 221, 221, 1);
    height: 100%;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
    fill: black;

    a {
      font-family: Ubuntu;
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: 24px;
    }

    .container {
      padding: 3rem 0;
      display: flex;

      .links {
        margin-left: 5rem;
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 40rem;

        .icons {
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
      color: var(--color-text);
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
    }
  }
`;

const WhatsApp = styled.div`
  position: fixed;
  bottom: 230px;
  right: 397px;
  border-radius: 50px;
  background-color: #5db543;
  border: 0px solid transparent;
  color: #fff;
  padding: 20px;
  display: flex;
  z-index: 2400;
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
