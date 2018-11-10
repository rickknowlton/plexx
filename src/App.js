import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./pages/Register";
import Game from "./pages/Game";
import NoMatch from "./pages/NoMatch";

const App = () => (
  	<div>
		<Router>
			<div>
				<Switch>
					<Route exact path="/register" component={Register} />
          			<Route exact path="/" component={Game} />
					<Route component={NoMatch} />
				</Switch>
			</div>
		</Router>
	</div>
);

export default App;
