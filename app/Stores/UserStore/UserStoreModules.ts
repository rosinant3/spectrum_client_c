import 
    userStoreReducer
from './UserStore';
import thunkMiddleware from 'redux-thunk'
import createSagaMiddleware from 'redux-saga';

export function getUserModule() {

    return {
        id: 'user-module',
        reducerMap: {
            user: userStoreReducer
        },
        middleware: [thunkMiddleware, createSagaMiddleware]
    };
};