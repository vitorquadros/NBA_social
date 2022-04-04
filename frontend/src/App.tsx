import { AuthProvider } from './contexts/AuthContext';
import { ModalContextProvider } from './contexts/ModalContext';
import { AppRoutes } from './Routes';

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
