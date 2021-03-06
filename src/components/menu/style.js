import styled from "styled-components";

const Menu = styled.nav`
  z-index: 1000;
  cursor: initial;
  list-style: none;
  text-align: right;
  color: #fff;
  height: 1000px;
  position: relative;
  a,
  span {
    font-size: 30px;
    line-height: 40px;
    font-weight: 900;
  }

  ul {
    margin-top: 3rem;
    li {
      display: flex;
      flex-direction: column;
      padding: 1.5rem 0;

      transition: color 200ms ease-in-out;

      &:hover {
        color: ${(props) =>
          props.theme.title === "dark" ? "#2546F0" : "#ffd659"};
        cursor: pointer;
      }
      p {
        font-size: 16px;
        line-height: 26px;
      }
    }
  }

  @media (max-width: 500px) {
    cursor: initial;
    text-align: right;
    height: 750px;
    position: relative;

    ul {
      margin-top: 1rem;
      margin-right: 0.5rem;
    }
  }
`;

export { Menu };
