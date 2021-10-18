import React from "react";

// components
import { FormComponent } from "./components/FormComponent";
import { InputComponent } from "./components/InputComponent";
import { ButtonComponent } from "./components/ButtonComponent";
import { Form, Formik } from "formik";

function App() {
  const handleSubmit = (values: any) => {
    console.log(values);
  };
  const person = {
    name: "",
    age: "",
    profession: "",
  };

  return (
    <FormComponent onSubmit={handleSubmit} initialValues={person}>
        <>
          <InputComponent
            id="name"
            name="name"
            placeholder="Digite seu nome..."
            label="Nome"
            width="100"
            type="text"
          />
          <InputComponent
            id="age"
            name="age"
            placeholder="Digite sua idade..."
            label="Idade"
            width="100"
            type="number"
          />
          <InputComponent
            id="profession"
            name="profession"
            placeholder="Digite sua profissão..."
            label="Profissão"
            width="100"
            type="text"
          />
          <ButtonComponent
            text="salvar"
            type="submit"
            icon="save"
          />
        </>
    </FormComponent>
  );
}

export default App;
