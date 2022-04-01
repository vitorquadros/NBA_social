import { useState } from 'react';
import styled from 'styled-components';
import { InputWrapper } from './InputWrapper';

type PasswordProps = {
  register: any;
  errors: any;
  isPasswordVisible: boolean;
  label?: string;
  placeholder?: string;
  setIsPasswordVisible: (state: boolean) => void;
};

type ConfirmPasswordProps = {
  register: any;
  errors: any;
  isPasswordVisible: boolean;
  label?: string;
  placeholder?: string;
};

function Password({
  register,
  errors,
  isPasswordVisible,
  setIsPasswordVisible,
  label,
  ...rest
}: PasswordProps) {
  return (
    <InputWrapper>
      <PasswordWrapper>
        {label && <label htmlFor="password">{label}</label>}
        <div className="password-wrapper">
          <input
            type={isPasswordVisible ? 'text' : 'password'}
            id="password"
            {...register('password')}
            maxLength={100}
            {...rest}
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
  isPasswordVisible,
  label,
  ...rest
}: ConfirmPasswordProps) {
  return (
    <InputWrapper>
      {label && <label htmlFor="confirmPassword">{label}</label>}
      <input
        type={isPasswordVisible ? 'text' : 'password'}
        id="confirmPassword"
        {...register('confirmPassword')}
        maxLength={100}
        {...rest}
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
      width: calc(100% - 4.2rem);
    }
  }

  span.eye {
    position: absolute;
    top: 34px;
    right: 10px;
    cursor: pointer;
  }
`;
