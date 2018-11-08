// import React, {Component} from 'react';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { Container, Nav, Footer, Modal } from './m-components'
// import Home from "./pages/Home";
// import Register from "./pages/Register";
// import NoMatch from "./pages/NoMatch";
// import Game from './components/Game';
// import '../src/css/container.css'

// class App extends Component {

//   render() {
//     return (
//       <Container>
//         <Nav
//           title="plexx"
//         />
//         <Game
//         />
//         <Footer
//         />
//       </Container>
//     );
//   }
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Game from "./pages/Game";
import NoMatch from "./pages/NoMatch";

const App = () => (
  	<div>
		<Router>
			<div>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/register" component={Register} />
          			<Route exact path="/game" component={Game} />
					<Route component={NoMatch} />
				</Switch>
			</div>
		</Router>
	</div>
);

export default App;
