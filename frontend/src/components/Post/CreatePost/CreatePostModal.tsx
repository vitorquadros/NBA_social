import { forwardRef, SyntheticEvent, useContext, useRef } from 'react';
import styled from 'styled-components';
import { ModalContext } from '../../../contexts/ModalContext';
import CloseModalPopup from '../Popup/CloseModalPopup';
import PostForm from './PostForm';

export default function CreatePostModal() {
  const { setShowCreatePostModal, image } = useContext(ModalContext);

  const modalRef = useRef<HTMLDivElement>(null);

  const closeModal = (e: SyntheticEvent) => {
    if (modalRef.current === e.target && !image) {
      setShowCreatePostModal(false);
    }
  };

  return (
    <>
      <Background onClick={closeModal} ref={modalRef}>
        <ModalWrapper>
          <ModalContent>
            <h1>Crie sua publicação</h1>
            {image ? (
              <CloseModalPopup
                trigger={
                  <span className="material-icons close-button">close</span>
                }
              />
            ) : (
              <span
                className="material-icons close-button"
                onClick={() => setShowCreatePostModal(false)}
              >
                close
              </span>
            )}

            <PostForm />
          </ModalContent>
        </ModalWrapper>
      </Background>
    </>
  );
}

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

  transition: scale 1s;

  animation: teste 0.3s;

  @keyframes teste {
    from {
      scale: 0%;
    }
    to {
      scale: 100%;
    }
  }
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
