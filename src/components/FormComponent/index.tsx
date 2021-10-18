import React, { ReactNode } from "react";

// formik
import { Formik, Form, FormikValues } from "formik";

// tyope
type FormComponentProps = {
  onSubmit: (values: any) => void;
  initialValues: FormikValues;
  children: ReactNode;
};

export const FormComponent = ({
	onSubmit,
	initialValues,
	children,
}: FormComponentProps) => {
	return (
		<Formik onSubmit={onSubmit} initialValues={initialValues}>
			<Form>
				{children}
			</Form>
		</Formik>
	);
};
