import Modals from './components/Modal/Modals';
import { AuthProvider } from './contexts/AuthContext';
import { CommentsContextProvider } from './contexts/CommentsContext';
import { ModalContextProvider } from './contexts/ModalContext';
import useModal from './contexts/ModalContext/useModal';

import { AppRoutes } from './Routes';

function App() {
  const { showCreatePostModal } = useModal();

  return (
    <>
      <AuthProvider>
        <ModalContextProvider>
          <CommentsContextProvider>
            <>
              <AppRoutes />
              <Modals />
            </>
          </CommentsContextProvider>
        </ModalContextProvider>
      </AuthProvider>
    </>
  );
}

export default App;
