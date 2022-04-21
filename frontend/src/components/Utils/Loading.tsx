import styled from 'styled-components';

export default function LoadingFull() {
  return (
    <Container>
      <Spinner></Spinner>
    </Container>
  );
}

export function Loading() {
  return <Spinner></Spinner>;
}

const Spinner = styled.div`
  border: 16px solid #f3f3f3;
  border-top: 16px solid #e56503;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: spin 1.5s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  ${Spinner} {
    width: 60px;
    height: 60px;
  }
`;
