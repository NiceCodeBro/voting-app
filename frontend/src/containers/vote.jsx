import React from "react";
import { connect } from 'react-redux';
import { addComment } from '../actions/voteActions'
import { CommentComponent } from '../components/comment';

class VoteComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            textValue: ''
        };

        this.handleTextChange = this.handleTextChange.bind(this);
      }

    handleTextChange(aText) {
        this.setState({
            textValue: aText
        });
    }
      
    handleAddComment() {
        this.props.addComment(this.state.textValue);
        this.setState({
            textValue: ''
        });
    }

    render() {
        return(
            <div>
                <h2>{this.props.counter}</h2>
                <input type="text" value={this.state.textValue} onChange={e => this.handleTextChange(e.target.value)} />
    
                <button type='button' onClick={() => this.handleAddComment()}>+</button>
                {
                    this.props.comments && this.props.comments.map((comment) => (
                        <CommentComponent comment={comment} />
                    ))
                }
            </div>
      )
    }
}

const mapStateToProps = (state) => {
    return {
        comments: state.voteReducer.comments
    }
  }

const mapDispatchToProps = (dispatch) => {
    return {
        addComment: (aComment) => {
            dispatch(addComment(aComment))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VoteComponent);