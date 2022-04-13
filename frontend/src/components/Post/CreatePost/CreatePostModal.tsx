import { SyntheticEvent, useContext, useRef, useState } from 'react';
import styled from 'styled-components';
import useModal from '../../../contexts/ModalContext/useModal';
import Modal from '../../Modal/Modal';
import ClosePopup from '../Popup/ClosePopup';
import PostForm from './PostForm';

export default function CreatePostModal() {
  const { setShowCreatePostModal } = useModal();
  const [image, setImage] = useState<string | FileList>('');
  const [popup, setPopup] = useState<boolean>(false);

  const closeModal = (
    e: SyntheticEvent,
    modalRef: React.RefObject<HTMLDivElement>
  ) => {
    if (modalRef.current === e.target && !image) {
      setShowCreatePostModal(false);
    } else if (modalRef.current === e.target && image) {
      setPopup(true);
    }
  };

  return (
    <Modal closeModal={closeModal}>
      <ModalContent>
        <h1>Crie sua publicação</h1>

        {popup && image ? (
          <ClosePopup
            setPopup={setPopup}
            title="Tem certeza?"
            message="Os campos preenchidos serão perdidos"
          />
        ) : image ? (
          <span
            className="material-icons close-button"
            onClick={() => setPopup(true)}
          >
            close
          </span>
        ) : (
          <span
            className="material-icons close-button"
            onClick={() => setShowCreatePostModal(false)}
          >
            close
          </span>
        )}

        <PostForm image={image} setImage={setImage} />
      </ModalContent>
    </Modal>
  );
}

const ModalContent = styled.div`
  width: 100%;
  margin: 2rem;
  text-align: center;
  background-color: #fff;
  width: 60rem;
  max-width: 70rem;
  max-height: 90vh;
  padding: 2rem 1rem;
  border-radius: 10px;
  position: relative;

  max-height: 100%;

  h1 {
    color: rgb(229, 101, 3);
    font-size: 2rem;
  }

  span.close-button {
    position: absolute;
    right: 1rem;
    top: 1rem;
    cursor: pointer;
  }

  animation: scaleIn 0.3s;

  @keyframes scaleIn {
    from {
      scale: 0%;
    }
    to {
      scale: 100%;
    }
  }
`;
