import { useContext, useEffect } from 'react';
import styled from 'styled-components';
import Header from '../components/Header/Header';
import Post from '../components/Post/Post';
import { ModalContext } from '../contexts/ModalContext';
import AuthModal from '../components/Auth/AuthModal';
import CreatePostModal from '../components/Post/CreatePost/CreatePostModal';
import { CommentsContextProvider } from '../contexts/CommentsContext';

export default function Home() {
  const { showAuthModal, showCreatePostModal } = useContext(ModalContext);

  useEffect(() => {
    if (showAuthModal || showCreatePostModal) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'unset';
    }
  }, [showAuthModal, showCreatePostModal]);

  return (
    <Wrapper>
      <Header />
      <Content>
        {showCreatePostModal && <CreatePostModal />}
        {showAuthModal && <AuthModal />}
        <CommentsContextProvider>
          <Post />
          <Post />
          <Post />
        </CommentsContextProvider>
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
