import React, { Component } from 'react';
import Message from './counter/Message';
import Button from './counter/Button';
import './App.css';

// Appコンポーネント
class App extends Component {
    render() {
        return (
            <div>
                <h1>COUNTER</h1>
                <Message />
                <Button />
            </div>
        );
    }
}

export default App;
