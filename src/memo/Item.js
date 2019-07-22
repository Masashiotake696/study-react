import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Item extends Component {
    static propTypes = {
        item: PropTypes.shape({
            id: PropTypes.number.isRequired,
            message: PropTypes.string.isRequired,
            created_at: PropTypes.string.isRequired,
        })
    };


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