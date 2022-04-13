import { forwardRef, SyntheticEvent, useRef } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

type ModalProps = {
  children: JSX.Element;
  closeModal: (
    e: SyntheticEvent,
    modalRef: React.RefObject<HTMLDivElement>
  ) => void;
  closeButton?: boolean;
  handleClose?: () => void;
};

export default function Modal({
  children,
  closeModal,
  closeButton = false,
  handleClose
}: ModalProps) {
  const portalRoot = document.getElementById('portal') as Element;

  const modalRef = useRef<HTMLDivElement>(null);

  return createPortal(
    <Background ref={modalRef} onClick={(e) => closeModal(e, modalRef)}>
      <>
        {closeButton && handleClose && (
          <span
            className="material-icons close-modal-button"
            onClick={handleClose}
          >
            close
          </span>
        )}

        {children}
      </>
    </Background>,
    portalRoot
  );
}

const Background = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.7);

  span.close-modal-button {
    font-size: 2rem;
    position: absolute;
    right: 1rem;
    top: 1rem;
    color: white;
    cursor: pointer;
    background-color: red;
    border-radius: 50%;
    padding: 0.2rem;
    text-align: center;
  }
`;
