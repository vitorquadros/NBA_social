import styled from 'styled-components';

export default function ProfileImages() {
  return (
    <Container className="profile-images">
      <img
        src="https://s3-sa-east-1.amazonaws.com/saipos-estatico/site_delivery/cover8.png"
        alt=""
        className="cover"
      />
      <img
        src="https://jumperbrasil.lance.com.br/wp-content/uploads/2021/01/Bam-Adebayo-1.jpg"
        alt=""
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
