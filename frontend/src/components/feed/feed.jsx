    
import React from "react";
import './style.css';

export class FeedComponent extends React.Component {
    render() {
        return (
            <div className="feed-component">
                <div className="feed-title">{this.props.title}</div>
                <div className="feed-content">{this.props.content}</div>
            </ div>
      )
    }
}