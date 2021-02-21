    
import React from "react";
import { Button } from 'react-bootstrap';
import './style.css';

export class FeedComponent extends React.Component {
    render() {
        return (
            <div className="feed-component">
                <div className="feed-title">{this.props.feed.item.title}</div>
                <div className="feed-content">{this.props.feed.item.content}</div>
                <br/>
                <div className="creation-date">Created at: {new Date(this.props.feed.createdAt).toISOString()}</div>
                <div className="actions">
                    <Button color="secondary" onClick={() => this.props.onDeleteClicked(this.props.feed.id)}>delete</Button>
                </div>
            </ div>
      )
    }
}