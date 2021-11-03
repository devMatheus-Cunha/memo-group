import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";

// import App
import App from "./App";

// theme base colors
import baseColors from "./assets/styles/baseColors";

// global styles
import { GlobalStyle } from "./assets/styles/glogbalStyles";

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={baseColors}>
			<App />
			<GlobalStyle />
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById("root"),
);
