import React from "react";

// components
import { ButtonComponent } from "./components/ButtonComponent";

function App() {
  const handleSubmit = (): void => {
    {
      console.log("yes subimit");
    }
  };
  return (
    <>
      <ButtonComponent
        text="Salvar"
        loading={false}
        handleSubmit={handleSubmit}
        type="submit"
        style="back"
      />
    </>
  );
}

export default App;
