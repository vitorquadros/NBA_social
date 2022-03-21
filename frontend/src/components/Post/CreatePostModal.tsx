import { SyntheticEvent, useContext, useRef } from 'react';
import { ModalContext } from '../../contexts/ModalContext';
import Modal from './Modal';
import CloseModalPopup from './Popup/CloseModalPopup';

export default function PostModal() {
  const { showModal } = useContext(ModalContext);

  return (
    <>
      {showModal ? (
        <>
          <Modal />
        </>
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
