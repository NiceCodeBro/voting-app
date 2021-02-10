import React from "react";
import { Modal, Button } from 'react-bootstrap';
import { connect } from 'react-redux';

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
        return(
            <Modal
                show={this.props.show}
                onHide={this.props.onModalClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                <Modal.Title>
                    {
                        this.props.modalType
                    }
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <label>
                        Username: 
                        <input type="text" value={this.state.email} onChange={e => this.handleEmailChange(e.target.value)} />
                    </label>
                    <label>
                        Password: 
                        <input type="text" value={this.state.password} onChange={e => this.handlePasswordChange(e.target.value)} />
                    </label>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" 
                        onClick={this.props.onModalClose}
                        style={{width:'100px', height: '35px'}}
                >
                    Close
                </Button>
                <Button 
                    variant="primary" 
                    style={{width:'100px', height: '35px'}}
                    onClick={() => this.handleAccept()}
                >
                    Accept
                </Button>
                </Modal.Footer>
            </Modal>
      )
    }
}

export default connect(null, null)(LoginRegisterModal);