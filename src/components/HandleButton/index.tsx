import React, { ReactElement } from "react";

// chakra
import { Button } from "@chakra-ui/react";

// icons
import { MdOutlineSaveAlt, MdOutlineAdd } from "react-icons/md";
import { FiFilter } from "react-icons/fi";

// styles
import { Container } from "./styles";

type HandleButtonComponentProps = {
  text: string;
  loading?: boolean;
  icon?: "save" | "filter" | "report";
  type: "button" | "submit" | "reset" | undefined;
  handleSubmit: () => void;
};

export function HandleButtonComponent({
  text,
  loading,
  icon,
  handleSubmit,
  type,
}: HandleButtonComponentProps) {
  // function
  function chakeIcon() {
    switch (icon) {
      case "save":
        return <MdOutlineAdd />;
      case "filter":
        return <FiFilter />;
      case "report":
        return <MdOutlineSaveAlt />;

      default:
        break;
    }
  }

  return (
    <Container>
      <Button
        rightIcon={chakeIcon() as ReactElement}
        variant="solid"
        onClick={() => handleSubmit()}
        boxShadow="md"
        type={type}
        background="var(--cyan-600)"
        color="white"
        isLoading={loading}
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
