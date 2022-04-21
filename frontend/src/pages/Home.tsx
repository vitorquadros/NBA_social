import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Header from '../components/Header/Header';
import Snackbar from '../components/Utils/Snackbar';
import { useLocation } from 'react-router-dom';
import Posts from '../components/Post/Posts';
import useModal from '../contexts/ModalContext/useModal';
import useAuth from '../contexts/AuthContext/useAuth';
import LoadingFull from '../components/Utils/Loading';

export default function Home() {
  const snackbarRef = useRef<any>(null);

  const { loading } = useAuth();

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
      {loading ? (
        <LoadingFull />
      ) : (
        <>
          <Header />
          <Content>
            <Posts />
          </Content>
        </>
      )}
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
