import { useState } from 'react';
import styled from 'styled-components';

export default function UserInfo() {
  const [showMore, setShowMore] = useState(false);

  // DEBUG:
  const text =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quamalias eveniet ipsum, nobis reprehenderit distinctio, orem ipsum dolor sit amet consectetur adipisicing elit. Dicta quamalias eveniet ipsum, nobis reprehenderit distinctio,orem ipsum dolor sit amet consectetur adipisicing elit. Dicta quamalias eveniet ipsum, nobis reprehenderit distinctio, ssssssssssssssssssssssssssssssssssssssssssssss numquam, perspiciatis dolorem et fuga facilis perferendis ea id?';

  return (
    <Container>
      <div className="info">
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
      </div>

      <div className="description">
        {showMore ? <p>{text}</p> : <p>{`${text.substring(0, 200)}`}</p>}
        <span onClick={() => setShowMore(!showMore)}>
          {showMore ? 'Mostrar menos' : 'Mostrar mais'}
        </span>
      </div>
    </Container>
  );
}

const Container = styled.div`
  border-bottom: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
  width: 100%;

  div.info {
    padding: 1.6rem 1.6rem 0.5rem 1.6rem;
    display: flex;
    align-items: center;

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
  }

  div.description {
    padding: 0.5rem 1.6rem 1rem 1.6rem;

    span {
      font-size: 1.2rem;
      cursor: pointer;
      color: gray;

      &:hover {
        text-decoration: underline;
      }
    }

    p {
      font-size: 1.4rem;
      word-wrap: break-word;
    }
  }
`;
