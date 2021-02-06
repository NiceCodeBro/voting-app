import React from "react";
import { Modal, Button } from 'react-bootstrap';

export class LoginModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
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
                <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <label>
                        Username: 
                        <input/>
                    </label>
                    <label>
                        Password: 
                        <input/>
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
                >Login</Button>
                </Modal.Footer>
            </Modal>
      )
    }
}