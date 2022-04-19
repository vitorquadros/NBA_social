import styled from 'styled-components';
import useComments from '../../../contexts/CommentsContext/useComments';

export default function Reply() {
  const {
    setCurrentReplies,
    currentReplies,
    parentCommentInfo,
    setIsReplying,
    setParentCommentInfo
  } = useComments();

  return (
    <Container>
      <div
        className="back"
        onClick={() => {
          setCurrentReplies([]);
          setIsReplying(false);
          setParentCommentInfo({});
        }}
      >
        <span className="material-icons back">arrow_back</span>
        <p>Voltar aos comentários</p>
      </div>
      <div className="reply-parent">
        <img
          src={`http://localhost:3333/files/${parentCommentInfo.owner.avatar}`}
          alt=""
        />
        <div className="parent-comment-details">
          <p className="parent-comment-owner">
            {parentCommentInfo.owner.displayName}
          </p>
          <p className="parent-comment-text">{parentCommentInfo.text}</p>

          <div className="parent-comment-actions">
            <span>19h</span>
            <span className="reply">Responder</span>
          </div>
        </div>
      </div>
      {currentReplies && currentReplies.length > 0 ? (
        currentReplies.map((reply) => {
          return (
            <ReplyComment
              key={reply.id}
              replyInfo={{
                replyOwnerInfo: {
                  ownerAvatar: reply.owner.avatar,
                  ownerName: reply.owner.displayName
                },
                replyText: reply.text,
                replyTimeAgo: reply.createdAt
              }}
            />
          );
        })
      ) : (
        <p className="no-replies">O comentário ainda não tem respostas.</p>
      )}
    </Container>
  );
}

type ReplyOwnerInfo = {
  ownerAvatar: string;
  ownerName: string;
};

type ReplyInfo = {
  replyOwnerInfo: ReplyOwnerInfo;
  replyText: string;
  replyTimeAgo: string;
};

type ReplyCommentProps = {
  replyInfo: ReplyInfo;
};

function ReplyComment({
  replyInfo: { replyOwnerInfo, replyText, replyTimeAgo }
}: ReplyCommentProps) {
  return (
    <ContainerReply>
      <div className="reply">
        <img
          src={`http://localhost:3333/files/${replyOwnerInfo.ownerAvatar}`}
          alt={`Foto de perfil de ${replyOwnerInfo.ownerName}`}
        />
        <div className="reply-comment-details">
          <p className="reply-comment-owner">{replyOwnerInfo.ownerName}</p>
          <p className="reply-comment-text">{replyText}</p>

          <div className="reply-comment-actions">
            <span>19h</span>
          </div>
        </div>
      </div>
    </ContainerReply>
  );
}

const ContainerReply = styled.div`
  div.reply {
    display: flex;
  }

  margin: 1.6rem 1rem 0 calc(4rem + 1.2rem);

  div.reply-comment-details {
    p.reply-comment-owner {
      font-size: 1.4rem;
      font-weight: 500;
    }

    p.reply-comment-text {
      font-size: 1.4rem;
    }
  }

  div.reply-comment-actions {
    margin-top: 0;

    span {
      font-size: 1.2rem;
      color: gray;
    }
  }

  div.reply img {
    min-width: 3.5rem;
    max-width: 3.5rem;
    min-height: 3.5rem;
    max-height: 3.5rem;

    object-fit: cover;
    border-radius: 50%;
    margin-right: 1.2rem;
  }
`;

const Container = styled.div`
  margin: 0 1rem 2rem 1.2rem;
  display: flex;
  flex-direction: column;

  p.no-replies {
    color: gray;
    font-size: 1.3rem;
    text-align: center;
    margin-top: 2rem;
  }

  div.back {
    margin: 1rem 0;
    display: flex;
    align-items: center;
    color: gray;
    cursor: pointer;

    &:hover {
      p {
        text-decoration: underline;
      }
    }

    p {
      font-size: 1.2rem;
      margin-left: 1rem;
    }
  }

  div.reply-parent {
    display: flex;
  }

  div.parent-comment-details {
    p.parent-comment-owner {
      font-weight: 500;
    }

    p.parent-comment-text {
      font-size: 1.4rem;
    }
  }

  div.parent-comment-actions {
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

    p {
      font-size: 1.4rem;
      margin: auto;
      color: gray;
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
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
