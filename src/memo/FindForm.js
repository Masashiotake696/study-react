import React, { Component } from 'react';
import { connect } from 'react-redux';
import { findMemo } from './Action';

class FindForm extends Component {
    defaultState = {
        keyWord: ''
    };

    constructor(props) {
        super(props);

        this.state = this.defaultState;
    }

    doChange(event) {
        this.setState({
            keyWord: event.target.value
        });
    }

    doSubmit(event) {
        event.preventDefault();
        this.props.dispatch(findMemo(this.state.keyWord));
        this.setState(this.defaultState);
    }

    render() {
        return (
            <form onSubmit={ (event) => { this.doSubmit(event) }}>
                <input
                    type="text"
                    onChange={ (event) => { this.doChange(event) }}
                    value={ this.state.keyWord } />
                <input type="submit" value="Find" />
            </form>
        );
    }
}

export default FindForm;