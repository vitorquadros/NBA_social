import { useState } from 'react';
import styled from 'styled-components';

type UserInfo = {
  description: string;
  userAvatar: string;
  userDisplayName: string;
  userUsername: string;
  userNbaTeam: string;
};

type UserInfoProps = {
  userInfo: UserInfo;
};

export default function UserInfo({
  userInfo: {
    description,
    userAvatar,
    userDisplayName,
    userNbaTeam,
    userUsername
  }
}: UserInfoProps) {
  const [showMore, setShowMore] = useState(false);

  return (
    <Container>
      <div className="info">
        <img
          src={`http://localhost:3333/files/${userAvatar}`}
          alt={`Foto de perfil de ${userDisplayName}`}
        />
        <p className="name">{userDisplayName}</p>
        {/* TODO add username */}
        {userNbaTeam && (
          <img
            className="team"
            src={`http://localhost:3333/files/teams/${userNbaTeam}.png`}
            alt={`Logo do ${userNbaTeam}`}
            title={`Torcedor do ${userNbaTeam}`}
          />
        )}
        {/* <span>&#8226;</span>
    <p className="is-following">Você segue</p> */}
      </div>

      <div className="description">
        {showMore ? (
          <p>{description}</p>
        ) : (
          <p>{`${description.substring(0, 200)}`}</p>
        )}
        <span onClick={() => setShowMore(!showMore)}>
          {description.length > 200 && (
            <span onClick={() => setShowMore(!showMore)}>
              {showMore ? 'Mostrar menos' : 'Mostrar mais'}
            </span>
          )}
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
      min-width: 5rem;
      max-width: 5rem;
      min-height: 5rem;
      max-height: 5rem;
      border-radius: 50%;
      object-fit: cover;
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
