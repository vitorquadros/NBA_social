import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import useAuth from '../../../contexts/AuthContext/useAuth';
import { schema } from '../../../utils/form-validation/CompleteRegisterValidation';
import FileInput from '../../Auth/Fields/FileInput';
import Input from '../../Auth/Fields/Input';
import { Fields } from '../../Auth/Fields/PasswordFields';
import TeamSelect from '../../Auth/Fields/TeamSelect';
import { Inputs } from '../../Auth/Register/CompleteRegisterForm';

export default function EditProfileForm({
  avatarImage,
  coverImage,
  setAvatarImage,
  setCoverImage
}: {
  avatarImage: FileList | string;
  setAvatarImage: React.Dispatch<React.SetStateAction<string | FileList>>;
  coverImage: FileList | string;
  setCoverImage: React.Dispatch<React.SetStateAction<string | FileList>>;
}) {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const { email, displayName, username, nbaTeam, avatar, cover, birthday } =
    useAuth();

  const {
    register,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>({ resolver: yupResolver(schema) });

  const onSubmit = handleSubmit(async (data) => {});

  return (
    <Form onSubmit={onSubmit}>
      <div className="name-inputs">
        <Input
          errors={errors.displayname ? errors.displayname : null}
          label="Nome"
          name="displayname"
          type="text"
          register={register}
          maxLength={40}
          value={displayName}
        />

        <Input
          errors={errors.username ? errors.username : null}
          label="Nome de usuário"
          name="username"
          type="text"
          register={register}
          maxLength={18}
          value={username}
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
          isPasswordVisible={isPasswordVisible}
          setIsPasswordVisible={setIsPasswordVisible}
          label="Senha"
        />
        <Fields.ConfirmPassword
          register={register}
          errors={errors.confirmPassword ? errors.confirmPassword : null}
          isPasswordVisible={isPasswordVisible}
          label="Confirmar senha"
        />
      </div>

      <FileInput
        register={register}
        name="avatar"
        label="Imagem de perfil"
        setPreview={setAvatarImage}
      />
      <FileInput
        register={register}
        name="cover"
        label="Imagem de capa"
        setPreview={setCoverImage}
      />

      {/* <div className="finish-container">
        {isLoading ? (
          <Loading />
        ) : (
          <SubmitButton type="submit">Finalizar</SubmitButton>
        )}
      </div> */}
    </Form>
  );
}

const Form = styled.form`
  margin-top: 8rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  div.name-inputs {
    display: flex;

    gap: 1rem;
  }

  div.password-inputs {
    display: flex;
    gap: 1rem;
  }
`;
