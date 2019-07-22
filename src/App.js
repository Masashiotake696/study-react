import React, { Component } from 'react';
import Memo from './memo/Memo';
import AddForm from './memo/AddForm';
import FindForm from './memo/FindForm';
import DeleteForm from './memo/DeleteForm';
import PersistForm from './memo/PersistForm';
import './App.css';

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
                            <td><PersistForm /></td>
                        </tr>
                    </tbody>
                </table>
                <Memo />
            </div>
        );
    }
}

export default App;
