import React from "react";

// components
import { HandleButtonComponent } from "./components/HandleButton";

function App() {
  const handleSubmit = (): void => {
    {console.log("yes subimit")
  }
  };
  return (
    <>
      <HandleButtonComponent
        text="Salvar"
        loading={false}
        icon="save"
        handleSubmit={handleSubmit}
        type="submit"
      />
    </>
  );
}

export default App;
