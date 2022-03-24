import { useState } from 'react';
import styled from 'styled-components';

export default function CompleteRegisterForm() {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  return (
    <Form>
      <div className="input-field">
        <label htmlFor="email">Email</label>
        <input type="email" disabled value="testedasilva@dev.com" />
      </div>

      <div className="input-field">
        <label htmlFor="displayname">Nome</label>
        <input type="text" name="displayname" id="displayname" />
      </div>

      <div className="input-field">
        <label htmlFor="username">Nome de usuário</label>
        <input type="text" name="username" id="username" />
      </div>

      <div className="input-field password-field">
        <label htmlFor="password">Senha</label>
        <div className="password-wrapper">
          <input
            type={isPasswordVisible ? 'text' : 'password'}
            name="password"
            id="password"
          />
        </div>

        <div
          className="hide-password"
          onClick={() => setIsPasswordVisible(!isPasswordVisible)}
        >
          {isPasswordVisible ? (
            <span className="material-icons">visibility_off</span>
          ) : (
            <span className="material-icons">visibility</span>
          )}
        </div>
      </div>

      <div className="input-field">
        <label htmlFor="confirmPassword">Confirmar senha</label>
        <input
          type={isPasswordVisible ? 'text' : 'password'}
          name="confirmPassword"
          id="confirmPassword"
        />
      </div>

      <div className="input-field">
        <label htmlFor="birthday">Data de nascimento</label>
        <input type="date" name="birthday" id="birthday" />
      </div>

      <div className="input-field">
        <label htmlFor="team">Time preferido</label>
        <select name="team" id="team" placeholder="Time">
          <option value="0">Nenhum</option>
          <option value="atlanta">Atlanta Hawks</option>
          <option value="boston">Boston Celtics</option>
          <option value="brooklyn">Brooklyn Nets</option>
          <option value="chicago">Chicago Bulls</option>
          <option value="cleveland">Cleveland Cavaliers</option>
          <option value="charlotte">Charlotte Hornets</option>
          <option value="detroit">Detroit Pistons</option>
          <option value="denver">Denver Nuggets</option>
          <option value="dallas">Dallas Mavericks</option>
          <option value="golden_state">Golden State Warriors</option>
          <option value="houston">Houston Rockets</option>
          <option value="indiana">Indiana Pacers</option>
          <option value="los_angeles_clippers">Los Angeles Clippers</option>
          <option value="los_angeles_lakers">Los Angeles Lakers</option>
          <option value="miami">Miami Heat</option>
          <option value="milwaukee">Milwaukee Bucks</option>
          <option value="minnesota">Minnesota Timberwolves</option>
          <option value="memphis">Memphis Grizzlies</option>
          <option value="new_york">New York Knicks</option>
          <option value="new_orleans">New Orleans Pelicans</option>
          <option value="orlando">Orlando Magic</option>
          <option value="oklahoma_city">Oklahoma City Thunder</option>
          <option value="philadelphia">Philadelphia 76ers</option>
          <option value="phoenix">Phoenix Suns</option>
          <option value="portland">Portland Trail Blazers</option>
          <option value="sacramento">Sacramento Kings</option>
          <option value="toronto">Toronto Raptors</option>
          <option value="utah">Utah Jazz</option>
          <option value="san_antonio">San Antonio Spurs</option>
          <option value="washington">Washington Wizards</option>
        </select>
      </div>

      <div className="input-field input-file">
        <input type="file" name="avatar" id="avatar" />
        <label className="upload-avatar" htmlFor="avatar">
          <span className="material-icons">add_photo_alternate</span>
          Selecionar
        </label>
        <p>Imagem de perfil</p>
      </div>

      <button>Finalizar cadastro</button>
    </Form>
  );
}

const Form = styled.form`
  width: 30%;
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
  gap: 1rem;

  div.password-field {
    position: relative;

    div.password-wrapper {
      border-radius: 10px;
      background-color: #e6e6e6;

      input {
        width: calc(100% - 3rem);
      }
    }

    span {
      position: absolute;
      top: 34px;
      right: 10px;
      cursor: pointer;
    }
  }

  div.input-field {
    display: flex;
    flex-direction: column;

    label {
      margin-left: 0.5rem;
      margin-bottom: 0.3rem;
      font-size: 1.4rem;
    }

    input,
    select {
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

    input:disabled {
      cursor: not-allowed;
      background-color: #cccccc;
    }

    select {
      cursor: pointer;
    }

    input[type='file'] {
      display: none;
    }

    label.upload-avatar {
      border-radius: 10px;
      height: 4rem;
      width: 15rem;
      margin: 1rem 0 1rem 0;
      padding: 0 1rem;
      background-color: #e6e6e6;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 500;
      cursor: pointer;
      gap: 1rem;
      transition: 0.5s;
      &:hover {
        filter: brightness(80%);
      }
    }
  }

  div.input-file {
    display: flex;
    flex-direction: row;
    align-items: center;

    p {
      margin-left: 1rem;
      font-size: 1.4rem;
    }
  }

  button {
    width: 100%;
    margin: 1rem 0;
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
