import { useContext } from 'react';
import styled from 'styled-components';
import Header from '../components/Header/Header';
import Post from '../components/Post/Post';
import CreatePostModal from '../components/Post/CreatePost/CreatePostModal';
import { ModalContext } from '../contexts/ModalContext';

export default function Home() {
  const { openModal } = useContext(ModalContext);

  return (
    <Wrapper>
      <Header />
      <Content>
        {/* <button onClick={openModal}>Modal</button>
        <CreatePostModal /> */}
        <Post />
        <Post />
        <Post />
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: calc(100vh - 10rem); // FIX
  /* height: 2000px; */
  width: 100%;

  background-color: #fafafa;
`;

const Content = styled.div`
  width: 50%;
  min-width: 50%;
  margin: 0 auto;
  margin-top: 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  /* border: 1px solid black; // DEBUG */
`;
