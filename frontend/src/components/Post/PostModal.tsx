import { MutableRefObject, SyntheticEvent, useRef, useState } from 'react';
import Popup from 'reactjs-popup';
import styled from 'styled-components';
import PostForm from './PostForm';

type ModalProps = {
  showModal: boolean;
  setShowModal: (state: boolean) => void;
};

export default function PostModal({ showModal, setShowModal }: ModalProps) {
  const modalRef = useRef<HTMLInputElement>(null);

  const closeModal = (e: SyntheticEvent) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  return (
    <>
      {showModal ? (
        <Background ref={modalRef} onClick={closeModal}>
          <ModalWrapper>
            <ModalContent>
              <h1>Crie sua publicação</h1>
              <Popup
                modal
                trigger={
                  <span className="material-icons close-button">close</span>
                }
              >
                {(close: () => void) => (
                  <CloseModal className="close-modal">
                    <p>Tem certeza?</p>
                    <p>Os campos preenchidos serão perdidos</p>
                    <div className="close-modal-buttons">
                      <button
                        onClick={() => {
                          setShowModal(false);
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

              <PostForm setShowModal={setShowModal} />
            </ModalContent>
          </ModalWrapper>
        </Background>
      ) : null}
    </>
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

// const Container = styled.div`
//   width: 50%;
//   height: 8rem;
//   margin: 0 auto;

//   input {
//     width: 100%;
//     box-sizing: border-box;
//     padding-left: 0.5rem;
//   }
// `;

const Background = styled.div`
  width: 100%;
  z-index: 100;
  left: 0;
  top: 0;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  width: 70rem;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: #fafafa;
  color: #000;
  border-radius: 10px;
`;

const ModalContent = styled.div`
  width: 100%;
  margin: 2rem;
  text-align: center;
  position: relative;

  h1 {
    color: rgb(229, 101, 3);
    font-size: 2rem;
  }

  span.close-button {
    position: absolute;
    right: 1rem;
    top: -1.2rem;
    cursor: pointer;
  }
`;
