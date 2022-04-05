import { SyntheticEvent, useContext, useRef } from 'react';
import styled from 'styled-components';
import { ModalContext } from '../../contexts/ModalContext';
import LoginForm from './Login/LoginForm';
import RegisterForm from './Register/RegisterForm';

export default function AuthModal() {
  const { setShowAuthModal, isRegister, setIsRegister } =
    useContext(ModalContext);

  const modalRef = useRef<HTMLDivElement>(null);

  const closeModal = (e: SyntheticEvent) => {
    if (modalRef.current === e.target) {
      setShowAuthModal(false);
      setIsRegister(false);
    }
  };

  return (
    <Background onClick={closeModal} ref={modalRef}>
      <ModalWrapper>
        <ModalContent>
          {/* // TODO: Register condition */}
          {/* // TODO: modal's background opacity */}
          {isRegister ? <RegisterForm /> : <LoginForm />}
        </ModalContent>
      </ModalWrapper>
    </Background>
  );
}

const ModalContent = styled.div`
  display: flex;
  max-width: 100%;
  max-height: 80vh;
  align-items: center;
`;

const Background = styled.div`
  width: 100%;
  z-index: 100;
  left: 0;
  top: 0;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  width: auto;
  max-width: 80%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: #fafafa;
  color: #000;
  border-radius: 10px;

  animation: openModal 0.3s;

  @keyframes openModal {
    from {
      scale: 0%;
    }
    to {
      scale: 100%;
    }
  }
`;
