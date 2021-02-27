import React from "react";
import { connect } from 'react-redux';
import { FeedActions } from '../../../actions/feedActions';
import { SendState } from "../../../enums/sendstate";
import { Redirect } from "react-router-dom";

import './style.css';

class EditFeedComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            feedTitle: '',
            feedContent: '',
            redirect: null
        };

        this.handleFeedContentChange = this.handleFeedContentChange.bind(this);
        this.handleFeedTitleChange = this.handleFeedTitleChange.bind(this);
        this.updateFeed = this.updateFeed.bind(this);
        this.handleRedirect = this.handleRedirect.bind(this);
    }

    componentDidMount(prevProps) {
        const splittedPaths = window.location.pathname.split('/');
        this.props.getFeedFromMyFeedReducer(splittedPaths[splittedPaths.length-1]);        
    }

    componentDidUpdate(prevProps) {
        if (this.props.feedItem !== prevProps.feedItem) {
           this.handleFeedContentChange(this.props.feedItem.item.content);
           this.handleFeedTitleChange(this.props.feedItem.item.title);
        }

        if (this.props.updateFeedState !== prevProps.updateFeedState && 
            this.props.updateFeedState === SendState.SUCCESS) {
            this.handleRedirect();
        }
    }

    handleRedirect() {
        this.setState({redirect: '/home'});
    }


    handleFeedContentChange(aContent) {
        this.setState({
            feedContent: aContent
        });
    }

    handleFeedTitleChange(aTitle) {
        this.setState({
            feedTitle: aTitle
        });
    }

    updateFeed() {
        this.props.updateFeed({
            id: this.props.feedItem.id,
            item: {
                title: this.state.feedTitle,
                content: this.state.feedContent
            }
        }, this.props.userCredentials.token);
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }

        return (
            <div className='edit-feed-component'>
                <div className="feed-text-areas">
                    <div className="feed-text-area">
                        <label>Feed Title:</label>
                        <input type="text" value={this.state.feedTitle} onChange={e => this.handleFeedTitleChange(e.target.value)} />
                    </div>
                    <div className="feed-text-area">
                        <label>Feed Content:</label>
                        <input type="text" value={this.state.feedContent} onChange={e => this.handleFeedContentChange(e.target.value)} />
                    </div>
                </div>
                <button type='button' onClick={() => this.updateFeed()}>Update Feed</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        feedItem: state.feedReducer.myFeedToEdit,
        userCredentials: state.loginReducer.userCredentials,
        updateFeedState: state.feedReducer.updateFeedState
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getFeedFromMyFeedReducer: (aFeedId) => {
            dispatch(FeedActions.getFeedFromMyFeedReducer(aFeedId))
        },
        updateFeed: (aFeed, aToken) => {
            dispatch(FeedActions.updateFeed(aFeed, aToken))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditFeedComponent);