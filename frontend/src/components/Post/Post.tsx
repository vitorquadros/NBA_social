import { useEffect, useState } from 'react';
import styled from 'styled-components';
import PostModal from './PostModal';
import moment from 'moment';
import 'moment/locale/br';
import useModal from '../../contexts/ModalContext/useModal';
import { Like, Post as IPost } from '../../types/Post';
import useApi from '../../hooks/useApi';
import useAuth from '../../contexts/AuthContext/useAuth';
import axios from 'axios';

type PostProps = {
  post: IPost;
};

export default function Post({
  post: { id, comments, description, image, user, likes, createdAt, updatedAt }
}: PostProps) {
  const { showPostModal, setShowPostModal } = useModal();
  const [showMore, setShowMore] = useState(false);
  const [likesState, setLikesState] = useState<Like[]>([]);
  const [alreadyLiked, setAlreadyLiked] = useState<boolean>(false);
  const { callForm } = useApi();
  const { token, username } = useAuth();
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

  useEffect(() => {
    setLikesState(likes);
  }, []);

  useEffect(() => {
    if (token) {
      axios
        .get(`http://localhost:3333/posts/${id}/like`, {
          method: 'get',
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then((response) => {
          setAlreadyLiked(response.data.data.isLiked);
        });
    }
  }, [likesState]);

  async function handleLike() {
    try {
      const { data: like, action } = await callForm({
        url: `/posts/${id}/like`,
        method: 'post',
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (action === 'liked') setLikesState([...likes, like]);
      else if (action === 'unliked') {
        const likesFiltered = likes.filter(
          (like) => like.user.username != username
        );
        setLikesState(likesFiltered);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container>
      {showPostModal && showPostModal === id && (
        <PostModal
          post={{
            id,
            comments,
            description,
            image,
            user,
            likes,
            createdAt,
            updatedAt
          }}
        />
      )}
      <PostInfo>
        <UserContainer>
          <div className="user-info-wrapper">
            <img
              src={`http://localhost:3333/files/${user.avatar}`}
              alt={`Foto de perfil de ${user.displayName}`}
            />
            <div className="user-info">
              <div className="display-name-container">
                <p className="displayname">{user.displayName}</p>
                {user.role === 'verified' && (
                  <span
                    className="material-icons verified"
                    title="Perfil verificado"
                  >
                    verified
                  </span>
                )}
              </div>

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
          {token ? (
            <>
              <div className="like" onClick={handleLike}>
                {alreadyLiked ? (
                  <span className="material-icons">favorite</span>
                ) : (
                  <span className="material-icons">favorite_border</span>
                )}

                <p>{alreadyLiked ? 'Descurtir' : 'Curtir'}</p>
              </div>
              <div className="comment">
                <span className="material-icons">chat_bubble_outline</span>
                <p>Comentar</p>
              </div>
            </>
          ) : (
            <div className="comment">
              <span className="material-icons">chat_bubble_outline</span>
              <p>Ver comentários</p>
            </div>
          )}
        </div>

        <div className="date">
          <p>{fromNow}</p>
        </div>
      </ActionsContainer>
      <DataContainer>
        <div className="likes">
          {likesState.length > 1 || likesState.length === 0 ? (
            <p>Curtido por {likesState.length} pessoas</p>
          ) : (
            <p>Curtido por {likesState.length} pessoa</p>
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
      gap: 0.5rem;
      align-items: center;
      cursor: pointer;

      span {
        font-size: 2.6rem;
      }
    }

    div.comment {
      gap: 0.5rem;
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

    div.display-name-container {
      display: flex;
      align-items: center;
      text-align: center;

      span.verified {
        font-size: 1.8rem;
        margin-left: 0.5rem;
      }
    }

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
