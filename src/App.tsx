import React from "react";

// components
import { FormComponent } from "./components/FormComponent";

// formik
import { Field } from "formik";

function App() {
  const handleSubmit = (values: any) => {
    console.log(values);
  };
  return (
    <>
      <FormComponent
        onSubmit={handleSubmit}
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
        }}
      >
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
      </FormComponent>
    </>
  );
}

export default App;
