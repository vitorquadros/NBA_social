import { useContext } from 'react';
import styled from 'styled-components';
import { ModalContext } from '../../contexts/ModalContext';

export default function AuthMenu() {
  const { openAuthModal } = useContext(ModalContext);

  return (
    <Container onClick={openAuthModal}>
      <button>
        <p>Login</p>
        <span className="material-icons">login</span>
      </button>
    </Container>
  );
}

const Container = styled.div`
  margin-right: 1rem;
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
