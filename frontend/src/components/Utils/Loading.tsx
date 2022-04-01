import styled from 'styled-components';

export default function Loading() {
  return (
    <Container>
      <div className="loader"></div>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  div.loader {
    border: 16px solid #f3f3f3;
    border-top: 16px solid #e56503;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    animation: spin 1.5s linear infinite;

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
`;
