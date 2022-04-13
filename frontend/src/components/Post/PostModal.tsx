import { SyntheticEvent, useContext, useRef, useState } from 'react';
import styled from 'styled-components';
import Comment from './Comments/Comment';
import ReplyInput from './Comments/ReplyInput';
import UserInfo from './Comments/UserInfo';
import Reply from './Comments/Reply';
import useModal from '../../contexts/ModalContext/useModal';
import Modal from '../Modal/Modal';

export default function PostModal() {
  const { setShowPostModal } = useModal();
  const [isReply, setIsReply] = useState<boolean>(false);

  const closeModal = (
    e: SyntheticEvent,
    modalRef: React.RefObject<HTMLDivElement>
  ) => {
    if (modalRef.current === e.target) {
      setShowPostModal('');
    }
  };

  return (
    <Modal closeModal={closeModal}>
      <ModalContent>
        <ImageContainer>
          <img
            src="https://cdn.vox-cdn.com/thumbor/MEjeG_iclwwPEiY7NlqMaGGa75g=/0x0:1080x1350/1200x0/filters:focal(0x0:1080x1350):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/22541812/_National_3_52621.jpg"
            alt=""
          />
        </ImageContainer>

        <DetailsContainer>
          <UserInfo />
          {/* // TODO: scroll top when open comments */}
          <div className="comments">
            {isReply ? (
              <Reply setIsReply={setIsReply} />
            ) : (
              <>
                <Comment setIsReply={setIsReply} />
                <Comment setIsReply={setIsReply} />
                <Comment setIsReply={setIsReply} />
                <Comment setIsReply={setIsReply} />
                <Comment setIsReply={setIsReply} />
                <Comment setIsReply={setIsReply} />
                <Comment setIsReply={setIsReply} />
                <Comment setIsReply={setIsReply} />
                <Comment setIsReply={setIsReply} />
                <Comment setIsReply={setIsReply} />
                <Comment setIsReply={setIsReply} />
                <Comment setIsReply={setIsReply} />
                <Comment setIsReply={setIsReply} />
                <Comment setIsReply={setIsReply} />
                <Comment setIsReply={setIsReply} />
                <Comment setIsReply={setIsReply} />
                <Comment setIsReply={setIsReply} />
                <Comment setIsReply={setIsReply} />
                <Comment setIsReply={setIsReply} />
                <Comment setIsReply={setIsReply} />
              </>
            )}
          </div>

          <ReplyInput />
        </DetailsContainer>
      </ModalContent>
    </Modal>

    // <Background onClick={closeModal} ref={modalRef}>
    //   <ModalWrapper>
    // <ModalContent>
    //   <ImageContainer>
    //     <img
    //       src="https://cdn.vox-cdn.com/thumbor/MEjeG_iclwwPEiY7NlqMaGGa75g=/0x0:1080x1350/1200x0/filters:focal(0x0:1080x1350):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/22541812/_National_3_52621.jpg"
    //       alt=""
    //     />
    //   </ImageContainer>

    //   <DetailsContainer>
    //     <UserInfo />
    //     {/* // TODO: scroll top when open comments */}
    //     <div className="comments">
    //       {isReply ? (
    //         <Reply />
    //       ) : (
    //         <>
    //           <Comment />
    //           <Comment />
    //           <Comment />
    //           <Comment />
    //           <Comment />
    //           <Comment />
    //           <Comment />
    //           <Comment />
    //           <Comment />
    //           <Comment />
    //           <Comment />
    //           <Comment />
    //           <Comment />
    //         </>
    //       )}
    //     </div>

    //     <ReplyInput />
    //   </DetailsContainer>
    // </ModalContent>
    //   </ModalWrapper>
    // </Background>
  );
}

const ModalContent = styled.div`
  max-width: 80vw;
  max-height: 90vh;
  display: flex;
  background-color: pink;

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

const ImageContainer = styled.div`
  background-color: black;
  display: flex;
  max-width: 60%;
  min-height: 100%;
  max-height: 100%;
  align-items: center;
  justify-content: center;

  img {
    max-width: 100%;
    height: auto;
    max-height: 90vh;
  }
`;

const DetailsContainer = styled.div`
  height: auto;
  max-width: 40%;
  max-height: 100%;
  display: flex;
  flex-direction: column;

  div.comments {
    width: 100%;
    overflow-y: auto;
    height: auto;
    max-height: 100%;
    /* max-height: calc(
      100% - 8.3rem - 5rem
    ); */
  }
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
  min-width: 50%;
  max-width: 75%;
  max-height: 90vh;
  background-color: #fafafa;
  background-color: red;

  display: flex;

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
