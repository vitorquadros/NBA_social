import { useContext, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Header from '../components/Header/Header';
import Post from '../components/Post/Post';
import { ModalContext } from '../contexts/ModalContext';
import AuthModal from '../components/Auth/AuthModal';
import CreatePostModal from '../components/Post/CreatePost/CreatePostModal';
import { CommentsContextProvider } from '../contexts/CommentsContext';
import Snackbar from '../components/Utils/Snackbar';
import { useLocation } from 'react-router-dom';

export default function Home() {
  const { showAuthModal, showCreatePostModal } = useContext(ModalContext);

  const snackbarRef = useRef<any>(null);

  const location = useLocation();

  const state = location.state as any;

  useEffect(() => {
    if (showCreatePostModal) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'unset';
    }
  }, [showAuthModal, showCreatePostModal]);

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
        {showCreatePostModal && <CreatePostModal />}
        {showAuthModal && <AuthModal />}
        <CommentsContextProvider>
          {' '}
          {/* // DEBUG: remove Post temp props */}
          <Post
            image="https://i2.wp.com/livebasketballbr.com/wp-content/uploads/2022/03/THUMB-OVERTIME-live-LAKERS-76ERS.png?fit=1920%2C1080&ssl=1"
            userImage="https://www.fiscalti.com.br/wp-content/uploads/2021/02/default-user-image.png"
            userDisplayName="Nicolash Azevedo Silva"
            userName="nicosilva"
            postDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat architecto amet voluptatibus modi repudiandae. Officia perspiciatis ut quisquam, delectus aspernatur incidunt, esse doloremque facere exercitationem magni iste aliquid dicta voluptatum?"
          />
          <Post
            image="https://cdn.vox-cdn.com/thumbor/MEjeG_iclwwPEiY7NlqMaGGa75g=/0x0:1080x1350/1200x0/filters:focal(0x0:1080x1350):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/22541812/_National_3_52621.jpg"
            userImage="https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4277905.png"
            userDisplayName="Trae Young"
            userName="trae"
            postDescription="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint neque eligendi obcaecati, laudantium cupiditate tenetur ipsa vel accusamus excepturi, minima, nesciunt dolorem quaerat quae nam tempore! Suscipit excepturi ipsum deserunt consectetur dolor vero, dolores vel deleniti atque odit repudiandae, a autem nemo sequi fugit, aliquid impedit maxime reiciendis assumenda? Dicta, quis eum quaerat adipisci natus ipsa tempora unde consequuntur quo, repellat eius nam, quisquam saepe reprehenderit et dignissimos quasi. Dicta ex facere doloremque, officia repellat laudantium quas, id possimus dolore voluptates distinctio sunt accusamus voluptatum, provident vel dolorem? Hic dolore voluptate, sequi amet quis doloremque ea quia temporibus. Beatae, ipsam."
            team="https://loodibee.com/wp-content/uploads/nba-atlanta-hawks-logo.png"
            teamName="Atlanta Hawks"
          />
          <Post
            image="https://s2.glbimg.com/FBy_GkbPtv8csZzPH9Gpfd4O5h0=/696x390/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/q/h/Cl5t3gRBWBcY6Q03cA2g/2022-03-23t022422z-1878185794-mt1usatoday17950909-rtrmadp-3-nba-atlanta-hawks-at-new-york-knicks.jpg"
            userImage="https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4277905.png"
            userDisplayName="Trae Young"
            userName="trae"
            postDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat architecto amet voluptatibus modi repudiandae. Officia perspiciatis ut quisquam, delectus aspernatur incidunt, esse doloremque facere exercitationem magni iste aliquid dicta voluptatum?"
            team="https://loodibee.com/wp-content/uploads/nba-atlanta-hawks-logo.png"
            teamName="Atlanta Hawks"
          />
          <Post
            image="https://jumperbrasil.lance.com.br/wp-content/uploads/2022/03/Stephen-Curry-e-Marcus-Smart.jpg"
            userImage="https://static-wp-tor15-prd.torcedores.com/wp-content/uploads/2020/12/t12-4-603x338.jpg"
            userDisplayName="Stephen Curry"
            userName="curry"
            postDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat architecto amet voluptatibus modi repudiandae. Officia perspiciatis ut quisquam, delectus aspernatur incidunt, esse doloremque facere exercitationem magni iste aliquid dicta voluptatum?"
            team="https://loodibee.com/wp-content/uploads/nba-golden-state-warriors-logo-2020.png"
            teamName="Golden State Warriors"
          />
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
