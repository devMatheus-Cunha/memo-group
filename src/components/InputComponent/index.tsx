import React from "react";

// formik
import { Field } from "formik";

// styles
import { Container } from "./styles";

export const InputComponent = ({
  id,
  name,
  placeholder,
  label,
  children,
  width,
  required,
}: any) => {
  return (
    <Container>
      <label htmlFor={name}>{required ? `${label} *` : label}</label>
      <Field
        id={id}
        name={name}
        placeholder={placeholder}
        required={required}
        style={{width: `${width}%`}}
      >
        {children}
      </Field>
    </Container>
  );
};
