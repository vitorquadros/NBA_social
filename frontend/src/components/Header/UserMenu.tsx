import styled from 'styled-components';

export default function UserMenu() {
  return (
    <Container>
      <img
        src="https://www.morganstanley.com/content/dam/msdotcom/people/tiles/isaiah-dwuma.jpg.img.380.medium.jpg/1594668408164.jpg"
        alt=""
      />

      <span className="material-icons">expand_more</span>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  img {
    width: 4rem;
    border-radius: 50%;
  }
`;
