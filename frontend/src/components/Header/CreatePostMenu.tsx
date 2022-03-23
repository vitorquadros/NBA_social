import { useContext } from 'react';
import styled from 'styled-components';
import { ModalContext } from '../../contexts/ModalContext';

export default function CreatePostMenu() {
  const { openCreatePostModal } = useContext(ModalContext);

  return (
    <Container onClick={openCreatePostModal}>
      <button>
        <span className="material-icons">add</span>
        <p>Novo Post</p>
      </button>
    </Container>
  );
}

const Container = styled.div`
  button {
    display: flex;
    align-items: center;
    font-size: 1.4rem;
    padding: 0.3rem 1rem;
    cursor: pointer;
    background-color: #e56503;
    border: 0;
    border-radius: 5px;
    gap: 0.5rem;
    transition: 0.3s;
    box-shadow: none;

    p {
      font-size: 1.4rem;
      font-weight: 500;
    }

    span {
      font-size: 2rem;
    }

    &:hover {
      filter: brightness(80%);
    }
  }
`;
