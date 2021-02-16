import React from "react";
import { connect } from 'react-redux';
import { FeedActions } from '../../actions/feedActions';
import uuid from 'react-uuid';
import './style.css';
import { FeedComponent } from "../../components/feed/feed";

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
                <div className="user-portfolio">
                    <div className="email">{this.props.userCredentials.user.email}</div>
                    <br/>
                    <img src="https://www.dogalize.com/wp-content/uploads/2017/06/cat-300572_640-200x200.jpg" alt="example img"></img>
                </div>
                <br/>
                {
                    this.props.feeds.map((feed) => <FeedComponent key={uuid()} feed={feed}/>)
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