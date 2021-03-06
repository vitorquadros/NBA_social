import styled from 'styled-components';
import useModal from '../../contexts/ModalContext/useModal';

export default function CreatePostMenu() {
  const { setShowCreatePostModal } = useModal();

  return (
    <Container onClick={() => setShowCreatePostModal(true)}>
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
    white-space: nowrap;

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

    @media screen and (max-width: 800px) {
      padding: 0.8rem 1rem;

      p {
        display: none;
      }
    }
  }
`;
