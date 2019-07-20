import React, { Component } from 'react';
import { connect } from 'react-redux';
import Item from './Item';

class Memo extends Component {
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