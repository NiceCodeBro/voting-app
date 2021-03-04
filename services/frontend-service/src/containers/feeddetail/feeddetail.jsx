import React from "react";
import { connect } from 'react-redux';
import { FeedActions } from '../../actions/feedActions';
import './style.css';

class FeedDetailComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        const splittedPaths = window.location.pathname.split('/');
        this.props.getFeed(splittedPaths[splittedPaths.length-1], this.props.userCredentials.token);        
    }

    render() {
        return (
            <div className="feed-detail-component">
                {this.props.feed !== {} && this.props.feed.item !== undefined && (
                    <>
                        <div>{this.props.feed.item.title}</div>
                        <div>{this.props.feed.item.content}</div>
                    </>
                )}
            </div>
      )
    }
}

const mapStateToProps = (state) => {
    return {
        feed: state.feedReducer.feed,
        userCredentials: state.loginReducer.userCredentials
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getFeed: (aFeedId, aToken) => {
            dispatch(FeedActions.getFeed(aFeedId, aToken))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(FeedDetailComponent);