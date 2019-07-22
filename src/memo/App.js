import React, { Component } from 'react';
import Memo from './Memo';
import AddForm from './AddForm';
import FindForm from './FindForm';
import DeleteForm from './DeleteForm';
import PersistForm from './PersistForm';
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
