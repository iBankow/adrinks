import styled from "styled-components";

const Menu = styled.nav`
  z-index: 100;
  cursor: initial;
  list-style: none;
  text-align: right;
  color: #fff;
  height: 1000px;
  width: 1100px;
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
        color: #ffd659;
        cursor: pointer;
      }
      p {
        font-size: 16px;
        line-height: 26px;
      }
    }
  }
`;

export { Menu };
