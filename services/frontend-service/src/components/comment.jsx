    

import React from "react";

export class CommentComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            vote: 0
        };

        this.handleDecrement = this.handleDecrement.bind(this);
        this.handleIncrement = this.handleIncrement.bind(this);
      }

    handleDecrement() {
        this.setState((aState) => ({
            vote: aState.vote - 1
        }));
    }

    handleIncrement() {
        this.setState((aState) => ({
            vote: aState.vote + 1
        }));
    }

    render() {
        return(
            <div>
                {this.props.comment} <span>{this.state.vote}</span>
                <button type='button' onClick={() => this.handleDecrement()}>-</button>
                <button type='button' onClick={() => this.handleIncrement()}>+</button>
            </div>
      )
    }
}