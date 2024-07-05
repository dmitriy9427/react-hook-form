import React from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import Field from "../Field";

interface typeInps {
  name: string;
  email: string;
  password: string;
}

const FormSimple: React.FC = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<typeInps>();

  const onSubmit: SubmitHandler<typeInps> = (data) => {
    console.log(data);
  };

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)} className="app-form">
      <Controller
        name="name"
        control={control}
        defaultValue=""
        rules={{
          required: true,
          minLength: 3,
        }}
        render={({ field: { onChange, onBlur, value, name } }) => {
          return (
            <Field
              onChangeInput={onChange}
              onBlur={onBlur}
              value={value}
              typeField="text"
              errorName={errors.name?.type}
              id="name"
              placeholder="Ведите имя*"
              lengthSymbols="3"
              name={name}
            />
          );
        }}
      />

      <Controller
        name="email"
        control={control}
        rules={{
          required: true,
          pattern: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
        }}
        render={({ field: { onChange, onBlur, value, name } }) => {
          return (
            <Field
              onChangeInput={onChange}
              onBlur={onBlur}
              value={value}
              typeField="email"
              errorName={errors.email?.type}
              id="email"
              placeholder="Ведите email*"
              name={name}
            />
          );
        }}
      />
      <Controller
        name="password"
        control={control}
        rules={{
          required: true,
          minLength: 5,
        }}
        render={({ field: { onChange, onBlur, value, name } }) => {
          return (
            <Field
              onChangeInput={onChange}
              onBlur={onBlur}
              value={value}
              typeField="password"
              errorName={errors.password?.type}
              id="password"
              placeholder="Ведите пароль*"
              lengthSymbols="5"
              name={name}
            />
          );
        }}
      />
      <button type="submit" className="app-form__button">
        Отправить
      </button>
    </form>
  );
};

export default FormSimple;
