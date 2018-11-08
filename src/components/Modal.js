import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { cyan600 } from 'material-ui/styles/colors';
import '../css/container.css'


// gray background
const backdropStyle = {
    position: 'fixed',
    top: '15%',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 50
}

const modalStyle = {
    backgroundColor: "#18FFFF",
    borderRadius: 5,
    color: "#fff",
    maxWidth: 500,
    minHeight: 300,
    margin: '0 auto',
    padding: 30,
    position: "relative"
};

const footerStyle = {
    position: "absolute",
    bottom: 20,
    borderTop: '10px',
    borderTopColor: '#fff',
};

const btnStyle = {
    margin: "3px",
};

const modalRoot = document.getElementById("root");

export default class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.element = document.createElement("div");
    }
    onClose = (e) => {
        console.log("BUTTON CLICKED");
        e.stopPropagation ();
        this.props.onClose && this.props.onClose(e);
    }

    onKeyUp = (e) => {
        // Lookout for ESC key (27)
        if (e.which === 27 && this.props.show) {
            this.onClose(e);
        }
    }

    componentDidMount() {
        document.addEventListener("keyup", this.onKeyUp);
        modalRoot.appendChild(this.element);
    }

    componentWillUnmount() {
        document.removeEventListener("keyup", this.onKeyUp);
        modalRoot.removeChild(this.element);
    }

    render() {
        var modalUI = (
            <div style={backdropStyle}>
                <div style={modalStyle}>

                    {this.props.children}
                    <div style={footerStyle}>

                    <div className="modal-footer footerStyle">
                    <button className="waves-effect waves-light red lighten-2 btn" onClick={(e) => { this.onClose(e)}}>
                            Cancel
                        </button>
                        <button className="waves-effect waves-light cyan lighten-2 btn m-3" onClick={(e) => { this.onClose(e)}}>
                            Login
                        </button>
                        </div>
                </div>
                </div>
            </div>
        );
        if (!this.props.show) {
            return null;
        }
        return ReactDOM.createPortal (
            modalUI,
            this.element,
        );
    }
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired }
