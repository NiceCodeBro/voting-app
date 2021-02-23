import React from "react";
import { connect } from 'react-redux';
import { FeedActions } from '../../../actions/feedActions';
import './style.css';

class EditFeedComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            feedTitle: '',
            feedContent: ''
        };

        this.handleFeedContentChange = this.handleFeedContentChange.bind(this);
        this.handleFeedTitleChange = this.handleFeedTitleChange.bind(this);
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

    render() {
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
                <button type='button' onClick={() => this.handleAddComment()}>Update Feed</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state.feedReducer.myFeedToEdit)
    return {
        feedItem: state.feedReducer.myFeedToEdit
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getFeedFromMyFeedReducer: (aFeedId) => {
            dispatch(FeedActions.getFeedFromMyFeedReducer(aFeedId))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditFeedComponent);