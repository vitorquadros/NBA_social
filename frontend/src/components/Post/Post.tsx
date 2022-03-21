import styled from 'styled-components';

export default function Post() {
  return (
    <Container>
      <PostInfo>
        <UserContainer>
          <img
            src="https://www.morganstanley.com/content/dam/msdotcom/people/tiles/isaiah-dwuma.jpg.img.380.medium.jpg/1594668408164.jpg"
            alt=""
          />
          <div className="user-info">
            <p className="displayname">Roberto Dias</p>
            <p className="username">@robertodias</p>
          </div>
        </UserContainer>

        <DescriptionContainer>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            maxime eos pariatur. Non adipisci ullam qui accusantium sed
            dignissimos quidem.
          </p>
        </DescriptionContainer>
      </PostInfo>

      <ImageContainer>
        <img src="https://wallpaper.dog/large/635907.jpg" alt="" />
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
          <p>curtido por 1586 pessoas</p>
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
  }
`;

const ActionsContainer = styled.div`
  display: flex;
  margin: 1.6rem 1.6rem 0.8rem 1.6rem;
  align-items: center;
  justify-content: space-between;

  img {
    width: 30px;
    margin-right: 0.5rem;
  }

  div.actions {
    display: flex;
    gap: 2rem;

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
    }
  }
`;

const Container = styled.div`
  min-width: 60rem;
  max-width: 60rem;
  max-height: 100rem;

  background-color: white;
  border-radius: 5px;
  border: 1px solid rgba(var(--b6a, 219, 219, 219), 1);

  /* border: 1px solid red; */
`;

const PostInfo = styled.div`
  margin: 1.6rem;
`;

const UserContainer = styled.div`
  display: inline-flex;
  cursor: pointer;
  margin-bottom: 1.2rem;

  &:hover {
    p.username {
      text-decoration: underline;
    }
  }

  img {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
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

const DescriptionContainer = styled.div``;

const ImageContainer = styled.div`
  min-width: 60rem;
  max-width: 60rem;
  height: 60rem;

  img {
    width: 100%;
    height: 100%;
  }
`;
