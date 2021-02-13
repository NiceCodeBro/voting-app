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
            textValue: ''
        };

        this.handleTextChange = this.handleTextChange.bind(this);
    }

    componentDidMount() {
        this.props.getFeeds();
    }

    handleTextChange(aText) {
        this.setState({
            textValue: aText
        });
    }
      
    handleAddComment() {
        this.props.addFeed(this.state.textValue, this.props.userCredentials.token);
        this.setState({
            textValue: ''
        });
    }

    render() {
        return (
            <div>
                <br/>
                {this.props.userCredentials !== undefined && (<div>
                    <input type="text" value={this.state.textValue} onChange={e => this.handleTextChange(e.target.value)} />
                    <button type='button' onClick={() => this.handleAddComment()}>+</button>
                </div>)}
                <br/>
                {
                    this.props.feeds && this.props.feeds.map((feed) => (
                        <FeedComponent key={uuid()} title={feed.id}/>
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