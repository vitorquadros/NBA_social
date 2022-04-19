import { useState } from 'react';
import styled from 'styled-components';
import useAuth from '../../../contexts/AuthContext/useAuth';
import useModal from '../../../contexts/ModalContext/useModal';
import useApi from '../../../hooks/useApi';

type PostFormProps = {
  image: string | FileList;
  setImage: React.Dispatch<React.SetStateAction<string | FileList>>;
};

export default function PostForm({ image, setImage }: PostFormProps) {
  const [description, setDescription] = useState<string>('');

  const { token } = useAuth();
  const { callForm, setData } = useApi();
  const { setShowCreatePostModal } = useModal();

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('image', image as string | Blob);

      const { filename } = await callForm({
        url: '/upload',
        method: 'post',
        data: formData
      });

      const { data } = await callForm({
        url: '/posts',
        method: 'post',
        data: {
          description,
          image: filename
        },
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      // console.log(data); DEBUG

      setShowCreatePostModal(false);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Form onSubmit={(e) => onSubmit(e)}>
      {!image ? (
        <h3>Para começar, você precisa selecionar uma imagem</h3>
      ) : (
        <>
          <h3>Agora, escreva uma descrição para sua publicação</h3>
          <textarea
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <span className="warning">
            <span className="material-icons">help_outline</span>
            <p>A descrição é opcional</p>
          </span>
        </>
      )}
      <input
        type="file"
        name="image"
        id="image"
        accept="image/*" // @ts-ignore
        onChange={(e) => setImage(e.target.files[0])}
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
          <img // @ts-ignore
            src={URL.createObjectURL(image)}
            alt="Preview da imagem"
          ></img>
          <label className="upload-again" htmlFor="image">
            Escolher outra imagem
          </label>
          <SendButton>Publicar</SendButton>
        </>
      ) : null}
      {/* // TODO: submit onclick Publicar */}
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
  margin: 0;
  display: flex;
  align-items: center;
  flex-direction: column;

  img {
    max-height: 40rem;
    max-width: 90%;
  }

  textarea {
    resize: none;
    height: 10rem;
    max-height: 10rem;
    width: 100%;
    max-width: 80%;

    border: 1px solid black;
    border-radius: 5px;
    padding: 0.5rem 0 0 0.5rem;
    margin-bottom: 1rem;

    &:focus {
      outline: none !important;
      border-color: rgba(229, 101, 3, 1);
    }
  }

  span.warning {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;

    p {
      font-size: 1.4rem;
    }

    span {
      font-size: 2.4rem;

      border-radius: 50%;
      padding: 2px 3px;
      margin-right: 1px;
    }
  }

  input[type='file'] {
    display: none;
  }

  label.upload {
    height: 6rem;
    width: 25rem;
    margin: 1rem 0 1rem 0;
    background-color: rgb(229, 101, 3);
    border-radius: 5px;
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
    margin: 1rem 2rem;
  }

  @media screen and (max-width: 880px) {
  }
`;
