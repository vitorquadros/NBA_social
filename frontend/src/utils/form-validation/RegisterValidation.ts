import * as yup from 'yup';

export const schema = yup
  .object({
    email: yup
      .string()
      .email('O formato do email é inválido')
      .required('Este campo é obrigatório')
  })
  .required();
