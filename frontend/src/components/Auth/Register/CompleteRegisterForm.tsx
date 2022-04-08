import { useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../../../utils/form-validation/CompleteRegisterValidation';
import TeamSelect from '../Fields/TeamSelect';
import Input from '../Fields/Input';
import { Fields } from '../Fields/PasswordFields';
import FileInput from '../Fields/FileInput';
import { useNavigate } from 'react-router-dom';
import useApi from '../../../hooks/useApi';
import useAuth from '../../../contexts/AuthContext/useAuth';
import { Loading } from '../../Utils/Loading';
import { SubmitButton } from '../Fields/SubmitButton';

export type Inputs = {
  displayname: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  birthday: string;
  team?: string;
  image?: FileList;
};

type CompleteRegisterProps = {
  email?: string;
  registerKey?: string;
};

export default function CompleteRegisterForm({
  email,
  registerKey
}: CompleteRegisterProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const { callForm, isLoading } = useApi();

  const { authenticate } = useAuth();

  const navigate = useNavigate();

  const {
    register,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>({ resolver: yupResolver(schema) });

  const onSubmit = handleSubmit(async (data) => {
    const user = Object.assign(
      {},
      {
        key: registerKey,
        username: data.username,
        displayName: data.displayname,
        password: data.password,
        nbaTeam: data.team ? data.team : '',
        birthday: data.birthday,
        avatar: 'profile_default.jpg'
      }
    );

    try {
      if (data.image && data.image.length > 0) {
        const formData = new FormData();
        formData.append('image', data.image[0]);

        const response = await callForm({
          url: '/upload',
          method: 'post',
          data: formData
        });

        user['avatar'] = response.filename;
      }

      await callForm({
        url: '/users/register',
        method: 'put',
        data: user
      });

      console.log(user);

      await authenticate(data.email, data.password);

      navigate('/', {
        state: {
          alert: true,
          alertName: 'registerSuccess'
        }
      }); // DEBUG
    } catch (error: any) {
      console.log(error.response);

      setError(
        'username',
        { type: 'manual', message: 'Nome de usuário ja existente' },
        { shouldFocus: true }
      );
    }

    // completeRegister(user);

    // setUserData(data); // TODO: preview modal
    // openRegisterPreviewModal();
  });

  return (
    <>
      <Form method="POST" onSubmit={onSubmit}>
        <Input
          label="Email"
          type="email"
          name="email"
          register={register}
          readOnly
          value={email}
        />

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

        <Fields.Password
          register={register}
          errors={errors.password ? errors.password : null}
          isPasswordVisible={isPasswordVisible}
          setIsPasswordVisible={setIsPasswordVisible}
          label="Senha"
          name="password"
        />

        <Fields.ConfirmPassword
          register={register}
          errors={errors.confirmPassword ? errors.confirmPassword : null}
          isPasswordVisible={isPasswordVisible}
          label="Confirmar senha"
        />

        <Input
          errors={errors.birthday ? errors.birthday : null}
          label="Data de nascimento"
          name="birthday"
          type="date"
          register={register}
        />

        <TeamSelect register={register} />

        <FileInput register={register} name="image" label="Imagem de perfil" />

        <div className="finish-container">
          {isLoading ? (
            <Loading />
          ) : (
            <SubmitButton type="submit">Finalizar</SubmitButton>
          )}
        </div>
      </Form>
    </>
  );
}

const Form = styled.form`
  width: 55rem;
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
  gap: 1rem;

  @media screen and (max-width: 600px) {
    width: 90%;
  }

  div.finish-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
