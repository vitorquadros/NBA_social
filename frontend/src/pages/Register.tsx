import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import CompleteRegisterForm from '../components/Auth/Register/CompleteRegisterForm';
import { getRegister } from '../services/register';

export default function Register() {
  const { key } = useParams();
  const [email, setEmail] = useState<string>('');
  const navigate = useNavigate();

  useEffect(() => {
    if (!key) return;

    (async function () {
      try {
        const { data: user } = await getRegister(key);
        setEmail(user.email);
      } catch (error) {
        console.log(error);
        navigate('/');
      }
    })();
  }, []);

  return (
    <Container>
      <h1>Finalize seu cadastro</h1>
      <CompleteRegisterForm email={email} />
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
