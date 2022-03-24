import styled from 'styled-components';

export default function ReplyInput() {
  return (
    <Container>
      <input type="text" placeholder="Adicione um comentário" />
      <span className="material-icons">send</span>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 5rem;

  display: flex;
  align-items: center;
  margin-top: auto;

  border-top: 1px solid rgba(var(--b6a, 219, 219, 219), 1);

  span {
    padding: 1rem 2rem;
    cursor: pointer;
  }

  input {
    box-sizing: border-box;
    width: 100%;
    border: 0;
    background-color: #fafafa;

    font-size: 1.4rem;
    padding-left: 1rem;

    &:focus {
      outline: none;
    }
  }
`;
