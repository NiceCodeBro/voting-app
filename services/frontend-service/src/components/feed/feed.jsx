    
import React from "react";
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

import './style.css';

export class FeedComponent extends React.Component {
    render() {
        console.log(this.props.feed)
        return (
            <div className="feed-component">
                <div className="feed-title">{this.props.feed.item.title}</div>
                <div className="feed-content">{this.props.feed.item.content}</div>
                <br/>
                <div className="creation-date">Created at: {new Date(this.props.feed.createdAt).toISOString()}</div>
                {this.props.isHasActions && <div className="actions">
                    <Link to={`/me/editfeed/${this.props.feed.id}` }>
                        <Button color="inherit">edit</Button>
                    </Link>
                    <Button color="secondary" onClick={() => this.props.onDeleteClicked(this.props.feed.id)}>delete</Button>
                </div>}
            </ div>
      )
    }
}