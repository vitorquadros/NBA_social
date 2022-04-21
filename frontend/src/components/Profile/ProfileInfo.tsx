import styled from 'styled-components';
import useAuth from '../../contexts/AuthContext/useAuth';

export default function ProfileInfo() {
  const { displayName, username, role, nbaTeam, bio } = useAuth();

  return (
    <Container className="profile-info">
      <div className="main-info">
        <div className="name-container">
          <p className="name" title={`@${username}`}>
            {displayName}
          </p>
          {role === 'verified' && (
            <span className="material-icons" title="Perfil verificado">
              verified
            </span>
          )}
        </div>

        <p className="bio">{bio}</p>
      </div>

      <div className="extra-info">
        <div className="align">
          <p className="location">Brasil, RS</p>
          {nbaTeam && (
            <img
              src={`http://localhost:3333/files/teams/${nbaTeam}.png`}
              alt={`Logo do ${nbaTeam}`}
              title={`Torcedor do ${nbaTeam}`}
            />
          )}
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 100%;
  margin: 5rem 4rem 0 4rem;
  justify-content: space-between;

  div.main-info {
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    width: 65%;
    max-width: 65%;
    margin-left: 6rem;

    @media screen and (max-width: 500px) {
      margin-left: 3rem;
    }

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
    margin-right: 5rem;

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
        transition: all 0.3s;

        &:hover {
          scale: 110%;
        }
      }
    }
  }
`;
