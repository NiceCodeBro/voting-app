

import React from "react";
import { Navbar } from 'react-bootstrap';
import { connect } from 'react-redux';

class HeaderComponent extends React.PureComponent {
    render() {
        return(
            <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">
                Voting App
            </Navbar.Brand>
        </Navbar>        
      )
    }
}

export default connect(null, null)(HeaderComponent);