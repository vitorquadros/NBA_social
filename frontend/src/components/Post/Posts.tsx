import { useEffect } from 'react';
import styled from 'styled-components';
import useApi from '../../hooks/useApi';
import { Loading } from '../Utils/Loading';
import Post from './Post';

export default function Posts() {
  const { call, data: posts, setData, isLoading } = useApi<any>();

  useEffect(() => {
    call({
      url: '/posts',
      method: 'get'
    });

    return () => {
      setData(null);
    };
  }, []);

  return (
    <Container>
      {isLoading ? (
        <Loading />
      ) : (
        posts?.map((post: any) => <Post key={post.id} post={post} />)
      )}
    </Container>
  );
}

const Container = styled.div``;
