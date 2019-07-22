import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteMemo } from './Action';

class DeleteForm extends Component {
    static defaultStates = {
        id: 0,
    };

    constructor(props) {
        super(props);

        this.state = DeleteForm.defaultStates;
    }

    doChange(event) {
        this.setState({
            id: Number(event.target.value)
        });
    }

    doSubmit(event) {
        event.preventDefault();
        this.props.dispatch(deleteMemo(this.state.id));
        this.setState(DeleteForm.defaultStates);
    }

    render() {
        const items = this.props.items.map((item) => (
            <option
                key={ item.id }
                value={ item.id }>
                { item.message }
            </option>
        ));

        return (
            <div>
                <form onSubmit={ (event) => this.doSubmit(event) }>
                    <select defaultValue="-1" onChange={ (event) => this.doChange(event) }>
                        <option key="0" value="null"></option>
                        { items }
                    </select>
                    <input type="submit" value="Delete" />
                </form>
            </div>
        );
    }
}

export default connect((state) => state)(DeleteForm);