import { yupResolver } from '@hookform/resolvers/yup';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { ModalContext } from '../../../contexts/ModalContext-old';
import useApi from '../../../hooks/useApi';
import { schema } from '../../../utils/form-validation/RegisterValidation';
import EmailSent from './EmailSent';
import Input from '../Fields/Input';
import { Loading } from '../../Utils/Loading';

type RegisterInputs = {
  email: string;
};

export default function RegisterForm() {
  const { isRegister, setIsRegister, showAuthModal, setShowAuthModal } =
    useContext(ModalContext);

  const [email, setEmail] = useState<string | null>(null);

  const { callForm, isLoading } = useApi<string>();

  const {
    register,
    setValue,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm<RegisterInputs>({ resolver: yupResolver(schema) });

  const onSubmit = handleSubmit(async (data) => {
    try {
      await callForm({
        url: '/users/register',
        method: 'post',
        data: {
          email: data.email,
          redirectUrl: 'http://localhost:3000/register/'
        }
      });

      setEmail(data.email);
      console.log('ok'); // DEBUG
    } catch (error) {
      console.log(error); // DEBUG
      setError(
        'email',
        { type: 'manual', message: 'Email já cadastrado' },
        { shouldFocus: false }
      );
    }
  });

  return email ? (
    <EmailSent email={email} />
  ) : (
    <Container>
      <h1>Fazer cadastro</h1>
      <div className="no-account">
        <p>Já tem uma conta?</p>
        <button onClick={() => setIsRegister(!isRegister)}>Fazer login</button>
      </div>

      {isLoading ? (
        <Loading />
      ) : (
        <Form method="POST" onSubmit={onSubmit}>
          <p>Para começar, digite seu email</p>
          <div className="input-fields">
            <Input
              type="text"
              name="email"
              errors={errors.email ? errors.email : null}
              register={register}
              placeholder="Seu email"
            />
          </div>

          <button>Enviar</button>
        </Form>
      )}
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
    text-align: center;
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

  p {
    text-align: center;
    margin-bottom: 1rem;
    font-weight: 500;
  }

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
