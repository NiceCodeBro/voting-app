    
import React from "react";
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";

import './style.css';

export class FeedComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            redirect: null
        };

        this.handleRedirect = this.handleRedirect.bind(this);
    }

    handleRedirect() {
        if (this.props.hasActions) {
            this.setState({redirect: `/feeddetails/${this.props.feed.id}`});
        }
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        return (
            <div className="feed-component">
                <div onClick={() => this.handleRedirect()}>
                    <div className="feed-title">{this.props.feed.item.title}</div>
                    <div className="feed-content">{this.props.feed.item.content}</div>
                    <br/>
                    <div className="creation-date">Created at: {new Date(this.props.feed.createdAt).toISOString()}</div>
                </div>
                <hr/>
                {this.props.hasActions && <div className="actions">
                    <Link to={`/me/editfeed/${this.props.feed.id}` }>
                        <Button color="inherit">edit</Button>
                    </Link>
                    <Button color="secondary" onClick={() => this.props.onDeleteClicked(this.props.feed.id)}>delete</Button>
                </div>}
            </ div>
      )
    }
}