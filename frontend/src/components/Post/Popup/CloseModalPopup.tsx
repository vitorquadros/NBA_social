import { ReactComponentElement, ReactNode, useContext } from 'react';
import Popup from 'reactjs-popup';
import styled from 'styled-components';
import { ModalContext } from '../../../contexts/ModalContext';

type CloseModalPopupProps = {
  trigger: JSX.Element;
};

export default function CloseModalPopup({ trigger }: CloseModalPopupProps) {
  const { setShowModal, setImage } = useContext(ModalContext);

  return (
    <Popup modal trigger={trigger}>
      {(close: () => void) => (
        <CloseModal className="close-modal">
          <p>Tem certeza?</p>
          <p>Os campos preenchidos serão perdidos</p>
          <div className="close-modal-buttons">
            <button
              onClick={() => {
                setShowModal(false); // @ts-ignore
                setImage('');
                close();
              }}
            >
              Fechar mesmo assim
            </button>
            <button onClick={() => close()}>Voltar</button>
          </div>
        </CloseModal>
      )}
    </Popup>
  );
}

const CloseModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 30rem;
  min-height: 15rem;
  border: 1px solid black;
  background-color: #fafafa;
  border-radius: 5px;
  padding: 1rem 2rem;

  div.close-modal-buttons {
    margin-top: 2rem;
  }

  p {
    margin: 0 1.6rem;
    color: black;
    font-weight: 600;
  }

  button {
    margin: 0 1rem;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background-color: rgb(251, 111, 4);

    border: 0;
    border-radius: 4px;
    font-weight: bold;
    transition: 0.5s;
    &:hover {
      filter: brightness(80%);
    }
  }

  button:first-child {
    background-color: rgb(176, 78, 3);
  }
`;
