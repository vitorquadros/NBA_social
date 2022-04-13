import Modals from './components/Modal/Modals';
import { AuthProvider } from './contexts/AuthContext';
import { ModalContextProvider } from './contexts/ModalContext';
import useModal from './contexts/ModalContext/useModal';

import { AppRoutes } from './Routes';

function App() {
  const { showCreatePostModal } = useModal();

  return (
    <>
      <AuthProvider>
        <ModalContextProvider>
          <>
            <AppRoutes />
            <Modals />
          </>
        </ModalContextProvider>
      </AuthProvider>
    </>
  );
}

export default App;
