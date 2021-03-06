import React, { Component } from 'react';
import Excel from './excel/Excel';

// Appコンポーネント
class App extends Component {
    static headers = [
        'タイトル',
        '著者',
        '言語',
        '出版年',
        '売上部数',
    ];

    static initialData = [
        [
            'ワンピース',
            '山田さん',
            '日本語',
            '1954-1955',
            150
        ],
        [
            'ナルト',
            '太郎',
            '日本語',
            '1974',
            50
        ],
        [
            '進撃の巨人',
            '二郎',
            'English',
            '2000',
            100
        ],
    ];

    render() {
        return (
            React.createElement(
                Excel,
                {
                    headers: App.headers,
                    initialData: App.initialData,
                }
            )
        )
    }
}

export default App;
