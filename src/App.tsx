import React from "react";
import CardModel from "./components/CardModel";

// routes
import Routes from "./routes/routes";

function App() {
	return (
		<>
			<Routes />
			<CardModel
				title="MeMo Share"
				subtitle="	Faça sua lista de conteudo e compartilhe com todos seus amigos e
						leve o maximo de conteudo a todos"
			/>
		</>
	);
}

export default App;
