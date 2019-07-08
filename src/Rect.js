import React, { Component } from 'react';

class Rect extends Component {
    constructor(props) {
        super(props);

        this.style = {
            backgroundColor: props.color,
            position: 'absolute',
            left: props.x + 'px',
            top: props.y + 'px',
            width: props.width + 'px',
            height: props.height + 'px',
            borderRadius: props.radius + 'px',
        };
    }

    render() {
        return <div style={ this.style }></div>;
    }
}

export default Rect;