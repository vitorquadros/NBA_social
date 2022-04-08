import styled from 'styled-components';

export const SubmitButton = styled.button`
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
`;
