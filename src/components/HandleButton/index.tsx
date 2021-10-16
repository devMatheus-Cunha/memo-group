import React from "react";

// chakra
import { Button } from "@chakra-ui/react";

// icons
import { MdOutlineSaveAlt, MdOutlineAdd } from "react-icons/md";
import { FiFilter } from "react-icons/fi";

// styles
import { Container } from "./styles";

export function HandleButtonComponent({ text }: any) {
  return (
    <Container>
      <Button
        rightIcon={<FiFilter />}
        iconS
        variant="solid"
        boxShadow="md"
        background="var(--cyan-600)"
        color="white"
        _hover={{
          background: "var(--cyan-700)",
        }}
        _active={{
          background: "var(--cyan-800)",
        }}
      >
        {text}
      </Button>
    </Container>
  );
}
