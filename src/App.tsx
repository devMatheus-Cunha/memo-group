import React from "react";

// components
import { FormComponent } from "./components/FormComponent";
import { InputComponent } from "./components/InputComponent";

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
        {/* {({ values, setFieldValues }) => ( */}
        <>
          <InputComponent
            id="name"
            name="name"
            placeholder="Digite seu nome..."
            label="Nome"
            required
            width="100"
          />
        </>
      </FormComponent>
    </>
  );
}

export default App;
