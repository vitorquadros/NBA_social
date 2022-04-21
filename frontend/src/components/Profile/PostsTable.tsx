import { useEffect } from 'react';
import styled from 'styled-components';
import useAuth from '../../contexts/AuthContext/useAuth';
import useApi from '../../hooks/useApi';
import { Post } from '../../types/Post';

export default function PostsTable() {
  const { displayName, id } = useAuth();

  const { call, data: posts } = useApi<Post[]>();

  useEffect(() => {
    call({
      url: `/posts/${id}`,
      method: 'get'
    });
  }, []);

  return (
    <Container>
      <h3>{`Publicações de ${displayName}`}</h3>
      {posts && posts.length > 0 ? (
        <div className="table-images">
          {posts?.map((post) => (
            <div className="table-image" key={post.id}>
              <img
                src={`http://localhost:3333/files/${post.image}`}
                alt={`Preview do post de ${displayName}`}
              />
            </div>
          ))}
        </div>
      ) : (
        <p className="no-posts">O usuário ainda não tem publicações.</p>
      )}
    </Container>
  );
}

const Container = styled.div`
  margin-top: 5rem;

  h3 {
    text-align: center;
  }

  p.no-posts {
    text-align: center;
    margin: 2rem 0;
  }

  div.table-images {
    margin: 3rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 3rem;

    div.table-image {
      cursor: pointer;
      transition: all 0.3s;

      &:hover {
        scale: 120%;
      }

      img {
        aspect-ratio: 1 / 1;
        width: 20rem;
        max-width: 20rem;
        border-radius: 5px;
        object-fit: cover;
      }
    }
  }

  @media screen and (max-width: 800px) {
    div.table-images {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media screen and (max-width: 500px) {
    div.table-images {
      grid-template-columns: 1fr;

      div.table-image {
        img {
          width: 90vw;
          max-width: 90vw;
        }
      }
    }
  }
`;
