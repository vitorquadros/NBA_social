import { useEffect, useState } from 'react';
import styled from 'styled-components';
import PostModal from './PostModal';
import moment from 'moment';
import 'moment/locale/br';
import useModal from '../../contexts/ModalContext/useModal';
import { Post as IPost } from '../../types/Post';

type PostProps = {
  post: IPost;
};

export default function Post({
  post: { id, comments, description, image, user, likes, createdAt }
}: PostProps) {
  const { showPostModal, setShowPostModal } = useModal();
  const [showMore, setShowMore] = useState(false);
  moment.locale('br');

  const localDate = moment
    .utc(createdAt)
    .subtract(3, 'hours')
    .local()
    .format('YYYY-MM-DD HH:mm:ss');

  const fromNow = moment(localDate).fromNow();

  // console.log(moment.locales());

  useEffect(() => {
    if (showPostModal) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'unset';
    }
  }, [showPostModal]);

  return (
    <Container>
      {showPostModal && showPostModal === id && <PostModal />}
      <PostInfo>
        <UserContainer>
          <div className="user-info-wrapper">
            <img
              src={`http://localhost:3333/files/${user.avatar}`}
              alt={`Foto de perfil de ${user.displayName}`}
            />
            <div className="user-info">
              <p className="displayname">{user.displayName}</p>
              <p className="username">@{user.username}</p>
            </div>
          </div>

          {user.nbaTeam && (
            <img
              className="team"
              src={`http://localhost:3333/files/teams/${user.nbaTeam}.png`}
              alt={`Logo do ${user.nbaTeam}`}
              title={`Torcedor do ${user.nbaTeam}`}
            />
          )}
        </UserContainer>

        <DescriptionContainer>
          {showMore ? (
            <p>{description}</p>
          ) : (
            <p>{`${description.substring(0, 200)}`}</p>
          )}
          {description.length > 200 && (
            <span onClick={() => setShowMore(!showMore)}>
              {showMore ? 'Mostrar menos' : 'Mostrar mais'}
            </span>
          )}
        </DescriptionContainer>
      </PostInfo>
      {/* // FIX: border */}
      <ImageContainer onClick={() => setShowPostModal(id)}>
        <img
          src={`http://localhost:3333/files/${image}`}
          alt={`Imagem do post de ${user.displayName}`}
        />
      </ImageContainer>
      <ActionsContainer>
        <div className="actions">
          <div className="like">
            <img
              src="https://cdn.iconscout.com/icon/free/png-256/basketball-2062459-1740039.png"
              alt=""
            />
            <p>Curtir</p>
          </div>

          <div className="comment">
            <img
              src="https://cdn-icons-png.flaticon.com/512/134/134808.png"
              alt=""
            />
            <p>Comentar</p>
          </div>
        </div>

        <div className="date">
          <p>{fromNow}</p>
        </div>
      </ActionsContainer>
      <DataContainer>
        <div className="likes">
          {likes.length > 1 || likes.length === 0 ? (
            <p>Curtido por {likes.length} pessoas</p>
          ) : (
            <p>Curtido por {likes.length} pessoa</p>
          )}
        </div>

        <div className="comments">
          {comments.length > 1 || comments.length === 0 ? (
            <p>{comments.length} comentários</p>
          ) : (
            <p>{comments.length} comentário</p>
          )}
        </div>
      </DataContainer>
    </Container>
  );
}

const Container = styled.div`
  min-width: 60rem;
  max-width: 60rem;
  box-sizing: border-box;

  margin: 1.6rem 0;

  background-color: white;
  border-radius: 5px;
  border: 1px solid rgba(var(--b6a, 219, 219, 219), 1);

  /* border: 1px solid red; */
  @media screen and (max-width: 800px) {
    min-width: 85vw;
  }

  @media screen and (max-width: 500px) {
    min-width: 100vw;
  }
`;

const DataContainer = styled.div`
  margin: 0 1.6rem 1.6rem 1.6rem;

  p {
    font-size: 1.4rem;
    color: gray;
  }
`;

const ActionsContainer = styled.div`
  display: flex;
  margin: 0.8rem 1.6rem 0.8rem 1.6rem;
  align-items: center;
  justify-content: space-between;

  img {
    width: 30px;
    margin-right: 0.5rem;
  }

  div.actions {
    display: flex;
    gap: 2rem;

    p {
      font-size: 1.4rem;
    }

    div.like {
      display: flex;
      align-items: center;
      cursor: pointer;
    }

    div.comment {
      display: flex;
      align-items: center;
      cursor: pointer;
    }
  }

  div.date {
    p {
      font-size: 1.3rem;
      text-align: center;
      color: gray;
    }
  }
`;

const PostInfo = styled.div`
  margin: 1rem 1.6rem 0 1.6rem;
`;

const UserContainer = styled.div`
  display: flex;
  justify-content: space-between;

  div.user-info-wrapper {
    display: flex;
    cursor: pointer;
    margin-bottom: 1rem;

    &:hover {
      p.username {
        text-decoration: underline;
      }
    }
  }

  img {
    min-width: 5rem;
    max-width: 5rem;
    min-height: 5rem;
    max-height: 5rem;
    border-radius: 50%;
    object-fit: cover;
  }

  div.user-info {
    display: flex;
    flex-direction: column;
    margin-left: 1rem;

    p.username {
      font-size: 1.4rem;
      color: #4d4d4d;
      line-height: 1.5rem;
    }
  }
`;

const DescriptionContainer = styled.div`
  margin-bottom: 1rem;

  p {
    word-wrap: break-word;
    font-size: 1.4rem;
  }

  span {
    font-size: 1.2rem;
    cursor: pointer;
    color: gray;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const ImageContainer = styled.div`
  min-width: 60rem;
  max-width: 60rem;
  transform: translateX(-1px); // make image overflow div's borders

  img {
    width: 100%;
    height: 100%;
    cursor: pointer;
  }

  @media screen and (max-width: 800px) {
    min-width: 85vw;
  }

  @media screen and (max-width: 500px) {
    min-width: 100vw;
  }
`;
