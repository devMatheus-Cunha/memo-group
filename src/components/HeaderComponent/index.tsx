import React from "react";

// components
import { ButtonComponent } from "../ButtonComponent";

// images
import logoImg from "../../assets/img/logo/logo-memo-lab.svg"

// styles
import { Container, Exit, Logo } from "./styles";

const HeaderComponent: React.FC = () => {
	return (
		<Container>
			<Logo src={logoImg} alt="Logo MeMo Lab" />
			<Exit>
				<ButtonComponent
					type="button"
					text="Sair"
					icon="exit"
					fontSize="14px"
					size="5px 10px"
				/>
			</Exit>
		</Container>
	);
};

export default HeaderComponent;
