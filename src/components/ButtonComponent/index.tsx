import React, { ReactElement } from "react";

// chakra
import { Button } from "@chakra-ui/react";

// icons
import {
  MdOutlineSaveAlt,
  MdOutlineAdd,
  MdOutlineExitToApp,
} from "react-icons/md";
import { FiFilter } from "react-icons/fi";

// styles
import { Container } from "./styles";

type HandleButtonComponentProps = {
  text: string;
  loading?: boolean;
  style?: "cancel" | "back" | undefined;
  icon?: "save" | "filter" | "report" | "exit";
  type: "button" | "submit" | "reset" | undefined;
  handleSubmit?: (() => void) | undefined;
  size?: string;
  fontSize?: string;
};

export function ButtonComponent({
  text,
  loading,
  icon,
  handleSubmit,
  type,
  style,
  size,
  fontSize,
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
      case "exit":
        return <MdOutlineExitToApp />;

      default:
        break;
    }
  }

  return (
    <Container>
      <Button
        className={style ? "CancelAndButton" : ""}
        rightIcon={chakeIcon() as ReactElement}
        variant="solid"
        onClick={handleSubmit}
        type={type}
        padding={size}
        fontSize={fontSize}
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
