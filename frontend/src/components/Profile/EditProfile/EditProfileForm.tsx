import { yupResolver } from '@hookform/resolvers/yup';
import React, { useReducer, useState } from 'react';
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

type Inputs = {
  displayname: string;
  username: string;
  email: string;
  currentPassword: string;
  password?: string;
  confirmPassword?: string;
  birthday: string;
  team?: string;
  avatar?: FileList;
  cover?: FileList;
};

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
  const { email, displayName, username, nbaTeam, avatar, cover, birthday } =
    useAuth();

  const [isCurrentPasswordVisible, setIsCurrentPasswordVisible] =
    useState<boolean>(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const {
    register,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
    defaultValues: {
      displayname: displayName,
      username,
      team: nbaTeam,
      birthday: moment(birthday).format('YYYY-MM-DD')
    }
  });

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

      <div className="finish-container">
        {/* {isLoading ? (
          <Loading />
        ) : (
          <SubmitButton type="submit">Finalizar</SubmitButton>
        )} */}
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
`;
