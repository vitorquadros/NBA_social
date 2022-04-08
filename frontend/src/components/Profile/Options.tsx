import styled from 'styled-components';

export default function Options({
  editProfile,
  toggleEditProfile,
  setAvatarImage,
  setCoverImage
}: {
  editProfile: boolean;
  toggleEditProfile: React.Dispatch<React.SetStateAction<boolean>>;
  setAvatarImage: React.Dispatch<React.SetStateAction<string | FileList>>;
  setCoverImage: React.Dispatch<React.SetStateAction<string | FileList>>;
}) {
  function handleBack() {
    toggleEditProfile(!editProfile);
    setAvatarImage('');
    setCoverImage('');
  }

  return (
    <Container className="options">
      <button onClick={handleBack}>
        {editProfile ? (
          <span className="material-icons">arrow_back</span>
        ) : (
          <span className="material-icons">edit</span>
        )}

        {editProfile ? <p>Voltar</p> : <p>Editar perfil</p>}
      </button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-self: flex-end;
  margin: 2rem 2rem 0 0;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    border-radius: 10px;
    padding: 1rem 2rem;
    background-color: #e56503;
    transition: 0.3s;
    cursor: pointer;

    &:hover {
      filter: brightness(80%);
    }

    span {
      margin-right: 0.8rem;
    }
  }
`;
