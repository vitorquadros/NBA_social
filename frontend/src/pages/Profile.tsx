import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header/Header';
import PostsTable from '../components/Profile/PostsTable';

export default function Profile() {
  return (
    <Wrapper>
      <Header />
      <Content>
        <div className="images">
          <img
            src="https://cdn.quotesgram.com/img/69/67/907176883-Miami-Heat-Big-3-Facebook-Cover.jpg"
            alt=""
            className="cover"
          />
          <img
            src="https://www.morganstanley.com/content/dam/msdotcom/people/tiles/isaiah-dwuma.jpg.img.380.medium.jpg/1594668408164.jpg"
            alt=""
            className="avatar"
          />
        </div>

        <div className="options">
          <button>
            <span className="material-icons">edit</span>
            Editar perfil
          </button>
        </div>

        <div className="user-info">
          <div className="main-info">
            <div className="name-container">
              <p className="name">Roberto Dias</p>
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
              <p className="location">Brazil, RS</p>
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
  border-radius: 5px;

  div.images {
    width: 100%;
    max-width: 100%;
    position: relative;
    border: 1px solid black;
    height: 250px;

    img.cover {
      width: 100%;
      max-width: 100%;
      max-height: 100%;
    }

    img.avatar {
      width: 20rem;
      border-radius: 50%;
      position: absolute;
      left: 4rem;
      bottom: -9rem;
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
        align-self: flex-end;
        align-items: center;

        p.location {
          color: gray;
          text-align: center;
          font-weight: 500;
        }

        img {
          width: 8rem;
          height: 8rem;
        }
      }
    }
  }
`;
