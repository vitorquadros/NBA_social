import styled from 'styled-components';

export default function UserInfo() {
  return (
    <Container>
      <img
        src="https://www.morganstanley.com/content/dam/msdotcom/people/tiles/isaiah-dwuma.jpg.img.380.medium.jpg/1594668408164.jpg"
        alt=""
      />
      <p className="name">Roberto Dias</p>
      <img
        className="team"
        src="https://loodibee.com/wp-content/uploads/nba-atlanta-hawks-logo.png"
        alt=""
        title="Jogador do Atlanta Hawks"
      />
      {/* <span>&#8226;</span>
    <p className="is-following">Você segue</p> */}
    </Container>
  );
}

const Container = styled.div`
  padding: 1.6rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(var(--b6a, 219, 219, 219), 1);

  p.name {
    margin-left: 1rem;
  }

  /* span {
      margin: 0 1rem;
    } */

  /* p.is-following {
      font-size: 1.4rem;
      color: gray;
    } */

  img {
    width: 5rem;
    border-radius: 50%;
  }

  img.team {
    width: 5rem;
    margin-left: auto;
  }
`;
