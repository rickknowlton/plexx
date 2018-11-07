import React, {Component} from 'react';
import { Container, Nav, Footer, Modal } from '../../m-components'
import Game from '../../components/Game';
import '../../css/container.css'

class App extends Component {

  render() {
    return (
      <Container>
        <Nav
          title="plexx"
        />
        <Game
        />
        <Footer
        />
      </Container>
    );
  }
}

export default App;