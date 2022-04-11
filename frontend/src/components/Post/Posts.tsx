import { useEffect } from 'react';
import styled from 'styled-components';
import useApi from '../../hooks/useApi';
import { Loading } from '../Utils/Loading';
import Post from './Post';

export default function Posts() {
  const { call, data: posts, isLoading } = useApi<any>();

  useEffect(() => {
    call({
      url: '/posts',
      method: 'get'
    });
  }, []);

  return (
    <Container>
      {isLoading ? (
        <Loading />
      ) : (
        posts?.map((post: any) => (
          <Post
            key={post.id}
            image={`http://localhost:3333/files/${post.image}`}
            postDescription={post.description}
            userDisplayName={post.user.displayName}
            userImage={`http://localhost:3333/files/${post.user.avatar}`}
            userName={post.user.username}
            team={`http://localhost:3333/files/${post.user.nbaTeam}.png`}
            teamName={post.user.nbaTeam}
            comments={post.comments}
            likes={post.likes}
          />
        ))
      )}
    </Container>
  );
}

const Container = styled.div``;
