import styled from 'styled-components';
import useAuth from '../../contexts/AuthContext/useAuth';

export default function ProfileImages() {
  const { cover, avatar, displayName } = useAuth();

  return (
    <Container className="profile-images">
      <img
        src={`http://localhost:3333/files/${cover}`}
        alt={`Foto de perfil de ${displayName}`}
        className="cover"
      />
      <img
        src={`http://localhost:3333/files/${avatar}`}
        alt={`Foto de capa de ${displayName}`}
        className="avatar"
      />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  max-width: 100%;
  position: relative;
  max-height: 250px;

  img.cover {
    width: 100%;
    max-width: 100%;
    min-height: 250px;
    max-height: 250px;
    object-fit: cover;
  }

  img.avatar {
    min-width: 20rem;
    max-width: 20rem;
    min-height: 20rem;
    max-height: 20rem;
    object-fit: cover;
    border-radius: 50%;
    position: absolute;
    left: 4rem;
    bottom: -9rem;
    border: 2px solid white;
  }
`;
