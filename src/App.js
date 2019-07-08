import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: props.title,
            counter: 0,
        };
    }

    doAction() {
        this.setState({
            counter: this.state.counter + 1,
        });
    }

    render() {
        return (
            <div>
                <h1>{ this.state.title }</h1>
                <p>count: { this.state.counter }</p>
                <button onClick={ () => this.doAction() }>Click</button>
            </div>
        );
    }
}

export default App;
