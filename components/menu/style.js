import styled from "styled-components";

const Menu = styled.nav`
  z-index: 100;
  cursor: initial;
  list-style: none;
  text-align: right;
  color: ${(props) => props.theme.colors.textWhite};
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
        color: ${(props) => props.theme.colors.primary};
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
