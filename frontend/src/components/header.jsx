

import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { LoginModal } from './LoginModal'
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
                    <Button variant="outline-info" 
                            style={{width:'100px', height: '35px', float: 'right'}}
                            onClick={() => this.handleLoginModalOpen()}>
                        Login
                    </Button>
                </Navbar>    
                <LoginModal onModalClose={() => this.handleLoginModalClose()} show={this.state.isLoginModalOpen}/> 
            </>   
      )
    }
}

export default connect(null, null)(HeaderComponent);