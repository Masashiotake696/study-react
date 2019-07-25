import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Excel.css';

class Excel extends Component {
    static defaultProps = {
        headers: [],
        initialData: [],
    }

    static propTypes = {
        headers: PropTypes.arrayOf(
            PropTypes.string
        ),
        initialData: PropTypes.arrayOf(
            PropTypes.arrayOf(
                PropTypes.any
            )
        ),
    }

    constructor(props) {
        super(props);

        this.state = {
            data: props.initialData, // データ
            sortby: null,            // ソート対象カラム(インデックス)
            desc: false,             // 並び順(昇順, 降順)
            edit: null               // 編集対象セル { row: 行番号, cell: 列番号 }
        };
    }

    _sort(event) {
        const cell = event.target.cellIndex;
        const desc = this.state.sortby === cell && !this.state.desc;
        let data = this.state.data.slice();
        data.sort((a, b) => {
            return desc
                ? (a[cell] < b[cell] ? 1 : -1)
                : (a[cell] > b[cell] ? 1 : -1)
        });
        this.setState({
            data: data,
            sortby: cell,
            desc: desc,
        });
    }

    _showEditor(event) {
        this.setState({
            edit: {
                row: parseInt(event.target.dataset.row),
                cell: event.target.cellIndex
            }
        });
    }

    _save(event) {
        event.preventDefault();
        const data = this.state.data.slice();
        data[this.state.edit.row][this.state.edit.cell] = event.target.value
                                                            ? event.target.value
                                                            : event.target.firstChild.value;
        this.setState({
            edit: null, // 編集完了
            data: data
        })
    }

    render() {
        return (
            React.createElement(
                'table',
                null,
                React.createElement(
                    'thead',
                    {
                        onClick: (event) => this._sort(event)
                    },
                    React.createElement(
                        'tr',
                        null,
                        this.props.headers.map((title, index) => (
                            React.createElement(
                                'th',
                                {
                                    key: index,
                                },
                                this.state.sortby === index
                                    ? title + (this.state.desc ? '\u2191' : '\u2193')
                                    : title
                            )
                        ))
                    )
                ),
                React.createElement(
                    'tbody',
                    {
                        onDoubleClick: (event) => this._showEditor(event)
                    },
                    this.state.data.map((row, rowIndex) => (
                        React.createElement(
                            'tr',
                            {
                                key: rowIndex
                            },
                            row.map((cell, cellIndex) => {
                                // 編集モードの場合にフォームを作成
                                const edit = this.state.edit;
                                if (edit && edit.row === rowIndex && edit.cell === cellIndex) {
                                    cell =  React.createElement(
                                        'form',
                                        {
                                            onBlur: (event) => this._save(event),
                                            onSubmit: (event) => this._save(event)
                                        },
                                        React.createElement(
                                            'input',
                                            {
                                                type: 'text',
                                                defaultValue: cell,
                                                autoFocus: true
                                            }
                                        )
                                    )
                                }

                                return React.createElement(
                                    'td',
                                    {
                                        key: cellIndex,
                                        "data-row": rowIndex,
                                    },
                                    cell
                                )
                            })
                        )
                    ))
                )
            )
        );
    }
}

export default Excel;