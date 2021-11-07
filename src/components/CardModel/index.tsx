import React from "react";

// components
import { AiOutlineInfoCircle } from "react-icons/ai";

// icons
import { ButtonComponent } from "../ButtonComponent";

// styles
import {
	Container,
	Content,
	ContentButton,
	ContentTileAndSubtitle,
	Logo,
	Subtitle,
	Title,
} from "./styles";

// interface
interface ICardModelProps {
  logo?: string;
  title: string;
  subtitle: string;
}

const CardModel = ({
	logo,
	title,
	subtitle,
}: ICardModelProps) => {
	return (
		<Container>
			<Content>
				{
					logo && 	<Logo src={logo} />
				}
				<ContentTileAndSubtitle>
					<Title>
						<h3>{title}</h3>
						<button type="button">
							<AiOutlineInfoCircle />
						</button>
					</Title>
					<Subtitle>
						{subtitle}
					</Subtitle>
				</ContentTileAndSubtitle>
				<ContentButton>
					<ButtonComponent text="Acessar" type="button" access />
				</ContentButton>
			</Content>
		</Container>
	);
};

export default CardModel;
