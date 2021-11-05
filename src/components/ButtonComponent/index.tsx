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
	access?: boolean;
  cancelAndBack?: boolean;
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
	cancelAndBack,
	size,
	fontSize,
	access,
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
			return "";
		}
	}

	return (
		<Container access={access}>
			<Button
				className={cancelAndBack || access ? "CancelAndButton" : ""}
				rightIcon={chakeIcon() as ReactElement}
				variant="solid"
				onClick={handleSubmit}
				type={type}
				padding={size}
				fontSize={fontSize}
				background="#00A3C4"
				color="white"
				isLoading={loading}
				_hover={{
					background: "#0987A0",
				}}
				_active={{
					background: "#086F83",
				}}
			>
				{text}
			</Button>
		</Container>
	);
}
