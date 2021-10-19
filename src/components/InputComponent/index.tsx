import React, { ReactNode } from "react";

// formik
import { Field } from "formik";

// styles
import { Container } from "./styles";

// type
type InputComponentProps = {
  id: string;
  name: string;
  placeholder?: string;
  label?: string;
  required?: boolean;
  width?: string;
  type: string
  children?: ReactNode
};

export const InputComponent = ({
	id,
	name,
	placeholder,
	label,
	children,
	width,
	required,
	type,
}: InputComponentProps) => {
	return (
		<Container>
			<label htmlFor={name}>{required ? `${label} *` : label}</label>
			<Field
				id={id}
				name={name}
				placeholder={placeholder}
				required={required}
				style={{ width: `${width}%` }}
				type={type}
			>
				{children}
			</Field>
		</Container>
	);
};
