import React, { forwardRef, useImperativeHandle, useState } from 'react';
import styled from 'styled-components';
import { InputWrapper } from './InputWrapper';

interface FileInputProps {
  register: any;
  name: string;
  label: string;
  setPreview?: React.Dispatch<React.SetStateAction<string | FileList>>;
}

const FileInput = forwardRef(
  ({ register, name, label, setPreview, ...rest }: FileInputProps, ref) => {
    const [fileName, setFileName] = useState<string>('');

    useImperativeHandle(ref, () => {
      return {
        handleFileChange: () => {
          setFileName('');
          if (setPreview) {
            setPreview('');
          }
        }
      };
    });

    return (
      <InputWrapper>
        <FileWrapper>
          <input
            type="file"
            id={name}
            {...register(name)}
            onChange={(e) => {
              setFileName(e.target.files![0].name);
              if (setPreview) {
                // @ts-ignore
                setPreview(e.target.files![0]);
              }
            }}
            accept=".jpg, .jpeg, .png"
          />
          <label className="upload-avatar" htmlFor={name}>
            <span className="material-icons">add_photo_alternate</span>
            Selecionar
          </label>
          {fileName ? <p>Selecionado: {fileName}</p> : <p>{label}</p>}
        </FileWrapper>
      </InputWrapper>
    );
  }
);

export default FileInput;

const FileWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  p {
    margin-left: 1rem;
    font-size: 1.4rem;
  }
`;
