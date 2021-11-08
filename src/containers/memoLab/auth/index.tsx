import React from "react"

// components
import { HeaderComponent } from "../../../components/HeaderComponent"

// images
import logoImg from "../../../assets/img/logo/logo-memo-lab.svg"

// styles
import { Container } from "./styles"

export default function AuthContainer() {
	return (
		<Container>
			<HeaderComponent logo={logoImg} />
		</Container>
	)
}
