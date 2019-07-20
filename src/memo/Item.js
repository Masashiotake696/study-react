import React, { Component } from 'react';

class Item extends Component {
    render() {
        const created_at = this.props.item.created_at;

        return (
            <tr>
                <th>No. { this.props.item.id }</th>
                <td>{ this.props.item.message }</td>
                <td>{ `${created_at.getFullYear()}-${created_at.getMonth() + 1}-${created_at.getDate()} ${created_at.getHours()}:${created_at.getMinutes()}:${created_at.getSeconds()}` }</td>
            </tr>
        );
    }
}

export default Item;