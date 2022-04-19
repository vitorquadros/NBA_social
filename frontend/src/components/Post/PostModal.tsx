import { SyntheticEvent, useEffect, useState } from 'react';
import styled from 'styled-components';
import ReplyInput from './Comments/ReplyInput';
import UserInfo from './Comments/UserInfo';
import useModal from '../../contexts/ModalContext/useModal';
import Modal from '../Modal/Modal';
import {
  Comment as IComment,
  Post as IPost,
  Reply as IReply
} from '../../types/Post';
import useApi from '../../hooks/useApi';
import CommentsHandler from './Comments/CommentsHandler';
import useComments from '../../contexts/CommentsContext/useComments';

type PostModalProps = {
  post: IPost;
};

export default function PostModal({
  post: { createdAt, description, id, image, likes, updatedAt, user }
}: PostModalProps) {
  const {
    call,
    data: comments,
    setData: setComments,
    isLoading
  } = useApi<IComment[]>();

  const { setShowPostModal } = useModal();

  const { setIsReplying, setCurrentReplies, setParentCommentInfo } =
    useComments();

  const closeModal = (
    e: SyntheticEvent,
    modalRef: React.RefObject<HTMLDivElement>
  ) => {
    if (modalRef.current === e.target) {
      setShowPostModal('');
    }
  };

  useEffect(() => {
    call({
      url: `/posts/${id}/comments`,
      method: 'get'
    });

    return () => {
      setIsReplying(false);
      setCurrentReplies([]);
      setParentCommentInfo({});
    };
  }, []);

  return (
    <Modal
      closeModal={closeModal}
      closeButton={true}
      handleClose={() => setShowPostModal('')}
    >
      <ModalContent>
        <ImageContainer>
          <img
            src={`http://localhost:3333/files/${image}`}
            alt="Imagem do post"
          />
        </ImageContainer>

        <DetailsContainer>
          <UserInfo
            userInfo={{
              description,
              userAvatar: user.avatar,
              userDisplayName: user.displayName,
              userUsername: user.displayName,
              userNbaTeam: user.nbaTeam
            }}
          />
          {/* // TODO: scroll top when open comments */}
          <div className="comments">
            <CommentsHandler comments={comments} />
          </div>

          <ReplyInput setComments={setComments} postId={id} />
        </DetailsContainer>
      </ModalContent>
    </Modal>
  );
}

const ModalContent = styled.div`
  max-width: 80vw;
  max-height: 95vh;
  min-height: 95vh;
  display: flex;
  background-color: #fafafa;

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

    p.no-comments {
      text-align: center;
      font-size: 1.4rem;
      margin-top: 2rem;
      color: gray;
    }
  }
`;
