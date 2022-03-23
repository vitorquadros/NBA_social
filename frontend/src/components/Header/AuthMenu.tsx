import styled from 'styled-components';

export default function AuthMenu() {
  return (
    <Container>
      <button>
        <p>Fazer login</p>
        <span className="material-icons">login</span>
      </button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;

  cursor: pointer;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    border-radius: 10px;
    padding: 0.6rem 1.5rem;
    background-color: #e56503;
    transition: 0.3s;
    cursor: pointer;
    gap: 0.6rem;

    &:hover {
      filter: brightness(80%);
    }

    p {
      font-size: 1.4rem;
    }
  }
`;
