import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function Error404Page() {
  return (
    <Container>
      <h1>404</h1>
      <h2>Página não encontrada!</h2>
      <Link to="/">Voltar para a página inicial</Link>
    </Container>
  );
}

const Container = styled.div`
  min-width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    font-size: 8rem;
  }

  h2 {
    font-size: 4rem;
  }
`;
