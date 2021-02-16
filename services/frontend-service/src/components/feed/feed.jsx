    
import React from "react";
import './style.css';

export class FeedComponent extends React.Component {
    componentDidUpdate() {
        console.log(this.props)
    }
    render() {
        return (
            <div className="feed-component">
                <div className="feed-title">{this.props.feed.item.title}</div>
                <div className="feed-content">{this.props.feed.item.content}</div>
                <br/>
                <div className="creation-date">Created at: {new Date(this.props.feed.createdAt).toISOString()}</div>
            </ div>
      )
    }
}