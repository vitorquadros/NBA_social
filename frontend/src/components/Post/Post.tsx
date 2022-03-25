import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { ModalContext } from '../../contexts/ModalContext';
import PostModal from './PostModal';

type PostProps = {
  image: string;
  userImage: string;
  userDisplayName: string;
  userName: string;
  postDescription: string;
  team?: string;
  teamName?: string;
};

export default function Post({
  image,
  userImage,
  userDisplayName,
  userName,
  postDescription,
  team,
  teamName
}: PostProps) {
  const { showPostModal, openPostModal } = useContext(ModalContext);
  const [showMore, setShowMore] = useState(false);

  // DEBUG
  const text =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique laboriosam iusto facere numquam aut et. Laudantium totam aperiam, voluptates nihil molestiae dicta cum pariatur ullam porro eum, tempore omnis, molestias ipsam? Aut ratione, vero quaerat saepe ipsam veniam aliquam ullam laudantium quisquam quos suscipit unde, obcaecati ex sed qui repellendus natus, optio quibusdam magnam sapiente ad rem quas accusantium! Quam earum iure enim vero repellat hic a fuga, ab aut aspernatur nam temporibus voluptas iusto praesentium nobis velit, obcaecati ducimus assumenda, quia alias. Placeat ducimus sapiente, magnam aut officia accusantium provident distinctio veniam possimus ea ad repudiandae, fugiat cum libero.';

  useEffect(() => {
    if (showPostModal) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'unset';
    }
  }, [showPostModal]);

  return (
    <Container>
      {showPostModal && <PostModal />}
      <PostInfo>
        <UserContainer>
          <div className="user-info-wrapper">
            <img src={userImage} alt="" />
            <div className="user-info">
              <p className="displayname">{userDisplayName}</p>
              <p className="username">@{userName}</p>
            </div>
          </div>

          {team && (
            <img
              className="team"
              src={team}
              alt={`Logo do ${teamName}`}
              title={`Jogador do ${teamName}`}
            />
          )}
        </UserContainer>

        <DescriptionContainer>
          {showMore ? (
            <p>{postDescription}</p>
          ) : (
            <p>{`${postDescription.substring(0, 200)}`}</p>
          )}
          <span onClick={() => setShowMore(!showMore)}>
            {showMore ? 'Mostrar menos' : 'Mostrar mais'}
          </span>
        </DescriptionContainer>
      </PostInfo>
      {/* // FIX: border */}
      <ImageContainer onClick={openPostModal}>
        <img src={image} alt="" />
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
          <p>22 horas atrás</p>
        </div>
      </ActionsContainer>
      <DataContainer>
        <div className="likes">
          <p>Curtido por 1586 pessoas</p>
        </div>

        <div className="comments">
          <p>16 comentários</p>
        </div>
      </DataContainer>
    </Container>
  );
}

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

const Container = styled.div`
  min-width: 60rem;
  max-width: 60rem;
  box-sizing: border-box;

  margin: 1.6rem 0;

  background-color: white;
  border-radius: 5px;
  border: 1px solid rgba(var(--b6a, 219, 219, 219), 1);

  /* border: 1px solid red; */
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
`;
