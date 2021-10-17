import React from "react";
import { Formik, Form } from "formik";

export const FormComponent = ({
  children,
  initialValues,
  handleSubmit,
  onSubmit,
}: any) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => onSubmit(values)}
    >
      <Form>{children}</Form>
    </Formik>
  );
};
