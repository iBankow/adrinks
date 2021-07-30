import styled from "styled-components";

export default function Index() {
  return (
    <Main>
      <section>
        <h1>Pagina não encontrada</h1>
      </section>
    </Main>
  );
}

const Main = styled.section`
  max-width: 1100px;
  margin: 0 auto;

  section {
    width: 100%;
    height: 30rem;
    background-color: var(--green);
  }
`;
