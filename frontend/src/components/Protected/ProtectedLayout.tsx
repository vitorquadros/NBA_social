import { Children, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../contexts/AuthContext/useAuth';
import { ModalContext } from '../../contexts/ModalContext';
import Loading from '../Utils/Loading';

export default function ProtectedLayout({
  children
}: {
  children: JSX.Element;
}) {
  const { setShowAuthModal } = useContext(ModalContext);

  const navigate = useNavigate();

  const auth = useAuth();

  useEffect(() => {
    if (!auth.email) {
      navigate('/');
      setShowAuthModal(true);
    }
  }, []);

  if (!auth.email) return <Loading />;
  else return children;
}
