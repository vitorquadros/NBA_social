import { useContext } from 'react';
import styled from 'styled-components';
import CompleteRegisterForm from '../components/Auth/Register/CompleteRegisterForm';
import RegisterPreviewModal from '../components/Auth/Register/RegisterPreviewModal';
import { ModalContext } from '../contexts/ModalContext';

export default function Register() {
  const { showRegisterPreviewModal } = useContext(ModalContext);

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
