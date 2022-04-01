import { useContext } from 'react';
import styled from 'styled-components';
import { CommentsContext } from '../../../contexts/CommentsContext';

export default function Reply() {
  const { isReply, setIsReply } = useContext(CommentsContext);

  return (
    <Container>
      <div className="back" onClick={() => setIsReply(!isReply)}>
        <span className="material-icons back">arrow_back</span>
        <p>Voltar aos comentários</p>
      </div>
      <div className="reply-parent">
        <img
          src="https://www.morganstanley.com/content/dam/msdotcom/people/tiles/isaiah-dwuma.jpg.img.380.medium.jpg/1594668408164.jpg"
          alt=""
        />
        <div className="parent-comment-details">
          <p className="parent-comment-owner">Roberto Dias</p>
          <p className="parent-comment-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
            ipsam.
          </p>

          <div className="parent-comment-actions">
            <span>19h</span>
            <span className="reply">Responder</span>
          </div>
        </div>
      </div>
      <ReplyComment />
      <ReplyComment />
      <ReplyComment />
      <ReplyComment />
      <ReplyComment />
      <ReplyComment />
      <ReplyComment />
      <ReplyComment />
    </Container>
  );
}

function ReplyComment() {
  return (
    <ContainerReply>
      <div className="reply">
        <img
          src="https://www.morganstanley.com/content/dam/msdotcom/people/tiles/isaiah-dwuma.jpg.img.380.medium.jpg/1594668408164.jpg"
          alt=""
        />
        <div className="reply-comment-details">
          <p className="reply-comment-owner">Roberto Dias</p>
          <p className="reply-comment-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
            ipsam.
          </p>

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
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    margin-right: 1.2rem;
  }
`;

const Container = styled.div`
  margin: 0 1rem 2rem 1.2rem;
  display: flex;
  flex-direction: column;

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
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    margin-right: 1.2rem;
  }
`;
