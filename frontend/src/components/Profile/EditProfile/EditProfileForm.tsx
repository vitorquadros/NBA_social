import { yupResolver } from '@hookform/resolvers/yup';
import React, { useEffect, useReducer, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import useAuth from '../../../contexts/AuthContext/useAuth';
import { schema } from '../../../utils/form-validation/UpdateProfileValidation';
import FileInput from '../../Auth/Fields/FileInput';
import Input from '../../Auth/Fields/Input';
import { Fields } from '../../Auth/Fields/PasswordFields';
import TeamSelect from '../../Auth/Fields/TeamSelect';
import moment from 'moment';
import { SubmitButton } from '../../Auth/Fields/SubmitButton';
import useApi from '../../../hooks/useApi';

type Inputs = {
  displayname?: string;
  username?: string;
  currentPassword: string;
  password?: string;
  confirmPassword?: string;
  birthday?: string;
  team?: string;
  avatar?: FileList;
  cover?: FileList;
};

export default function EditProfileForm({
  avatarImage,
  coverImage,
  setAvatarImage,
  setCoverImage,
  toggleEditProfile
}: {
  avatarImage: FileList | string;
  setAvatarImage: React.Dispatch<React.SetStateAction<string | FileList>>;
  coverImage: FileList | string;
  setCoverImage: React.Dispatch<React.SetStateAction<string | FileList>>;
  toggleEditProfile: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const {
    email,
    displayName,
    username,
    nbaTeam,
    avatar,
    cover,
    birthday,
    token,
    authenticate
  } = useAuth();

  const { callForm } = useApi();

  const auxFileRef = useRef<any>();

  const [auxFile, setAuxFile] = useState<any>(null);

  useEffect(() => {
    if (auxFileRef) setAuxFile(auxFileRef.current.files);
  }, []);

  const avatarRef = useRef();
  const coverRef = useRef();

  const [isCurrentPasswordVisible, setIsCurrentPasswordVisible] =
    useState<boolean>(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const {
    register,
    setError,
    setValue,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
    defaultValues: {
      displayname: displayName,
      username,
      team: nbaTeam,
      currentPassword: '',
      password: '',
      confirmPassword: '',
      birthday: moment(birthday).format('YYYY-MM-DD')
    }
  });

  const onSubmit = handleSubmit(async (data) => {
    if (!data.username) delete data.username;
    if (!data.displayname) delete data.displayname;
    if (!data.birthday) delete data.birthday;
    if (data.avatar && data.avatar.length < 1) delete data.avatar;
    if (data.cover && data.cover.length < 1) delete data.cover;
    if (!data.password) delete data.password;
    delete data.confirmPassword;

    console.log(data);

    if (data.avatar && data.avatar.length > 0) {
      console.log('entoru avatar');
      const formData = new FormData();
      formData.append('image', data.avatar[0]);

      const response = await callForm({
        url: '/upload',
        method: 'post',
        data: formData
      });

      data['avatar'] = response.filename;
    }

    if (data.cover && data.cover.length > 0) {
      console.log('entoru cover');
      const formData = new FormData();
      formData.append('image', data.cover[0]);

      const response = await callForm({
        url: '/upload',
        method: 'post',
        data: formData
      });

      data['cover'] = response.filename;
    }

    delete Object.assign(data, { ['nbaTeam']: data['team'] })['team'];

    if (data.displayname) {
      delete Object.assign(data, { ['displayName']: data['displayname'] })[
        'displayname'
      ];
    }

    try {
      await callForm({
        url: '/auth',
        method: 'post',
        data: { email, password: data.currentPassword }
      });

      await callForm({
        url: '/users/updateMe',
        method: 'put',
        data: data,
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      const password = data.password ? data.password : data.currentPassword;

      // @ts-ignore
      await authenticate(email, password);

      toggleEditProfile(false);
    } catch (error) {
      console.log(error);
      setError(
        'currentPassword',
        { type: 'manual', message: 'Senha incorreta' },
        { shouldFocus: true }
      );
    }
  });

  return (
    <Form onSubmit={onSubmit}>
      <input type="file" hidden={true} name="aa" id="aa" ref={auxFileRef} />

      <div className="name-inputs">
        <Input
          errors={errors.displayname ? errors.displayname : null}
          label="Nome"
          name="displayname"
          type="text"
          register={register}
          maxLength={40}
        />

        <Input
          errors={errors.username ? errors.username : null}
          label="Nome de usuário"
          name="username"
          type="text"
          register={register}
          maxLength={18}
        />
      </div>

      <TeamSelect register={register} />

      <Input
        errors={errors.birthday ? errors.birthday : null}
        label="Data de nascimento"
        name="birthday"
        type="date"
        register={register}
      />

      <div className="password-inputs">
        <Fields.Password
          register={register}
          errors={errors.password ? errors.password : null}
          setIsPasswordVisible={setIsPasswordVisible}
          isPasswordVisible={isPasswordVisible}
          name="password"
          label="Nova senha"
        />
        <Fields.ConfirmPassword
          register={register}
          errors={errors.confirmPassword ? errors.confirmPassword : null}
          isPasswordVisible={isPasswordVisible}
          label="Confirmar senha"
        />
      </div>

      <Fields.Password
        register={register}
        errors={errors.currentPassword ? errors.currentPassword : null}
        isPasswordVisible={isCurrentPasswordVisible}
        setIsPasswordVisible={setIsCurrentPasswordVisible}
        label="Senha atual"
        name="currentPassword"
      />

      <div className="file-field">
        <FileInput
          register={register}
          name="avatar"
          label="Imagem de perfil"
          setPreview={setAvatarImage}
          ref={avatarRef}
        />

        {avatarImage && (
          <span
            className="material-icons remove-file"
            onClick={() => {
              // @ts-ignore
              avatarRef?.current?.handleFileChange();
              setValue('avatar', auxFile);
            }}
          >
            cancel
          </span>
        )}
      </div>

      <div className="file-field">
        <FileInput
          register={register}
          name="cover"
          label="Imagem de capa"
          setPreview={setCoverImage}
          ref={coverRef}
        />

        {coverImage && (
          <span
            className="material-icons remove-file"
            onClick={() => {
              // @ts-ignore
              coverRef?.current?.handleFileChange();
              setValue('cover', auxFile); // auxFile = empty FileList
            }}
          >
            cancel
          </span>
        )}
      </div>

      <div className="finish-container">
        {/* {isLoading ? (
          <Loading />
        ) : (
          <SubmitButton type="submit">Finalizar</SubmitButton>
        )} */}

        <div className="warning">
          <span className="material-icons">error_outline</span>
          <p>Campos vazios não terão mudança</p>
        </div>

        <SubmitButton type="submit">Finalizar</SubmitButton>
      </div>
    </Form>
  );
}

const Form = styled.form`
  margin-top: 8rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;

  div.warning {
    display: flex;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;

    span {
      text-align: center;
      font-size: 2rem;
    }

    p {
      text-align: center;
      font-size: 1.3rem;
    }
  }

  div.current-password {
    input {
      width: 100%;
    }
  }

  div.name-inputs {
    display: flex;

    gap: 1rem;
  }

  div.password-inputs {
    display: flex;
    gap: 1rem;
  }

  div.file-field {
    display: flex;
    align-items: center;

    span.remove-file {
      cursor: pointer;
      margin-left: 2rem;
      text-align: center;
      border-radius: 50%;
      font-size: 1.9rem;
      transition: 0.3s;

      &:hover {
        scale: 140%;
      }
    }
  }
`;
