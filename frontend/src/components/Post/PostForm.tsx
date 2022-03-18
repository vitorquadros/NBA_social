import { useState } from 'react';
import styled from 'styled-components';

export default function PostForm() {
  // Image Preview
  const [image, setImage] = useState<File | ''>('');

  return (
    <Form>
      {!image ? (
        <h3>Para começar, você precisa selecionar uma imagem para o post</h3>
      ) : (
        <>
          <h3>Agora, escreva uma descrição para seu post</h3>
          <textarea />
          <span className="warning">
            <span className="material-icons">question_mark</span>A descrição é
            opcional
          </span>
        </>
      )}
      <input
        type="file"
        name="image"
        id="image"
        accept="image/*"
        onChange={(e) =>
          setImage(e.target.files instanceof FileList ? e.target.files[0] : '')
        }
      />
      {!image && (
        <>
          <label className="upload" htmlFor="image">
            <span className="material-icons">add_photo_alternate</span>
            Escolha uma imagem
          </label>
        </>
      )}
      {image ? (
        <>
          <img
            src={URL.createObjectURL(image)}
            width="500px"
            alt="Preview da imagem"
          ></img>
          <label className="upload-again" htmlFor="image">
            Escolher outra imagem
          </label>
        </>
      ) : null}
      {/* // TODO: submit onclick Publicar */}
      <SendButton>Publicar</SendButton>
    </Form>
  );
}

const SendButton = styled.button`
  background-color: #e56503;
  padding: 5px 15px;
  border: 0;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    filter: brightness(80%);
  }
`;

const Form = styled.form`
  box-sizing: border-box;
  margin: 2rem 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  textarea {
    resize: none;
    min-height: 10rem;
    width: 500px;
    border: 1px solid rgba(229, 101, 3, 1);
    border-radius: 5px;
    padding: 0.5rem 0 0 0.5rem;
    margin-bottom: 1rem;
  }

  textarea:focus {
    outline: none;
  }

  span.warning {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
    font-size: 1.4rem;

    span {
      font-size: 2rem;
      background-color: rgb(251, 189, 4);
      border-radius: 50%;
      padding: 2px 3px;
      margin-right: 3px;
    }
  }

  input[type='file'] {
    display: none;
  }

  label.upload {
    height: 6rem;
    width: 25rem;
    margin: 1rem 0 3rem 0;
    background-color: rgb(229, 101, 3);
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

  label.upload-again {
    text-decoration: underline;
    font-size: 1.4rem;
    cursor: pointer;
    margin: 0.5rem 0 1.5rem 0;
  }

  h3 {
    margin: 1rem 0;
  }
`;
