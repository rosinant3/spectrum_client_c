import 
    incidentFormReducer
from './incidents';
import thunkMiddleware from 'redux-thunk'
import createSagaMiddleware from 'redux-saga';

export function getIncidentFormModule() { 
    
    return {
        id: 'incident-form-module',
        reducerMap: {
            incidentForm: incidentFormReducer
        },
        middleWare: [thunkMiddleware, createSagaMiddleware],
    };
};
