import React, { Component } from 'react';

class Item extends Component {
    render() {
        return (
            <tr>
                <th>No. {this.props.item.id}</th>
                <td>{this.props.item.message}</td>
                <td>{this.props.item.created_at}</td>
            </tr>
        );
    }
}

export default Item;