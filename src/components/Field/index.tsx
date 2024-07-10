import React, { useEffect, useState } from "react";
import classNames from "classnames";

interface PropsField {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  value: string;
  errorName: object | undefined;
  typeField: string;
  placeholder: string;
  id: string;
  name: string;
}

const Field: React.FC<PropsField> = ({
  errorName,
  typeField,
  placeholder,
  id,
  value,
  onChange,
  name,
}) => {
  const [valueInp, setValue] = useState<string>(value || "");

  useEffect(() => {
    if (value) {
      setValue(value);
    }
  }, [value]);

  return (
    <input
      className={classNames("app-form__field", {
        "app-form__field-error": errorName,
      })}
      placeholder={placeholder}
      type={typeField}
      id={id}
      value={valueInp}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        onChange(e);
      }}
      name={name}
    />
  );
};

export default Field;
