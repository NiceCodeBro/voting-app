import React from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router";

const AuthRoute = props => {
    const { userCredentials, type } = props;
    if (type === "guest" && userCredentials !== undefined) return <Redirect to="/home" />;
    else if (type === "private" && userCredentials === undefined) return <Redirect to="/" />;
  
    return <Route {...props} />;
  };
  
const mapStateToProps = (state) => {
    return {
        userCredentials: state.loginReducer.userCredentials
    }
};
  
export default connect(mapStateToProps)(AuthRoute);
