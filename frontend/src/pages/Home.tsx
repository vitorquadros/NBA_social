import { useContext } from 'react';
import styled from 'styled-components';
import Header from '../components/Header/Header';
import PostModal from '../components/Post/PostModal';
import { ModalContext } from '../contexts/ModalContext';

export default function Home() {
  const { openModal } = useContext(ModalContext);

  return (
    <Wrapper>
      <Header />
      <Content>
        <button onClick={openModal}>Modal</button>
        <PostModal />
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: calc(100vh - 10rem); // FIX
  width: 100%;

  background-color: #fafafa;
`;

const Content = styled.div`
  width: 50%;
  margin: 0 auto;
  margin-top: 10rem;

  border: 1px solid black; // DEBUG
`;
