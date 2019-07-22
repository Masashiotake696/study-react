import React, { Component } from 'react';
import { persistor } from './Store';

class PersistForm extends Component {
    static defaultStates = {
        checked: 'on'
    };

    constructor(props) {
        super(props);

        this.state = PersistForm.defaultStates;
    }

    doChange(event) {
        const checked = event.target.checked;
        this.setState({
            checked: checked
        });

        if (checked) {
            persistor.persist(); // 停止していた永続化処理を再開
            persistor.flush(); // 保留になっている変更を即座に最新状態に反映
        } else {
            persistor.pause(); // 永続化処理を一時停止
        }
    }

    render() {
        return (
            <div>
                <label>
                    <input type="checkbox" onChange={(event) => this.doChange(event)} checked={this.state.checked}  />
                    Persist
                </label>
            </div>
        )
    }
}

export default PersistForm;