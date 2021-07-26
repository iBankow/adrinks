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
      color: ${(props) => props.theme.colors.primary};
      font-weight: 900;
      line-height: 30px;
    }
    div > p {
      font-size: 16px;
      line-height: 25px;
      margin: 0;
    }
  }

  @media (max-width: 500px) {
    div.rodape {
      justify-content: space-around;
      align-items: center;
      display: flex;
      div.info {
        margin: 0 15px;
      }
      div.icons {
        margin-right: 15px;
        display: flex;
        .icon {
          margin-left: 1rem;
        }
      }
      div > span {
        font-size: 18px;
        font-weight: 900;
        line-height: 30px;
      }
      div > p {
        font-size: 1rem;
        line-height: 25px;
        margin: 0;
      }
    }
  }
`;

export { Footer };
