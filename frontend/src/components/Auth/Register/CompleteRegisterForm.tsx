import { useContext, useState } from 'react';
import styled from 'styled-components';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../../../utils/form-validation/CompleteRegisterValidation';
import TeamSelect from './Fields/TeamSelect';
import Input from './Fields/Input';
import { Fields } from './Fields/PasswordFields';
import FileInput from './Fields/FileInput';
import { ModalContext } from '../../../contexts/ModalContext';
import { PreviewContext } from '../../../contexts/PreviewContext';
import { useNavigate } from 'react-router-dom';

export type Inputs = {
  email: string;
  displayname: string;
  username: string;
  password: string;
  confirmPassword: string;
  birthday: Date;
  team: string;
  avatar: FileList;
};

export default function CompleteRegisterForm() {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const navigate = useNavigate();

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>({ resolver: yupResolver(schema) });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    navigate('/'); // DEBUG
    // setUserData(data); // TODO: preview modal
    // openRegisterPreviewModal();
  });

  return (
    <Form method="POST" onSubmit={onSubmit}>
      <Input
        label="Email"
        type="email"
        name="email"
        register={register}
        disabled
        value="testedasilva@dev.com"
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
      />

      <Fields.ConfirmPassword
        register={register}
        errors={errors.confirmPassword ? errors.confirmPassword : null}
        isPasswordVisible={isPasswordVisible}
      />

      <Input
        errors={errors.birthday ? errors.birthday : null}
        label="Data de nascimento"
        name="birthday"
        type="date"
        register={register}
      />

      <TeamSelect register={register} />

      <FileInput register={register} />

      <SubmitButton type="submit">Finalizar</SubmitButton>
    </Form>
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
`;

const SubmitButton = styled.button`
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
