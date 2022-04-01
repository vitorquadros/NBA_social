import { ReactComponentElement, ReactNode, useContext } from 'react';
import Popup from 'reactjs-popup';
import styled from 'styled-components';
import { ModalContext } from '../../../contexts/ModalContext';

type CloseModalPopupProps = {
  trigger: JSX.Element;
};

export default function CloseModalPopup({ trigger }: CloseModalPopupProps) {
  const { setShowCreatePostModal, setImage } = useContext(ModalContext);

  return (
    <Popup modal trigger={trigger}>
      {(close: () => void) => (
        <CloseModal>
          <p className="warning-confirm">Tem certeza?</p>
          <p className="warning-message">
            Os campos preenchidos serão perdidos
          </p>
          <div className="close-modal-buttons">
            <button
              onClick={() => {
                setShowCreatePostModal(false); // @ts-ignore
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
  margin: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 30rem;
  min-height: 15rem;
  border: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
  background-color: #fafafa;
  border-radius: 5px;
  padding: 1rem 2rem;

  div.close-modal-buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 2rem;
    gap: 1rem;
  }

  text-align: center;

  p.warning-confirm {
    font-weight: 600;
  }

  p.warning-message {
    margin: 0 1.6rem;
    color: black;
    font-weight: 400;
  }

  button {
    margin: 0 1rem;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background-color: rgb(251, 111, 4);

    border: 0;
    border-radius: 4px;
    font-weight: 500;
    transition: 0.5s;
    &:hover {
      filter: brightness(80%);
    }
  }

  button:first-child {
    background-color: rgb(176, 78, 3);
  }

  @media screen and (max-width: 424px) {
    padding: 1rem 1rem;

    p.warning-message {
      margin: 0;
    }
  }
`;
