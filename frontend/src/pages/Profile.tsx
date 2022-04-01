import { useContext } from 'react';
import styled from 'styled-components';
import Header from '../components/Header/Header';
import CreatePostModal from '../components/Post/CreatePost/CreatePostModal';
import PostsTable from '../components/Profile/PostsTable';
import { ModalContext } from '../contexts/ModalContext';

export default function Profile() {
  const { showCreatePostModal } = useContext(ModalContext);

  return (
    <Wrapper>
      <Header />
      <Content>
        {showCreatePostModal && <CreatePostModal />}
        {/* // TODO: refactor into component */}
        <div className="images">
          <img
            src="https://s3-sa-east-1.amazonaws.com/saipos-estatico/site_delivery/cover8.png"
            alt=""
            className="cover"
          />
          <img
            src="https://jumperbrasil.lance.com.br/wp-content/uploads/2021/01/Bam-Adebayo-1.jpg"
            alt=""
            className="avatar"
          />
        </div>

        <div className="options">
          <button>
            <span className="material-icons">edit</span>
            <p>Editar perfil</p>
          </button>
        </div>

        <div className="user-info">
          <div className="main-info">
            <div className="name-container">
              <p className="name">Bam Adebayo</p>
              <span className="material-icons">verified</span>
            </div>

            <p className="bio">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quo
              nobis ipsam ex eveniet voluptatibus laboriosam. Architecto
              voluptatem nihil accusamus corporis. Voluptatibus et, fugiat
              velit.
            </p>
          </div>

          <div className="extra-info">
            <div className="align">
              <p className="location">United States, NJ</p>
              <img
                src="https://loodibee.com/wp-content/uploads/miami-heat-logo-symbol.png"
                alt=""
                title="Torcedor do Miami Heat"
              />
            </div>
          </div>
        </div>

        <PostsTable />
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: calc(100vh - 10rem); // FIX
  /* height: 2000px; */
  width: 100%;

  background-color: #fafafa;
`;

const Content = styled.div`
  min-width: 85rem;
  max-width: 85rem;
  height: auto;
  margin: 0 auto;
  margin-top: 8rem;
  margin-bottom: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  border: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;

  div.images {
    width: 100%;
    max-width: 100%;
    position: relative;
    max-height: 250px;

    img.cover {
      width: 100%;
      max-width: 100%;
      min-height: 250px;
      max-height: 250px;
      object-fit: cover;
    }

    img.avatar {
      min-width: 20rem;
      max-width: 20rem;
      min-height: 20rem;
      max-height: 20rem;
      object-fit: cover;
      border-radius: 50%;
      position: absolute;
      left: 4rem;
      bottom: -9rem;
      border: 2px solid white;
    }
  }

  div.options {
    /* border: 1px solid black; */
    display: flex;
    align-self: flex-end;
    margin: 2rem 2rem 0 0;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      border: 0;
      border-radius: 10px;
      padding: 1rem 2rem;
      background-color: #e56503;
      transition: 0.3s;
      cursor: pointer;

      &:hover {
        filter: brightness(80%);
      }

      span {
        margin-right: 0.8rem;
      }
    }
  }

  div.user-info {
    display: flex;
    margin: 5rem 4rem 0 4rem;

    div.main-info {
      display: flex;
      flex-direction: column;
      align-self: flex-start;
      width: 65%;
      max-width: 65%;

      div.name-container {
        display: flex;
        align-items: center;
        margin-bottom: 1rem;

        span {
          width: 24px;
          height: 24px;
          margin-left: 0.5rem;
        }

        p.name {
          font-size: 2rem;

          font-weight: 500;
        }
      }

      p.bio {
        font-size: 1.4rem;
      }
    }

    div.extra-info {
      width: 35%;
      max-width: 35%;
      display: flex;
      flex-direction: column;

      div.align {
        display: flex;
        flex-direction: column;
        align-self: flex-end;
        align-items: center;

        p.location {
          color: gray;
          font-weight: 500;
          text-align: center;
        }

        img {
          width: 8rem;
          height: 8rem;
        }
      }
    }
  }

  @media screen and (max-width: 880px) {
    min-width: 100vw;
    div.user-info {
      gap: 2rem;
    }
  }

  @media screen and (max-width: 500px) {
    div.images {
      img.avatar {
        min-width: 15rem;
        max-width: 15rem;
        min-height: 15rem;
        max-height: 15rem;
        bottom: -7rem;
        left: 2rem;
      }
    }

    div.user-info {
      margin: 3rem 2rem 0 2rem;
    }

    div.options {
      button {
        padding: 1rem 1.3rem;

        span {
          margin: 0;
        }

        p {
          display: none;
        }
      }
    }
  }
`;
