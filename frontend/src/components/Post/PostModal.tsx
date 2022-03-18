import { MutableRefObject, SyntheticEvent, useRef, useState } from 'react';
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
              <span
                className="material-icons close-button"
                onClick={() => setShowModal(false)}
              >
                close
              </span>

              <PostForm setShowModal={setShowModal} />
            </ModalContent>
          </ModalWrapper>
        </Background>
      ) : null}
    </>
  );
}

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
