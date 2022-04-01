import { InputWrapper } from './InputWrapper';

type InputProps = {
  errors?: any;
  register: any;
  type: string;
  name: string;
  label: string;
  maxLength?: number;
  disabled?: boolean;
  value?: string;
};

export default function Input({
  errors,
  register,
  type,
  name,
  label,
  maxLength,
  ...rest
}: InputProps) {
  return (
    <InputWrapper>
      <label htmlFor="displayname">{label}</label>
      <input
        type={type}
        id={name}
        {...register(name)}
        maxLength={maxLength}
        {...rest}
      />
      {errors && <span className="field-error">{errors.message}</span>}
    </InputWrapper>
  );
}
