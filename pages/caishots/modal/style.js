import styled from "styled-components";

const colors = {
  green: "#33cc95",
  red: "#e52e4d",
};

export const Container = styled.div`
  width: 80%;
  height: 80rem;
  background-color: black;
  z-index: 2000;
  position: fixed;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  margin-right: -50%;
  transform: translate(-50%, -50%);
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  h2 {
    margin-bottom: 2rem;
    font-size: 1.5rem;
    color: var(--text-title);
  }
  input {
    margin: 1rem auto;
    outline: none;
    font-size: 16px;
    width: 80%;
    height: 3rem;
    border-radius: 0.5rem;
    border-bottom: solid 4px #91a63c;

    &:focus {
      border-bottom: solid 4px var(--yellow);
    }

    &::placeholder {
      transform: translateX(1rem);
      font-size: 16px;
      font-weight: 400;
      line-height: 26px;
      color: --text-light;
    }
  }
  button[type="submit"] {
    margin-top: 1.5rem;
    padding: 0 1.5rem;
    width: 100%;
    height: 4rem;
    font-size: 1rem;
    font-weight: 600;
    color: #ffffff;
    background: var(--green);
    border: 0;
    border-radius: 0.25rem;
    transition: filter 0.2s ease-in-out;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  margin: 1rem 0;
`;

// export const RadioBox =
//   styled.button <
//   RadioBoxProps >
//   `
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   height: 4rem;
//   background: ${({ isActive, activeColor }) =>
//     isActive ? transparentize(0.9, colors[activeColor]) : "transparent"};
//   border: 1px solid #d7d7d7;
//   border-radius: 0.25rem;
//   transition: border-color 0.2s ease-in-out;
//   &:hover {
//     border-color: ${darken(0.1, "#d7d7d7")};
//   }
//   img {
//     width: 20px;
//     height: 20px;
//   }
//   span {
//     display: block;
//     margin-left: 1rem;
//     font-size: 1rem;
//     color: var(--text-title);
//   }
// `;
