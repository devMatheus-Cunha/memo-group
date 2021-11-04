import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

// views
import Auth from "../view/memoLab/auth";
import CreateAccount from "../view/memoLab/auth/create";
import Home from "../view/memoLab/home";
import MeMoControl from "../view/memoLab/products/MeMoControl";
import MeMoFinance from "../view/memoLab/products/MeMoFinance";
import MeMoShare from "../view/memoLab/products/MeMoShare";

export default function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Auth} />
				<Route exact path="/create" component={CreateAccount} />
				<Route exact path="/home/:id" component={Home} />
				<Route
					exact
					path="/home/:id/memoShare/:memoShareId"
					component={MeMoShare}
				/>
				<Route exact path="/home/:id/memoControl" component={MeMoControl} />
				<Route exact path="/home/:id/memoFinance" component={MeMoFinance} />
			</Switch>
		</BrowserRouter>
	);
}
