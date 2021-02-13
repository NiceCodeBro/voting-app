import React from "react";
import { Navbar, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import LoginRegisterModal from '../../components/loginregistermodal/loginregistermodal';
import { LoginActions } from '../../actions/loginActions';
import { Link } from "react-router-dom";
import './style.css';

class HeaderComponent extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isLoginModalOpen: false,
            isRegisterModalOpen: false
        };

        this.handleLoginModalOpen = this.handleLoginModalOpen.bind(this);
        this.handleLoginModalClose = this.handleLoginModalClose.bind(this);        
        this.handleRegisterModalOpen = this.handleRegisterModalOpen.bind(this);
        this.handleRegisterModalClose = this.handleRegisterModalClose.bind(this);
    }

    handleLoginModalOpen() {
        this.setState({
            isLoginModalOpen: true
        })
    }

    handleLoginModalClose() {
        this.setState({
            isLoginModalOpen: false
        })
    }

    handleRegisterModalOpen() {
        this.setState({
            isRegisterModalOpen: true
        })
    }

    handleRegisterModalClose() {
        this.setState({
            isRegisterModalOpen: false
        })
    }

    render() {
        return (
            <div className="header-component">
                <Navbar className="navbar" bg="dark" variant="dark">
                    <Navbar.Brand href="#home">
                        Voting App
                    </Navbar.Brand>
                    <div className="header-buttons">
                        {this.props.userCredentials !== undefined  ? (
                            <>
                                <Link to="/home">
                                    <Button color="inherit">Home</Button>
                                </Link>
                                <Link to="/me">
                                    <Button color="inherit">Me</Button>
                                </Link>
                                <Button color="inherit" onClick={() => this.props.logout()}>
                                    Logout
                                </Button>
                            </>
                        ) : (
                            <>
                                <Button variant="outline-info" onClick={() => this.handleLoginModalOpen()}>
                                        Login
                                </Button>
                                <Button variant="outline-info" onClick={() => this.handleRegisterModalOpen()}>
                                        Register
                                </Button>
                            </>
                        )}
                    </div>
                </Navbar>    
                {this.state.isLoginModalOpen && 
                    <LoginRegisterModal 
                        onModalClose={() => this.handleLoginModalClose()} 
                        onAccept={this.props.login} 
                        show={this.state.isLoginModalOpen} 
                        modalType="Login" 
                    />}
                {this.state.isRegisterModalOpen && 
                    <LoginRegisterModal 
                        onModalClose={() => this.handleRegisterModalClose()} 
                        onAccept={this.props.register} 
                        show={this.state.isRegisterModalOpen} 
                        modalType="Register" 
                    />}
            </div> 
      )
    }
}

const mapStateToProps = (state) => {
    return {
        userCredentials: state.loginReducer.userCredentials
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => {
            dispatch(LoginActions.logout())
        },
        login: (aEmail, aPassword) => {
            dispatch(LoginActions.login(aEmail, aPassword))
        },
        register: (aEmail, aPassword) => {
            dispatch(LoginActions.register(aEmail, aPassword))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);
