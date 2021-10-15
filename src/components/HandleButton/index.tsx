import React from "react";

// chakra
import { Button } from "@chakra-ui/react";

export function HandleButtonComponent({ Icon, text }: any) {
  return (
    <Button
      rightIcon={<Icon />}
      variant="solid"
      boxShadow="md"
      background= "#00B5D8"
      color= "white"
    >
      {text}
    </Button>
  );
}
