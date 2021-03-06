import styled from 'styled-components';
import useComments from '../../../contexts/CommentsContext/useComments';
import { Comment as IComment, Reply as IReply } from '../../../types/Post';

type CommentUser = {
  displayName: string;
  avatar: string;
};

type CommentProps = {
  comment: IComment;
  user: CommentUser;
};

export default function Comment({
  comment: { id, text, createdAt, replys },
  user: { avatar, displayName }
}: CommentProps) {
  const { setCurrentReplies, setParentCommentInfo, setIsReplying } =
    useComments();

  return (
    <Container>
      <div className="comment">
        <img
          src={`http://localhost:3333/files/${avatar}`}
          alt={`Foto de perfil de ${displayName}`}
        />
        <div className="comment-details">
          <p className="comment-owner">{displayName}</p>
          <p className="comment-text">{text}</p>

          <div className="comment-actions">
            <span>19h</span>
            <span
              className="reply"
              onClick={() => {
                setCurrentReplies(replys);
                setParentCommentInfo({
                  id,
                  text,
                  createdAt,
                  owner: { avatar, displayName }
                });
                setIsReplying(true);
              }}
            >
              Responder
            </span>
          </div>
        </div>
      </div>
      {replys && replys.length > 0 && (
        <div
          className="comment-replys"
          onClick={() => {
            setCurrentReplies(replys);
            setParentCommentInfo({
              id,
              text,
              createdAt,
              owner: { avatar, displayName }
            });
            setIsReplying(true);
          }}
        >
          <p>Ver respostas ({replys.length})</p>
          <span className="material-icons show-replies">expand_more</span>
        </div>
      )}
    </Container>
  );
}

const Container = styled.div`
  margin: 1rem 1rem 1rem 1.2rem;
  display: flex;
  flex-direction: column;

  div.comment {
    display: flex;
  }

  div.comment-details {
    word-wrap: break-word;
    max-width: 100%;
    overflow-x: hidden;

    p.comment-owner {
      font-weight: 500;
    }

    p.comment-text {
      font-size: 1.4rem;
    }
  }

  div.comment-actions {
    display: flex;
    gap: 1rem;
    margin-top: 0.8rem;

    span {
      font-size: 1.2rem;
      color: gray;
    }

    span.reply {
      &:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }

  div.comment-replys {
    display: flex;
    margin: 0 auto;
    align-items: center;
    // TODO: change margintop when mobile

    &:hover {
      cursor: pointer;
    }

    p {
      font-size: 1.3rem;
      margin: auto;
      color: gray;
      cursor: pointer;
      font-weight: 500;

      &:hover {
        text-decoration: underline;
      }
    }

    span.show-replies {
      color: gray;
      font-size: 1.7rem;
      text-align: center;
      margin-left: 0.6rem;
    }
  }

  img {
    min-width: 4rem;
    max-width: 4rem;
    min-height: 4rem;
    max-height: 4rem;
    object-fit: cover;
    border-radius: 50%;
    margin-right: 1.2rem;
  }
`;
