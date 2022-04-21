import styled from 'styled-components';
import useModal from '../../../contexts/ModalContext/useModal';

export default function EmailSent({ email }: { email: string }) {
  const { setShowAuthModal } = useModal();

  return (
    <Container>
      <span className="material-icons icon">mark_email_read</span>
      <p>
        Um email foi enviado para <span>{email}</span> com um link para a
        finalização do cadastro
      </p>
      <button onClick={() => setShowAuthModal(false)}>OK</button>
    </Container>
  );
}

const Container = styled.div`
  margin: 1rem 2rem;
  max-width: 35rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;

  span.icon {
    font-size: 10rem;
  }

  p {
    text-align: center;
  }

  p span {
    font-weight: 600;
  }

  button {
    margin: 1rem 0;
    width: 100%;
    max-width: 10rem;
    padding: 0.5rem 1rem;
    cursor: pointer;
    background-color: #e56503;
    border: 0;
    border-radius: 5px;
    transition: 0.3s;

    &:hover {
      filter: brightness(80%);
    }
  }
`;
