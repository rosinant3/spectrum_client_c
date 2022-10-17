import incidentFormReducer from './incidentForm';
import thunkMiddleware from 'redux-thunk'
import createSagaMiddleware from 'redux-saga';
import formSaga from './sagas/formSaga/formSaga';
import uploadRequestSaga from './sagas/file/uploadRequestSaga/saga';
import uploadFileSaga from './sagas/file/uploadFileSaga/saga'

export function getIncidentFormModule() { 
    
    return {
        id: 'incident-form-module',
        reducerMap: {
            incidentForm: incidentFormReducer
        },
        middleWare: [thunkMiddleware, createSagaMiddleware],
        sagas: [ 

            formSaga,
            uploadRequestSaga,
            uploadFileSaga
        
        ]
    };
};