import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Item from './Item';

class Memo extends Component {
    static propTypes = {
        isFound: PropTypes.bool.isRequired,
        foundItems: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                message: PropTypes.string.isRequired,
                created_at: PropTypes.string.isRequired,
            })
        ),
        items: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                message: PropTypes.string.isRequired,
                created_at: PropTypes.string.isRequired,
            })
        )
    }

    render() {
        let items = [];
        if (this.props.isFound) {
            items = this.props.foundItems.map((foundItem) => (
                <Item key={ foundItem.id } item={ foundItem } />
            ));
        } else {
            items = this.props.items.map((foundItem) => (
                <Item key={ foundItem.id } item={ foundItem } />
            ));
        }

        return (
            <table>
                <tbody>{ items }</tbody>
            </table>
        );
    }
}

// ストアを参照するためconnectする
export default connect((state) => state)(Memo);