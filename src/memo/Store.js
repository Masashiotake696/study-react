import { TYPE_ADD } from './Const';
import { TYPE_DELETE } from './Const';
import { TYPE_FIND } from './Const';
import { createStore } from 'redux';

const initialState = {
    items: [], // messageプロパティとcreated_atプロパティを持つオブジェクト配列
    message: 'Please type message',
    isFound: false,
    foundItems: [],
    increment: 1, // IDをユニークに保つための値
};

// Reducer
function memoReducer(state = initialState, action) {
    switch (action.type) {
        case TYPE_ADD:
            return addReduce(state, action);
        case TYPE_DELETE:
            return deleteReduce(state, action);
        case TYPE_FIND:
            return findReduce(state, action);
        default:
            return state;
    }
}

// Actions
function addReduce(state, action) {
    const item = {
        id: state.increment,
        message: action.message,
        created_at: new Date(),
    };

    let newItems = state.items.slice();
    newItems.unshift(item);

    return {
        items: newItems,
        message: 'Added!!!',
        isFound: false,
        foundItems: [],
        increment: state.increment + 1,
    }
}

function deleteReduce(state, action) {
    console.log(action);
    const newItems = state.items.filter(function(item) {
        return item.id !== action.id;
    });

    console.log(newItems);

    return {
        items: newItems,
        message: `Delete: No.${action.id}`,
        isFound: false,
        foundItems: [],
        increment: state.increment,
    }
}

function findReduce(state, action) {
    let foundItems = [];
    state.items.forEach((value) => {
        if (value.message.indexOf(action.keyWord) >= 0) {
            foundItems.push(value);
        }
    });

    return {
        items: state.items,
        message: `Find: ${action.keyWord}`,
        isFound: true,
        foundItems: foundItems,
        increment: state.increment
    }
}

export default createStore(memoReducer);