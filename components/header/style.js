import styled from "styled-components";

const Top = styled.header`
  padding: 3rem 0;
  display: flex;
  margin: 0;
  position: relative;
  z-index: 1000;

  &:before {
    content: "";
    z-index: -200;
    position: absolute;
    width: 320px;
    height: 213px;
    background-image: url("assets/img/leaves-2.png");
    background-size: 100%;
    background-repeat: no-repeat;
    left: -10rem;
    top: 10rem;
    transform: rotate(1deg);
    filter: contrast(50%) brightness(90%);
  }

  div.head {
    width: 100%;
    display: flex;
    max-width: 68.75rem;
    margin: 0 auto;
    position: relative;
    justify-content: space-between;

    .img:hover {
      cursor: pointer;
    }
  }

  .img-menu {
    z-index: -1;
    position: absolute;
    top: 0;
    width: 100%;
    height: 900px;
    filter: grayscale(100%);

    div.img-bg {
      position: absolute;
      width: 100%;
      height: 900px;
      background-image: url("/assets/img/crew.jpg");
      object-fit: cover;
    }
    .overlay {
      background: rgba(34, 34, 34, 0.95);
      color: var(--color-tex);
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
    }
  }

  section {
    align-items: center;
    display: flex;

    div.icon {
      margin-left: 3rem;
    }

    div.icon:last-child:hover {
      cursor: pointer;
    }

    div.background {
      position: absolute;
      right: 0;
      top: 50px;
      z-index: 3000;
      width: 100%;
      height: 100%;
    }
  }
`;

export { Top };
