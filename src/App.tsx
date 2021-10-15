import React from "react";

// components
import { HandleButtonComponent } from "./components/HandleButton";

import { MdOutlineSaveAlt } from 'react-icons/md';

function App() {
  return (
    <>
      <HandleButtonComponent 
      Icon={MdOutlineSaveAlt} 
      text="Salvar" 
      />
    </>
  );
}

export default App;
