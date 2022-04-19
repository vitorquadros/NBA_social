import { useContext, useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Header/Header';
import PostsTable from '../components/Profile/PostsTable';
import Options from '../components/Profile/Options';
import ProfileImages from '../components/Profile/ProfileImages';
import ProfileInfo from '../components/Profile/ProfileInfo';
import EditProfileForm from '../components/Profile/EditProfile/EditProfileForm';
import LoadingFull from '../components/Utils/Loading';
import useAuth from '../contexts/AuthContext/useAuth';

export default function Profile() {
  const [editProfile, toggleEditProfile] = useState<boolean>(false);
  const [avatarImage, setAvatarImage] = useState<string | FileList>('');
  const [coverImage, setCoverImage] = useState<string | FileList>('');
  const { loading } = useAuth();

  return (
    <Wrapper>
      <Header />
      {loading ? (
        <LoadingFull />
      ) : (
        <Content>
          <ProfileImages
            previewAvatar={avatarImage}
            previewCover={coverImage}
          />
          <Options
            editProfile={editProfile}
            toggleEditProfile={toggleEditProfile}
            setAvatarImage={setAvatarImage}
            setCoverImage={setCoverImage}
          />
          {editProfile ? (
            <EditProfileForm
              toggleEditProfile={toggleEditProfile}
              avatarImage={avatarImage}
              setAvatarImage={setAvatarImage}
              coverImage={coverImage}
              setCoverImage={setCoverImage}
            />
          ) : (
            <>
              <ProfileInfo />
              <PostsTable />
            </>
          )}
        </Content>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: calc(100vh - 10rem); // FIX
  width: 100%;

  background-color: #fafafa;
`;

const Content = styled.div`
  min-width: 85rem;
  max-width: 85rem;
  height: auto;
  margin: 0 auto;
  margin-top: 8rem;
  margin-bottom: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  border: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;

  @media screen and (max-width: 880px) {
    min-width: 100vw;
    .profile-info {
      gap: 2rem;
    }
  }

  @media screen and (max-width: 500px) {
    .profile-images {
      img.avatar {
        min-width: 15rem;
        max-width: 15rem;
        min-height: 15rem;
        max-height: 15rem;
        bottom: -7rem;
        left: 2rem;
      }
    }

    .profile-info {
      margin: 3rem 2rem 0 2rem;
    }

    .options {
      button {
        padding: 1rem 1.3rem;

        span {
          margin: 0;
        }

        p {
          display: none;
        }
      }
    }
  }
`;
