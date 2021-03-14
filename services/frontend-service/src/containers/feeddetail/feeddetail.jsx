import React from "react";
import { connect } from 'react-redux';
import { FeedActions } from '../../actions/feedActions';
import { CommentActions } from '../../actions/commentActions';
import { Label, Input, Button } from 'reactstrap';

import uuid from 'react-uuid';
import './style.css';

class FeedDetailComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: ''
        };

        this.handleAddComment = this.handleAddComment.bind(this);
        this.handleCommentChange = this.handleCommentChange.bind(this);
    }

    componentDidMount() {
        const splittedPaths = window.location.pathname.split('/');
        const feedId = splittedPaths[splittedPaths.length-1];

        if (feedId !== undefined) {
            this.props.getFeed(feedId, this.props.userCredentials.token);        
            this.props.getComments(feedId);   
        }
    }

    handleAddComment() {
        this.props.addComment(this.state.comment, this.props.feed.id, this.props.userCredentials.token);
        this.setState({ comment: '' });
    }

    handleCommentChange(aText) {
        this.setState({ comment: aText });
    }

    render() {
        return (
            <div className="feed-detail-component">
                {this.props.feed !== {} && this.props.feed !== undefined && this.props.feed.item !== undefined && (
                    <>
                        <div>{this.props.feed.item.title}</div>
                        <div>{this.props.feed.item.content}</div>
                    </>
                )}
                <hr />

                <div className="add-new-comment"> 
                    <Label for="fcomment">Add New Comment</Label>
                    <Input type="textarea" name="text" id="fcomment" value={this.state.comment} onChange={(e) => this.handleCommentChange(e.target.value)}/>
                    <Button type="button" id="fcomment" onClick={() => this.handleAddComment()}> Add </Button>
                </div>

                <hr />

                {this.props.comments !== {} && (
                    this.props.comments.map((cmt, i) => (
                        <div className="comment-element" key={uuid()}>
                            <span>{`${i + 1}) `}</span>
                            <div className="comment-text">{cmt.comment}</div>
                            <span className="comment-creation">{cmt.createdAt}</span>
                            <br />
                        </div>
                    ))
                )}
    
            </div>
      )
    }
}

const mapStateToProps = (state) => {
    return {
        feed: state.feedReducer.feed,
        comments: state.commentReducer.comments,
        userCredentials: state.loginReducer.userCredentials
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getFeed: (aFeedId, aToken) => {
            dispatch(FeedActions.getFeed(aFeedId, aToken))
        },
        getComments: (aFeedId) => {
            dispatch(CommentActions.getComments(aFeedId))
        },
        addComment: (aComment, aFeedId, aToken) => {
            dispatch(CommentActions.addComment(aComment, aFeedId, aToken))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FeedDetailComponent);