import React from "react";

// components
import { ButtonComponent } from "../ButtonComponent";

// styles
import { Container, Exit, Logo } from "./styles";

// interface
interface IHeaderComponentProps {
  logo: string;
  home?: boolean;
}

export const HeaderComponent = ({ logo, home }: IHeaderComponentProps) => {
	return (
		<Container>
			<Logo src={logo} alt="Logo MeMo" />
			{!home && (
				<Exit>
					<ButtonComponent
						type="button"
						text="Sair"
						icon="exit"
						fontSize="14px"
						size="5px 10px"
					/>
				</Exit>
			)}
		</Container>
	);
};
