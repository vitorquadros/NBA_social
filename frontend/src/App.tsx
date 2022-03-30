import { AuthProvider } from './contexts/AuthContext';
import { ModalContextProvider } from './contexts/ModalContext';
import { useApi } from './hooks/useApi';
import Home from './pages/Home';
import Register from './pages/Register';
import { AppRoutes } from './Routes';
import { Post } from './types/IPost';

function App() {
  return (
    <>
      <AuthProvider>
        <ModalContextProvider>
          <AppRoutes />
        </ModalContextProvider>
      </AuthProvider>
    </>
  );
}

export default App;
