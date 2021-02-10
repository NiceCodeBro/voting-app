import React from "react";
import { Navbar, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import LoginRegisterModal from '../components/loginregistermodal';
import { LoginActions } from '../actions/loginActions'

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
        return(
            <>
                <Navbar bg="dark" variant="dark" style={{justifyContent:'space-between', }}>
                    <Navbar.Brand href="#home">
                        Voting App
                    </Navbar.Brand>
                    {this.props.userCredentials === undefined                    ? 
                    <div style={{style:'flex', flexDirection:'row'}}>
                        <Button variant="outline-info" 
                                style={{width:'100px', height: '35px', float: 'right'}}
                                onClick={() => this.handleLoginModalOpen()}>Login
                        </Button>
                        <Button variant="outline-info" 
                                style={{width:'100px', height: '35px', float: 'right'}}
                                onClick={() => this.handleRegisterModalOpen()}>Register
                        </Button>
                    </div>                                                     : 
                    <span style={{color:'white'}}>{this.props.userCredentials.user.email}
                        <Button variant="outline-info" 
                                style={{width:'100px', height: '35px', float: 'right'}} 
                                onClick={() => this.props.logout()}>Logout
                        </Button>
                    </span>}
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
            </> 
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
