import styled from 'styled-components';
import useAuth from '../../contexts/AuthContext/useAuth';

export default function PostsTable() {
  const { displayName } = useAuth();

  return (
    <Container>
      <h3>{`Publicações de ${displayName}`}</h3>
      <div className="table-images">
        <div className="table-image">
          <img src="https://wallpaper.dog/large/635907.jpg" alt="" />
        </div>
        <div className="table-image">
          <img src="https://wallpaper.dog/large/635907.jpg" alt="" />
        </div>
        <div className="table-image">
          <img src="https://wallpaper.dog/large/635907.jpg" alt="" />
        </div>
        <div className="table-image">
          <img src="https://wallpaper.dog/large/635907.jpg" alt="" />
        </div>
        <div className="table-image">
          <img src="https://wallpaper.dog/large/635907.jpg" alt="" />
        </div>
        <div className="table-image">
          <img src="https://wallpaper.dog/large/635907.jpg" alt="" />
        </div>
        <div className="table-image">
          <img src="https://wallpaper.dog/large/635907.jpg" alt="" />
        </div>
        <div className="table-image">
          <img src="https://wallpaper.dog/large/635907.jpg" alt="" />
        </div>
        <div className="table-image">
          <img src="https://wallpaper.dog/large/635907.jpg" alt="" />
        </div>
        <div className="table-image">
          <img src="https://wallpaper.dog/large/635907.jpg" alt="" />
        </div>
        <div className="table-image">
          <img src="https://wallpaper.dog/large/635907.jpg" alt="" />
        </div>
        <div className="table-image">
          <img src="https://wallpaper.dog/large/635907.jpg" alt="" />
        </div>
        <div className="table-image">
          <img src="https://wallpaper.dog/large/635907.jpg" alt="" />
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 5rem;

  h3 {
    text-align: center;
  }

  div.table-images {
    margin: 3rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 3rem;

    div.table-image {
      cursor: pointer;
      transition: all 0.3s;

      &:hover {
        scale: 120%;
      }

      img {
        aspect-ratio: 1 / 1;
        width: 20rem;
        max-width: 20rem;
        border-radius: 5px;
      }
    }
  }

  @media screen and (max-width: 800px) {
    div.table-images {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media screen and (max-width: 500px) {
    div.table-images {
      grid-template-columns: 1fr;

      div.table-image {
        img {
          width: 90vw;
          max-width: 90vw;
        }
      }
    }
  }
`;
