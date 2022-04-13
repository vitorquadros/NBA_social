import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Header from '../components/Header/Header';
import AuthModal from '../components/Auth/AuthModal';
import CreatePostModal from '../components/Post/CreatePost/CreatePostModal';
import Snackbar from '../components/Utils/Snackbar';
import { useLocation } from 'react-router-dom';
import Posts from '../components/Post/Posts';
import useModal from '../contexts/ModalContext/useModal';
import Modals from '../components/Modal/Modals';

export default function Home() {
  const { showAuthModal } = useModal();

  const snackbarRef = useRef<any>(null);

  const location = useLocation();

  const state = location.state as any;

  useEffect(() => {
    if (state) {
      if (state.alert) {
        snackbarRef.current.show();
        window.history.replaceState({}, document.title);
      }
    }
  }, []);

  return (
    <Wrapper>
      <Snackbar
        message="Cadastro finalizado com sucesso!"
        type="success"
        ref={snackbarRef}
      />
      <Header />
      <Content>
        {/* {showCreatePostModal && <CreatePostModal />} */}
        {showAuthModal && <AuthModal />}
        <Posts />
        {/* <CommentsContextProvider>
     
        </CommentsContextProvider> */}
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
