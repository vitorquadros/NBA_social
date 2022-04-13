import styled from 'styled-components';
import useModal from '../../../contexts/ModalContext/useModal';

type ClosePopup = {
  setPopup: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  message: string;
};

export default function CloseModalPopup({
  setPopup,
  title,
  message
}: ClosePopup) {
  const { setShowCreatePostModal } = useModal();

  return (
    <Modal onClick={() => setPopup(false)}>
      <Content>
        <h3 className="title">{title}</h3>
        <p className="message">{message}</p>
        <div className="buttons">
          <button
            className="close"
            onClick={() => {
              setPopup(false);
              setShowCreatePostModal(false);
            }}
          >
            Fechar mesmo assim
          </button>
          <button onClick={() => setPopup(false)}>Voltar</button>
        </div>
      </Content>
    </Modal>
  );
}

const Content = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border-radius: 5px;
  max-width: 40rem;
  word-wrap: break-word;

  animation: openModal 0.3s;

  @keyframes openModal {
    from {
      scale: 0%;
    }
    to {
      scale: 100%;
    }
  }

  div.buttons {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 2rem;
    align-items: center;

    button {
      cursor: pointer;
      background-color: rgb(251, 111, 4);
      border: 0;
      border-radius: 5px;
      padding: 0.5rem;
      width: 100%;

      transition: 0.5s;
      &:hover {
        filter: brightness(80%);
      }
    }

    button.close {
      background: none;
      width: fit-content;
      padding: 0.3rem 0.8rem;
      text-decoration: underline;
    }
  }
`;

const Modal = styled.div`
  z-index: 1000;
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.6);

  display: flex;
  align-items: center;
  justify-content: center;
`;
