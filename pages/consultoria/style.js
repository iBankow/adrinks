import styled from "styled-components";

const Head = styled.section`
  position: relative;
  overflow-x: hidden;

  &:before {
    content: "";
    position: absolute;
    width: 320px;
    height: 213px;
    background-image: url("assets/img/leaves-2.png");
    background-size: 100%;
    background-repeat: no-repeat;
    right: -5rem;
    top: 50rem;
    transform: rotate(270deg);
    filter: blur(7px) contrast(70%);
  }

  div.container {
    max-width: 68.75rem;
    margin: 6rem auto 0 auto;

    h1 {
      font-family: SantElia;
      font-size: 120px;
      font-style: normal;
      font-weight: 700;
      line-height: 161px;
      margin-bottom: 10px;
    }

    div.content {
      display: flex;
      flex-direction: row;
      margin: 0;
      justify-content: space-between;
      position: relative;
      &:before {
        content: "";
        position: absolute;
        width: 395px;
        height: 395px;
        background-image: url("assets/img/ellipse.svg");
        background-size: 100%;
        background-repeat: no-repeat;
        right: 18rem;
        top: 5rem;
        transform: rotate(270deg);
      }
      &:after {
        content: "";
        position: absolute;
        width: 170px;
        height: 170px;
        background-image: url("assets/img/dots.svg");
        background-size: 100%;
        background-repeat: no-repeat;
        right: 5rem;
        top: 20rem;
        transform: rotate(270deg);
      }
      div.info {
        p {
          font-size: 22px;
          font-style: normal;
          font-weight: 800;
          line-height: 31px;
          color: var(--green);
          width: 361px;
          margin-bottom: 2rem;
        }

        button {
          margin-top: 1rem;
          background-color: #61821f;
          width: 252px;
          height: 55px;
          border-radius: 70px;

          font-weight: 700;
          color: white;
          font-size: 20px;
          line-height: 24px;
          letter-spacing: 0.1em;
        }
      }
      div.image-container {
        max-width: 597px;
        height: 355px;
        border-radius: 100px 0px;
        position: relative;

        &:after {
          content: "";
          position: absolute;
          width: 320px;
          height: 213px;
          background-image: url("assets/img/leaves.png");
          background-size: 100%;
          background-repeat: no-repeat;
          left: 25rem;
          bottom: 15rem;
        }
        &:before {
          z-index: 1;
          content: "";
          position: absolute;
          width: 413px;
          height: 275px;
          background-image: url("assets/img/leaves.png");
          background-size: 100%;
          background-repeat: no-repeat;
          top: 15rem;
          left: -8rem;
          filter: blur(3px);
          transform: rotate(120.75deg);
        }
        .img {
          max-width: 597px;
          height: 355px;
          border-radius: 100px 0px;
        }
      }
    }
  }
  section.services {
    justify-content: space-between;
    position: relative;
    max-width: 68.75rem;
    margin: 3rem auto 0 auto;
    width: 100%;
    height: 680px;
    border-radius: 0px 200px 20px 20px;
    align-items: center;

    h2 {
      padding-top: 5rem;
      font-size: 30px;
      font-style: normal;
      font-weight: 800;
      line-height: 42px;
      letter-spacing: 0em;
      color: rgba(51, 51, 51, 1);
    }

    p {
      font-size: 16px;
      padding: 1rem 0;

      font-style: normal;
      font-weight: 400;
      line-height: 26px;
      color: rgba(112, 112, 112, 1);
    }

    .services-title {
      justify-content: center;
      margin: 0 auto;
      text-align: start;
    }
    .services-container {
      padding: 5rem 0 0 0;
      justify-items: center;
      text-align: center;
      display: grid;
      grid-gap: 5rem;
      grid-template-columns: 1fr 1fr;

      .service-content {
        justify-content: space-around;
        width: 100%;
        align-items: center;
        display: flex;
        text-align: left;
        width: 485px;
        height: 142px;
        border-radius: 20px;
        background: rgba(145, 166, 60, 0.05);
        div.info {
          width: 300px;

          p {
            padding: 0;
          }
        }
      }

      h3 {
        color: rgba(34, 34, 34, 1);
        font-size: 24px;
        line-height: 38px;
      }
    }
  }
`;

export { Head };
