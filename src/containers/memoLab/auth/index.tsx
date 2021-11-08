import React from "react";

// formiks
import { Form, Formik } from "formik";

// components
import { HeaderComponent } from "../../../components/HeaderComponent";
import { InputComponent } from "../../../components/InputComponent";
import { ButtonComponent } from "../../../components/ButtonComponent";

// images
import logoImg from "../../../assets/img/logo/logo-memo-lab.svg";

// styles
import {
	Container,
	Content,
	ContentPrimary,
	ContentSecundary,
	Title,
	ContentForm,
} from "./styles";

export default function AuthContainer() {
	return (
		<Container>
			<HeaderComponent logo={logoImg} home />
			<Content>
				<ContentPrimary>logo</ContentPrimary>
				<ContentSecundary>
					<Title>Fazer Login</Title>
					<ContentForm>
						<Formik
							onSubmit={(values) => console.log(values)}
							initialValues={{
								email: "",
								password: "",
							}}
						>
							<Form>
								<InputComponent
									id="email"
									name="email"
									type="text"
									label="Email"
								/>

								<InputComponent
									id="password"
									name="password"
									type="password"
									label="Senha"
								/>
								<ButtonComponent text="Logar" type="submit" size="10px" />
							</Form>
						</Formik>
					</ContentForm>
				</ContentSecundary>
			</Content>
		</Container>
	);
}
