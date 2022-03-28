import { useState } from 'react';
import styled from 'styled-components';
import { InputWrapper } from './InputWrapper';

export default function FileInput({ register }: any) {
  const [fileName, setFileName] = useState<string>('');

  return (
    <InputWrapper>
      <FileWrapper>
        <input
          type="file"
          id="avatar"
          {...register('avatar')}
          onChange={(e) => setFileName(e.target.files![0].name)}
        />
        <label className="upload-avatar" htmlFor="avatar">
          <span className="material-icons">add_photo_alternate</span>
          Selecionar
        </label>
        {fileName ? <p>Selecionado: {fileName}</p> : <p>Imagem de perfil</p>}
      </FileWrapper>
    </InputWrapper>
  );
}

const FileWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  p {
    margin-left: 1rem;
    font-size: 1.4rem;
  }
`;