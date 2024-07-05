import React, { useState } from "react";

interface Props {
  onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
  value: string;
  errorName: string | undefined;
  typeField: string;
  placeholder: string;
  id: string;
  lengthSymbols?: string;
  name: string;
}

const Field: React.FC<Props> = ({
  errorName,
  typeField,
  placeholder,
  id,
  lengthSymbols,
  value,
  onChangeInput,
  name,
}) => {
  const [valueInp, setValue] = useState<string>(value || "");
  return (
    <label className="app-form__label" htmlFor={id}>
      <input
        className={
          errorName
            ? "app-form__field app-form__field-error"
            : "app-form__field"
        }
        type={typeField}
        placeholder={placeholder}
        id={id}
        value={valueInp}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setValue(e.target.value);
          onChangeInput(e);
        }}
        name={name}
      />
      {errorName === "minLength" && (
        <span className="app-form__error">
          {`Минимальное количество сиволов ${lengthSymbols}`}
        </span>
      )}
      {errorName === "required" && (
        <span className="app-form__error">Обязательное поле</span>
      )}
      {errorName === "pattern" && (
        <span className="app-form__error">Введите корректный email</span>
      )}
    </label>
  );
};

export default Field;
