import React, { Component } from 'react';
import './App.css';
import Memo from './memo/Memo';
import AddForm from './memo/AddForm';
import FindForm from './memo/FindForm';
import DeleteForm from './memo/DeleteForm';

// Appコンポーネント
class App extends Component {
    render() {
        return (
            <div>
                <h1>Memo</h1>
                <AddForm />
                <hr />
                <table>
                    <tbody>
                        <tr>
                            <td><FindForm /></td>
                            <td><DeleteForm /></td>
                        </tr>
                    </tbody>
                </table>
                <Memo />
            </div>
        );
    }
}

export default App;
