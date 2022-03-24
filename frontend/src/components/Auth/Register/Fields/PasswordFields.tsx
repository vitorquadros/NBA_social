import { useState } from 'react';
import styled from 'styled-components';
import { InputWrapper } from './InputWrapper';

type PasswordProps = {
  register: any;
  errors: any;
  isPasswordVisible: boolean;
  setIsPasswordVisible: (state: boolean) => void;
};

type ConfirmPasswordProps = {
  register: any;
  errors: any;
  isPasswordVisible: boolean;
};

function Password({
  register,
  errors,
  isPasswordVisible,
  setIsPasswordVisible
}: PasswordProps) {
  return (
    <InputWrapper>
      <PasswordWrapper>
        <label htmlFor="password">Senha</label>
        <div className="password-wrapper">
          <input
            type={isPasswordVisible ? 'text' : 'password'}
            id="password"
            {...register('password')}
            maxLength={100}
          />
        </div>

        <div
          className="hide-password"
          onClick={() => setIsPasswordVisible(!isPasswordVisible)}
        >
          {isPasswordVisible ? (
            <span className="material-icons eye">visibility_off</span>
          ) : (
            <span className="material-icons eye">visibility</span>
          )}
        </div>
        {errors && <span className="field-error">{errors.message}</span>}
      </PasswordWrapper>
    </InputWrapper>
  );
}

function ConfirmPassword({
  register,
  errors,
  isPasswordVisible
}: ConfirmPasswordProps) {
  return (
    <InputWrapper>
      <label htmlFor="confirmPassword">Confirmar senha</label>
      <input
        type={isPasswordVisible ? 'text' : 'password'}
        id="confirmPassword"
        {...register('confirmPassword')}
        maxLength={100}
      />
      {errors && <span className="field-error">{errors.message}</span>}
    </InputWrapper>
  );
}

export const Fields = {
  Password,
  ConfirmPassword
};

const PasswordWrapper = styled.div`
  position: relative;

  div.password-wrapper {
    border-radius: 10px;
    background-color: #e6e6e6;

    input {
      width: calc(100% - 3rem);
    }
  }

  span.eye {
    position: absolute;
    top: 34px;
    right: 10px;
    cursor: pointer;
  }
`;
