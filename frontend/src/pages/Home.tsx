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
          {' '}
          {/* // DEBUG: remove Post temp props */}
          <Post
            image="https://wallpaper.dog/large/635907.jpg"
            userImage="https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4277905.png"
            userDisplayName="Trae Young"
            userName="trae"
            postDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat architecto amet voluptatibus modi repudiandae. Officia perspiciatis ut quisquam, delectus aspernatur incidunt, esse doloremque facere exercitationem magni iste aliquid dicta voluptatum?"
          />
          <Post
            image="https://s2.glbimg.com/IjZ9P3gy1Pr2sBt_6DZWiN20Kws=/0x0:5565x3703/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/u/0/kIOa9rSiCzQ2ACA2oTDQ/2022-03-20t013046z-288479879-mt1usatoday17933789-rtrmadp-3-nba-los-angeles-lakers-at-washington-wizards.jpg"
            userImage="https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4277905.png"
            userDisplayName="Trae Young"
            userName="trae"
            postDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat architecto amet voluptatibus modi repudiandae. Officia perspiciatis ut quisquam, delectus aspernatur incidunt, esse doloremque facere exercitationem magni iste aliquid dicta voluptatum?"
          />
          <Post
            image="https://s2.glbimg.com/FBy_GkbPtv8csZzPH9Gpfd4O5h0=/696x390/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/q/h/Cl5t3gRBWBcY6Q03cA2g/2022-03-23t022422z-1878185794-mt1usatoday17950909-rtrmadp-3-nba-atlanta-hawks-at-new-york-knicks.jpg"
            userImage="https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4277905.png"
            userDisplayName="Trae Young"
            userName="trae"
            postDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat architecto amet voluptatibus modi repudiandae. Officia perspiciatis ut quisquam, delectus aspernatur incidunt, esse doloremque facere exercitationem magni iste aliquid dicta voluptatum?"
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
