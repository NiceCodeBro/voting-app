import React from "react";
import { connect } from 'react-redux';
import { FeedActions } from '../../actions/feedActions';
import uuid from 'react-uuid';
import './style.css';

class MeComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.props.getMyFeeds(this.props.userCredentials.token, this.props.userCredentials.user.email)
    }

    render() {
        return (
            <div>
                Me Component
                {
                    this.props.feeds.map((feed) => <li key={uuid()}>{feed.id}</li>)
                }
            </div>
      )
    }
}

const mapStateToProps = (state) => {
    return {
        userCredentials: state.loginReducer.userCredentials,
        feeds: state.feedReducer.myFeeds
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getMyFeeds: (aToken, aEmail) => {
            dispatch(FeedActions.getMyFeeds(aToken, aEmail))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MeComponent);