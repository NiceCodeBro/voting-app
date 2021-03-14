import React from "react";
import { Modal, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import './style.css';

class LoginRegisterModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleAccept = this.handleAccept.bind(this);        
    }

    handleEmailChange(aEmail) {
        this.setState({
            email: aEmail
        });
    }

    handlePasswordChange(aPassword) {
        this.setState({
            password: aPassword
        });
    }

    handleAccept() {
        this.props.onAccept(this.state.email, this.state.password);
        this.props.onModalClose();
    }

    render() {
        return (
            <Modal
                className="login-register-modal"
                show={this.props.show}
                onHide={this.props.onModalClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                <Modal.Title>{this.props.modalType}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="content">
                        <div className="row">
                            <label htmlFor="username">Username:</label>
                            <input name="username" type="text" value={this.state.email} onChange={e => this.handleEmailChange(e.target.value)} />
                        </div>
                        <div className="row">
                            <label htmlFor="password">Password:</label>
                            <input name="password" type="text" value={this.state.password} onChange={e => this.handlePasswordChange(e.target.value)} />
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={this.props.onModalClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={() => this.handleAccept()}>
                    Accept
                </Button>
                </Modal.Footer>
            </Modal>
      )
    }
}

export default connect(null, null)(LoginRegisterModal);