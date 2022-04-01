import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import CompleteRegisterForm from '../components/Auth/Register/CompleteRegisterForm';
import useApi from '../hooks/useApi';
import Error404Page from './Error404Page';

interface CallResponse {
  id: string;
  username?: string;
  displayName?: string;
  birthday?: string;
  role: string;
  nbaTeam?: string;
  email: string;
  avatar?: string;
  cover?: string;
  createdAt: string;
  updatedAt: string;
}

export default function Register() {
  const { key } = useParams<string>();

  const { call, data, isLoading, error } = useApi<CallResponse>();

  useEffect(() => {
    call({
      url: `users/register/${key}`,
      method: 'get'
    });
  }, []);

  if (isLoading) return <h1>Carregando...</h1>;

  if (error) return <Error404Page />;

  return (
    <Container>
      <h1>Finalize seu cadastro</h1>
      <CompleteRegisterForm email={data?.email} registerKey={key} />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin-top: 3rem;
    font-size: 1.8rem;
  }
`;
