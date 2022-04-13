import CreatePostModal from './components/Post/CreatePost/CreatePostModal';
import { AuthProvider } from './contexts/AuthContext';
import { ModalContextProvider } from './contexts/ModalContext';
import useModal from './contexts/ModalContext/useModal';

import { AppRoutes } from './Routes';

function App() {
  const { showCreatePostModal } = useModal();

  return (
    <>
      <AuthProvider>
        {/* <ModalContextProvider> */}
        <ModalContextProvider>
          <AppRoutes />
        </ModalContextProvider>
        {/* </ModalContextProvider> */}
      </AuthProvider>
    </>
  );
}

export default App;
