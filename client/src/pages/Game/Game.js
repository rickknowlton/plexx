import React, {Component} from 'react';
import { Row, Container, Nav, Footer } from './m-components'
import Game from './components/Game';
import { Input } from 'react-materialize';
import '../src/css/container.css'
import Modal from './components/Modal';


class App extends Component {
  state = {
    show: false,
  }

  showModal = () => {
    this.setState({
      ...this.state,
      show: !this.state.show
    });
  }

  render() {
    return (
      <Container>
        <Nav
          title="plexx"
        />

        <input className="waves-effect waves-light btn cyan" type="button"
          onClick={this.showModal}
          value="Show Modal" />

        <Modal className="input-field" onClose={this.showModal} show={this.state.show}>
              Register Your Account       
              <Row>
    <Input s={12} type="email" label="Email" />
    <Input s={12} type="password" label="Password" />
</Row>
        </Modal>

        <Game
        />
        <Footer
        />
      </Container>
    );
  }
}

export default App;