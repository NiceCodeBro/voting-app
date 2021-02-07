

import React from "react";
import { Navbar, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import  LoginModal from './LoginModal'

class HeaderComponent extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isLoginModalOpen: false
        };

        this.handleLoginModalOpen = this.handleLoginModalOpen.bind(this);
        this.handleLoginModalClose = this.handleLoginModalClose.bind(this);
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


    render() {
        return(
            <>
                <Navbar bg="dark" variant="dark" style={{justifyContent:'space-between', }}>
                    <Navbar.Brand href="#home">
                        Voting App
                    </Navbar.Brand>
                    {this.props.userCredentials === undefined ? <Button variant="outline-info" 
                            style={{width:'100px', height: '35px', float: 'right'}}
                            onClick={() => this.handleLoginModalOpen()}>
                        Login
                    </Button> : <span style={{color:'white'}}>{this.props.userCredentials.user.email}</span>}
                </Navbar>    
                {this.state.isLoginModalOpen && <LoginModal onModalClose={() => this.handleLoginModalClose()} show={this.state.isLoginModalOpen}/>}
            </> 
      )
    }
}

const mapStateToProps = (state) => {
    return {
        userCredentials: state.loginReducer.userCredentials
    }
  }

const mapDispatchToProps = (dispatch) => {return {}}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);
