import React from 'react';
import { Formik, Field, Form, FormikHelpers } from 'formik';

interface Values {
  firstName: string;
  lastName: string;
  email: string;
}

export const FormComponent: React.FC = () => {
  const sleep = (ms: any) => new Promise((r) => setTimeout(r, ms));
  return (
    <div>
    <h1>Signup</h1>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
      }}
        onSubmit={async (values) => {
          await sleep(500);
          console.log(values)
        }}
    >
      <Form>
        <label htmlFor="firstName">First Name</label>
        <Field id="firstName" name="firstName" placeholder="John" />

        <label htmlFor="lastName">Last Name</label>
        <Field id="lastName" name="lastName" placeholder="Doe" />

        <label htmlFor="email">Email</label>
        <Field
          id="email"
          name="email"
          placeholder="john@acme.com"
          type="email"
        />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  </div>
  );
}