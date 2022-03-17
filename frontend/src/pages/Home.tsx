import styled from 'styled-components';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

export default function Home() {
  return (
    <>
      <Header />
      <Container></Container>
    </>
  );
}

const Container = styled.div`
  height: 100vh; // FIX
  width: 100%;

  background-color: #fafafa;
`;
