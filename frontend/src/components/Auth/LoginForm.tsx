import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useAuth from '../../contexts/AuthContext/useAuth';
import { ModalContext } from '../../contexts/ModalContext';

export default function LoginForm() {
  const { isRegister, setIsRegister, setShowAuthModal, showAuthModal } =
    useContext(ModalContext);

  const navigate = useNavigate();

  const { authenticate } = useAuth();

  type LoginInputs = {
    email: string;
    password: string;
  };

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginInputs>();

  const onSubmit = handleSubmit((data) => {
    try {
      authenticate(data.email, data.password);
      setShowAuthModal(!showAuthModal);
      console.log('ok'); // DEBUG
    } catch (error) {
      console.log(error); // DEBUG
      // TODO: add incorrect email or password message
    }
  });

  return (
    <Container>
      <h1>Fazer login</h1>
      <div className="no-account">
        <p>Não tem uma conta?</p>
        <button onClick={() => setIsRegister(!isRegister)}>
          Fazer cadastro
        </button>
      </div>

      <Form method="POST" onSubmit={onSubmit}>
        <div className="input-fields">
          <input
            type="email"
            id="email"
            placeholder="Seu email"
            {...register('email')}
          />
          <input
            type="password"
            id="password"
            placeholder="Sua senha"
            {...register('password')}
          />
        </div>

        <button>Fazer login</button>
      </Form>
    </Container>
  );
}

const Container = styled.div`
  width: 45rem;
  max-width: 100%;
  margin: 3.5rem 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 2rem;
  }

  div.no-account {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 2rem;
    text-align: center;

    p {
      font-size: 1.4rem;
    }

    button {
      font-size: 1.4rem;
      border: 0;
      background-color: white;
      padding: 0;
      color: #e56503;
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 40rem;

  div.input-fields {
    margin-bottom: 1.4rem;
    display: flex;
    flex-direction: column;
    gap: 1.4rem;
    width: 100%;

    input {
      width: 100%;
      box-sizing: border-box;
      padding: 1rem;
      font-size: 1.4rem;

      border: 0;
      border-radius: 10px;
      background-color: #e6e6e6;

      &:focus {
        outline: 1px solid #e56503;
      }
    }
  }

  button {
    width: 100%;
    border: 0;
    border-radius: 10px;
    padding: 1rem;
    font-size: 1.4rem;
    background-color: #e56503;
    font-weight: 500;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      filter: brightness(80%);
    }
  }
`;
