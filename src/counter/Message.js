import React, { Component } from 'react';
import { connect } from 'react-redux';

class Message extends Component {
    render() {
        return (
            <p>
                {this.props.message}: {this.props.counter}
            </p>
        );
    }
}

export default connect((store) => store)(Message);