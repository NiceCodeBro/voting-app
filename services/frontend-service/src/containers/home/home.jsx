import React from "react";
import { connect } from 'react-redux';
import { FeedActions } from '../../actions/feedActions';
import uuid from 'react-uuid';
import { FeedComponent } from "../../components/feed/feed";
import './style.css';

class HomeComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: ''
        };

        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleContentChange = this.handleContentChange.bind(this);
    }

    componentDidMount() {
        this.props.getFeeds();
    }

    handleTitleChange(aText) {
        this.setState({
            title: aText
        });
    }

    handleContentChange(aText) {
        this.setState({
            content: aText
        });
    }
      
    handleAddComment() {
        if (this.state.title !== '' && this.state.content !== '') {
            this.props.addFeed({title: this.state.title, content:this.state.content}, this.props.userCredentials.token);
        }
 
        this.setState({title: '',content: ''});
    }

    render() {
        return (
            <div>
                <br/>
                {this.props.userCredentials !== undefined && (
                    <div className="create-feed-area">
                        <div className="feed-text-areas">
                            <div className="feed-text-area">
                                <label>Feed Title:</label>
                                <input type="text" value={this.state.title} 
                                       onChange={e => this.handleTitleChange(e.target.value)} 
                                />
                            </div>
                            <div className="feed-text-area">
                                <label>Feed Content:</label>
                                <input type="text" value={this.state.content} 
                                       onChange={e => this.handleContentChange(e.target.value)}
                                />
                            </div>
                        </div>
                        <button type='button' onClick={() => this.handleAddComment()}>Create New Feed</button>
                    </div>
                )}
                <br/>
                {
                    this.props.feeds && this.props.feeds.map((feed) => (
                        <FeedComponent key={uuid()} feed={feed}  isHasActions={false}/>
                    ))
                }
            </div>
      )
    }
}

const mapStateToProps = (state) => {
    return {
        comments: state.feedReducer.comments,
        feeds: state.feedReducer.feeds,
        userCredentials: state.loginReducer.userCredentials
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getFeeds: () => {
            dispatch(FeedActions.getFeeds())
        },
        addFeed: (aFeed, aToken) => {
            dispatch(FeedActions.addFeed(aFeed, aToken))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);