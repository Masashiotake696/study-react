import React, { Component } from 'react';
import { TYPE_INCREMENT } from './Const';
import { TYPE_DECREMENT } from './Const';
import { TYPE_RESET } from './Const';
import { connect } from 'react-redux';

class Button extends Component {
    doClick(event) {
        if (event.shiftKey) {
            this.props.dispatch({ type: TYPE_DECREMENT });
        } else if (event.ctrlKey) {
            this.props.dispatch({ type: TYPE_RESET });
        } else {
            this.props.dispatch({ type: TYPE_INCREMENT });
        }
    }

    render() {
        return (
            <button onClick={(event) => this.doClick(event)}>
                Click
            </button>
        );
    }
}

export default connect((store) => store)(Button);