import { Children } from 'react';
import useAuth from '../../contexts/AuthContext/useAuth';

export default function ProtectedLayout({
  children
}: {
  children: JSX.Element;
}) {
  const auth = useAuth();

  if (!auth.email) {
    return <h1>Você não tem acesso</h1>;
  } else {
    return children;
  }
}
