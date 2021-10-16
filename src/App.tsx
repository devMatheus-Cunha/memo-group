import React from "react";

// components
import { FormComponent } from "./components/FormComponent";

function App() {
  const handleSubmit = (): void => {
    {
      console.log("yes subimit");
    }
  };
  return (
    <>
      <FormComponent />
    </>
  );
}

export default App;
