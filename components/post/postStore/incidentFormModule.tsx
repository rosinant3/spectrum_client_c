import incidentFormReducer from './incidentForm';
import thunkMiddleware from 'redux-thunk'
import createSagaMiddleware from 'redux-saga';
import formSaga from './sagas/formSaga/formSaga';

export function getIncidentFormModule() { 
    
    return {
        id: 'incident-form-module',
        reducerMap: {
            incidentForm: incidentFormReducer
        },
        middleWare: [thunkMiddleware, createSagaMiddleware],
        sagas: [ formSaga ]
    };
};