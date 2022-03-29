import { AuthProvider } from './contexts/AuthContext';
import { ModalContextProvider } from './contexts/ModalContext';
import { useFetch } from './hooks/useFetch';
import Home from './pages/Home';
import Register from './pages/Register';
import { AppRoutes } from './Routes';
import { Post } from './types/IPost';

function App() {
  // const { data: posts } = useFetch<Post[]>('posts');

  // console.log(posts);

  return (
    <>
      <AuthProvider>
        <ModalContextProvider>
          <AppRoutes />
        </ModalContextProvider>
      </AuthProvider>
      {/* <ul>
        {posts?.map((post) => (
          <li key={post.id}>{post.description}</li>
        ))}
      </ul> */}
    </>
  );
}

export default App;
