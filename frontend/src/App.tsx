import { ModalContextProvider } from './contexts/ModalContext';
import { useFetch } from './hooks/useFetch';
import Home from './pages/Home';
import Profile from './pages/Profile';
import { AppRoutes } from './Routes';
import { Post } from './types/IPost';

function App() {
  // const { data: posts } = useFetch<Post[]>('posts');

  // console.log(posts);

  return (
    <>
      <ModalContextProvider>
        <AppRoutes />
      </ModalContextProvider>
      {/* <Profile /> */}
      {/* <ul>
        {posts?.map((post) => (
          <li key={post.id}>{post.description}</li>
        ))}
      </ul> */}
    </>
  );
}

export default App;
