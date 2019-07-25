import React, { Component } from 'react';
import Excel from './Excel';

// Appコンポーネント
class App extends Component {
    static headers = [
        'タイトル',
        '著者',
        '言語',
        '出版年',
        '売上部数',
    ];

    static data = [
        [
            'ワンピース',
            '山田さん',
            '日本語',
            '1954-1955',
            '150 million'
        ],
        [
            'ナルト',
            '太郎',
            '日本語',
            '1974',
            '50 million'
        ],
        [
            '進撃の巨人',
            '二郎',
            'English',
            '2000',
            '100 million'
        ],
    ];

    render() {
        return (
            React.createElement(
                Excel,
                {
                    headers: App.headers,
                    data: App.data,
                }
            )
        )
    }
}

export default App;
