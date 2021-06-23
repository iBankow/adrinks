import styled from "styled-components";

const Footer = styled.section`
  margin-top: 30px;
  div.rodape {
    align-items: center;
    margin-left: auto;
    display: flex;
    div.info {
      margin-left: 80px;
    }
    div.icons {
      display: flex;
      .icon {
        margin-left: 1rem;
      }
    }
    div > span {
      font-size: 18px;
      color: #ffd659;
      font-weight: 900;
      line-height: 30px;
    }
    div > p {
      font-size: 16px;
      line-height: 25px;
      margin: 0;
    }
  }
`;

export { Footer };
