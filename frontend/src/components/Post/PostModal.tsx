import { SyntheticEvent, useContext, useRef } from 'react';
import styled from 'styled-components';
import { ModalContext } from '../../contexts/ModalContext';
import Comment from './Comments/Comment';
import ReplyInput from './Comments/ReplyInput';
import UserInfo from './Comments/UserInfo';
import Reply from './Comments/Reply';
import { CommentsContext } from '../../contexts/CommentsContext';

export default function PostModal() {
  const { setShowPostModal } = useContext(ModalContext);
  const { isReply } = useContext(CommentsContext);

  const modalRef = useRef<HTMLDivElement>(null);

  const closeModal = (e: SyntheticEvent) => {
    if (modalRef.current === e.target) {
      setShowPostModal(false);
    }
  };

  return (
    <Background onClick={closeModal} ref={modalRef}>
      <ModalWrapper>
        <ModalContent>
          <ImageContainer>
            <img src="https://wallpaper.dog/large/635907.jpg" alt="" />
          </ImageContainer>

          <DetailsContainer>
            <UserInfo />
            {/* // TODO: scroll top when open comments */}
            <div className="comments">
              {isReply ? (
                <Reply />
              ) : (
                <>
                  <Comment />
                  <Comment />
                  <Comment />
                  <Comment />
                  <Comment />
                  <Comment />
                </>
              )}
            </div>

            <ReplyInput />
          </DetailsContainer>
        </ModalContent>
      </ModalWrapper>
    </Background>
  );
}

const ModalContent = styled.div`
  display: flex;
  max-width: 100%;
  max-height: 80vh;
`;

const ImageContainer = styled.div`
  max-width: 60%;

  img {
    min-width: 100%;
    max-width: 100%;
    height: auto;
    min-height: 100%;
    max-height: 100%;
  }
`;

const DetailsContainer = styled.div`
  max-width: 40%;
  height: auto;
  max-height: 100%;
  display: flex;
  flex-direction: column;

  div.comments {
    overflow-y: scroll;
    max-height: calc(
      100% - 8.3rem - 5rem
    ); // modal header is always 83px and comment input is always 50px
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
  width: auto;
  max-width: 70vw;

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
