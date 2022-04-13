import { SyntheticEvent, useState } from 'react';
import styled from 'styled-components';
import useModal from '../../contexts/ModalContext/useModal';
import Modal from '../Modal/Modal';
import LoginForm from './Login/LoginForm';
import RegisterForm from './Register/RegisterForm';

export default function AuthModal() {
  const { setShowAuthModal } = useModal();

  const [isRegister, setIsRegister] = useState<boolean>(false);

  const closeModal = (
    e: SyntheticEvent,
    modalRef: React.RefObject<HTMLDivElement>
  ) => {
    if (modalRef.current === e.target) {
      setShowAuthModal(false);
      setIsRegister(false);
    }
  };

  return (
    <Modal closeModal={closeModal}>
      <ModalContent>
        {isRegister ? (
          <RegisterForm isRegister={isRegister} setIsRegister={setIsRegister} />
        ) : (
          <LoginForm isRegister={isRegister} setIsRegister={setIsRegister} />
        )}
      </ModalContent>
    </Modal>
  );
}

const ModalContent = styled.div`
  display: flex;
  align-items: center;

  justify-content: center;

  background-color: white;

  border-radius: 10px;

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
