import { useContext, useEffect } from 'react';
import styled from 'styled-components';
import Header from '../components/Header/Header';
import Post from '../components/Post/Post';
import CreatePostModal from '../components/Post/CreatePost/CreatePostModal';
import { ModalContext } from '../contexts/ModalContext';
import AuthModal from '../components/Auth/AuthModal';

export default function Home() {
  const { openModal, showRegisterModal } = useContext(ModalContext);

  useEffect(() => {
    if (showRegisterModal) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'unset';
    }
  }, [showRegisterModal]);

  return (
    <Wrapper>
      <Header />
      <Content>
        {/* <button onClick={openModal}>Modal</button>
        <CreatePostModal /> */}
        {showRegisterModal && <AuthModal />}
        <Post />
        <Post />
        <Post />
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh; // FIX
  width: 100%;

  // FIX: scroll moving page to the left

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
