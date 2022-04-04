import { Children, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../contexts/AuthContext/useAuth';
import { ModalContext } from '../../contexts/ModalContext';
import Home from '../../pages/Home';
import Loading from '../Utils/Loading';

export default function ProtectedLayout({
  children
}: {
  children: JSX.Element;
}) {
  // const { setShowAuthModal } = useContext(ModalContext);

  // const navigate = useNavigate(); // TODO: redirect to homepage and open login modal

  const { email } = useAuth();

  if (!email) return <Home />;
  else return children;
}
