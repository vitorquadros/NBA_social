import styled from 'styled-components';

export default function PostsTable() {
  return (
    <Container>
      <h3>Publicações de Roberto Dias</h3>
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

      img {
        aspect-ratio: 1 / 1;
        width: 20rem;
        max-width: 20rem;
        border-radius: 5px;
      }
    }
  }
`;
