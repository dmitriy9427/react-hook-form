import React from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

import Field from "../Field";

import { PATTERN_EMAIL } from "../../utils/constants";

interface TypeInps {
  name: string;
  email: string;
  password: string;
}

const FormSimple: React.FC = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<TypeInps>();

  const onSubmit: SubmitHandler<TypeInps> = (data) => {
    console.log(data);
  };

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)} className="app-form">
      <Controller
        name="name"
        control={control}
        defaultValue=""
        rules={{
          required: "Обязательное поле",
          minLength: {
            value: 3,
            message: "Минимальное количество сиволов 3",
          },
        }}
        render={({ field: { onChange, onBlur, value, name } }) => {
          return (
            <label className="app-form__label" htmlFor="name">
              <Field
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                typeField="text"
                errorName={errors.name}
                id="name"
                placeholder="Ведите имя*"
                name={name}
              />
              <ErrorMessage
                errors={errors}
                name="name"
                render={({ message }) => (
                  <span className="app-form__error">{message}</span>
                )}
              />
            </label>
          );
        }}
      />

      <Controller
        name="email"
        control={control}
        rules={{
          required: "Обязательное поле",
          pattern: {
            value: PATTERN_EMAIL,
            message: "Введите корректный email",
          },
        }}
        render={({ field: { onChange, onBlur, value, name } }) => {
          return (
            <label className="app-form__label" htmlFor="email">
              <Field
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                typeField="email"
                errorName={errors.email}
                id="email"
                placeholder="Ведите email*"
                name={name}
              />
              <ErrorMessage
                errors={errors}
                name="email"
                render={({ message }) => (
                  <span className="app-form__error">{message}</span>
                )}
              />
            </label>
          );
        }}
      />
      <Controller
        name="password"
        control={control}
        rules={{
          required: "Обязательное поле",
          minLength: {
            value: 6,
            message: "Минимальное количество сиволов 6",
          },
        }}
        render={({ field: { onChange, onBlur, value, name } }) => {
          return (
            <label className="app-form__label" htmlFor="password">
              <Field
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                typeField="password"
                errorName={errors.password}
                id="password"
                placeholder="Ведите пароль*"
                name={name}
              />
              <ErrorMessage
                errors={errors}
                name="password"
                render={({ message }) => (
                  <span className="app-form__error">{message}</span>
                )}
              />
            </label>
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
