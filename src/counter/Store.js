import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { TYPE_INCREMENT } from './Const';
import { TYPE_DECREMENT } from './Const';
import { TYPE_RESET } from './Const';

const initialState = {
    counter: 0,
    message: "COUNTER"
};

// Reducer
function counter(state = initialState, action) {
    switch(action.type) {
        case TYPE_INCREMENT:
            return {
                counter: state.counter + 1,
                message: 'INCREMENT'
            };
        case TYPE_DECREMENT:
            return {
                counter: state.counter - 1,
                message: 'DECREMENT'
            };
        case TYPE_RESET:
            return {
                counter: initialState.counter,
                message: 'RESET'
            };
        default:
            return state;
    }
}

// Redux Persistの設定
const persistConfig = {
    key: 'root',
    storage,
};

// Persist Reducer
const persistedReducer = persistReducer(persistConfig, counter);

// store, persistor
const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };