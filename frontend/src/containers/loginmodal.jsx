import React from "react";
import { Modal, Button } from 'react-bootstrap';
import { LoginActions } from '../actions/loginActions';
import { connect } from 'react-redux';

class LoginModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleLoginProcess = this.handleLoginProcess.bind(this);        
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

    handleLoginProcess() {
        this.props.login(this.state.email, this.state.password);
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
                <Modal.Title>Login</Modal.Title>
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
                    onClick={() => this.handleLoginProcess()}
                >
                    Login
                </Button>
                </Modal.Footer>
            </Modal>
      )
    }
}

const mapStateToProps = (state) => {return {}}
const mapDispatchToProps = (dispatch) => {
    return {
        login: (aEmail, aPassword) => {
            dispatch(LoginActions.login(aEmail, aPassword))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginModal);