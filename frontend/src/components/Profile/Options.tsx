import styled from 'styled-components';

export default function Options() {
  return (
    <Container className="options">
      <button>
        <span className="material-icons">edit</span>
        <p>Editar perfil</p>
      </button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-self: flex-end;
  margin: 2rem 2rem 0 0;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    border-radius: 10px;
    padding: 1rem 2rem;
    background-color: #e56503;
    transition: 0.3s;
    cursor: pointer;

    &:hover {
      filter: brightness(80%);
    }

    span {
      margin-right: 0.8rem;
    }
  }
`;
