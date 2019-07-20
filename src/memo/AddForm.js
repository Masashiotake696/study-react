import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMemo } from './Action';

class AddForm extends Component {
    defaultState = {
        message: ''
    };

    constructor(props) {
        super(props);

        this.state = this.defaultState;
    }

    doChange(event) {
        this.setState({
            message: event.target.value
        });
    }

    doSubmit(event) {
        event.preventDefault();
        this.props.dispatch(addMemo(this.state.message));
        this.setState(this.defaultState);
    }

    render() {
        return (
            <div>
                <p>{ this.props.message }</p>
                <form onSubmit={ (event) => this.doSubmit(event) }>
                    <input
                        type="text"
                        value={ this.state.message }
                        onChange={ (event) => this.doChange(event) }
                        required />
                    <input type="submit" value="ADD" />
                </form>
            </div>
        );
    }
}

export default connect((state) => state)(AddForm);