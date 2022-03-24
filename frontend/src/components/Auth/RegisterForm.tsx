import { useContext } from 'react';
import styled from 'styled-components';
import { ModalContext } from '../../contexts/ModalContext';

export default function RegisterForm() {
  const { isRegister, setIsRegister } = useContext(ModalContext);

  return (
    <Container>
      <h1>Fazer cadastro</h1>
      <div className="no-account">
        <p>Já tem uma conta?</p>
        <button onClick={() => setIsRegister(!isRegister)}>Fazer login</button>
      </div>

      <Form>
        <p>Para começar, digite seu email</p>
        <div className="input-fields">
          <input type="email" name="email" id="email" placeholder="Seu email" />
        </div>

        <button>Enviar</button>
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
        outline: none;
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
