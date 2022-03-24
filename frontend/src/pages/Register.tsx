import styled from 'styled-components';
import CompleteRegisterForm from '../components/Auth/Register/CompleteRegisterForm';

export default function Register() {
  return (
    <Container>
      <h1>Finalize seu cadastro</h1>
      <CompleteRegisterForm />
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
