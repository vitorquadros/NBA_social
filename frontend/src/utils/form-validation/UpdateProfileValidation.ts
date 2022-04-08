import * as yup from 'yup';

export const schema = yup
  .object({
    displayname: yup
      .string()
      .min(2, 'O nome precisa ter pelo menos 2 caracteres')
      .max(40, 'O nome pode ter até no maximo 40 caracteres'),
    username: yup
      .string()
      .matches(
        /^[a-zA-Z]+$/,
        'O nome de usuario não pode ter caracteres especiais ou números'
      )
      .min(5, 'O nome de usuário precisa ter pelo menos 5 caracteres')
      .max(18, 'O nome de usuário pode ter até no maximo 18 caracteres'),
    currentPassword: yup
      .string()
      .required('Confirme sua senha atual para continuar')
      .max(100),
    password: yup.string().max(100),
    confirmPassword: yup.string().when('password', ([password], schema) => {
      return (
        password &&
        schema.required('Confirme a nova senha') &&
        schema.oneOf([yup.ref('password')], 'As senhas não são iguais')
      );
      // is: true,
      // then: yup
      //   .string()
      //   .required('Confirme a nova senha')
      //   .oneOf([yup.ref('password')], 'As senhas não são iguais')
    }),
    birthday: yup.string(),
    team: yup.string()
  })
  .required();
