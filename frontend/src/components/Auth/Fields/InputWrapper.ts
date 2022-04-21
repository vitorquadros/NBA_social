import styled from 'styled-components';

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;

  span.field-error {
    color: red;
    font-size: 1.3rem;
    margin-left: 0.5rem;
  }

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
      outline: 1px solid #e56503;
    }
  }

  input:read-only {
    cursor: not-allowed;
    background-color: #cccccc;
    color: #777777;
  }

  input:read-only:focus {
    outline: none;
  }

  input[type='date'] {
    cursor: pointer;
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
`;
