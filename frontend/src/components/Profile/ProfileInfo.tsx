import styled from 'styled-components';
import useAuth from '../../contexts/AuthContext/useAuth';

export default function ProfileInfo() {
  const { displayName, username, role } = useAuth();

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

        <p className="bio">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quo nobis
          ipsam ex eveniet voluptatibus laboriosam. Architecto voluptatem nihil
          accusamus corporis. Voluptatibus et, fugiat velit.
        </p>
      </div>

      <div className="extra-info">
        <div className="align">
          <p className="location">Brasil, RS</p>
          <img
            src="https://loodibee.com/wp-content/uploads/miami-heat-logo-symbol.png"
            alt=""
            title="Torcedor do Miami Heat"
          />
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
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
`;
