import React from "react";
import { connect } from 'react-redux';
import { FeedActions } from '../../actions/feedActions';
import './style.css';

class MeComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                Me Component
            </div>
      )
    }
}

export default connect(null, null)(MeComponent);