import * as yup from 'yup';

export const schema = yup
  .object({
    displayname: yup
      .string()
      .required('Este campo é obrigatório')
      .min(2, 'O nome precisa ter pelo menos 2 caracteres')
      .max(40, 'O nome pode ter até no maximo 40 caracteres'),
    username: yup
      .string()
      .required('Este campo é obrigatório')
      .matches(
        /^[a-zA-Z]+$/,
        'O nome de usuario não pode ter caracteres especiais ou números'
      )
      .min(5, 'O nome de usuário precisa ter pelo menos 5 caracteres')
      .max(18, 'O nome de usuário pode ter até no maximo 18 caracteres'),
    password: yup
      .string()
      .required('Este campo é obrigatório')
      .min(8, 'A senha deve ter pelo menos 8 caracteres')
      .max(100),
    confirmPassword: yup
      .string()
      .required('Este campo é obrigatório')
      .oneOf([yup.ref('password')], 'As senhas não são iguais'),
    birthday: yup.string().required('Este campo é obrigatório'),
    team: yup.string()
  })
  .required();
