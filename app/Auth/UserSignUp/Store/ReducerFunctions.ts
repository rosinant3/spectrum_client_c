import { addError, saveForm } from './Interfaces';
import { formKeys } from '../Utils';

export const addErrorsReducer:addError = (state, payload) => {
    const newState = { ...state };
    for (let key of formKeys) {
        newState[key] = { ...newState[key], error: payload[key] };
    }
    return newState;
};

export const saveFormReducer:saveForm = (state, payload) => {
    const newState = { ...state };
    for (let key of formKeys) {
        newState[key] = { ...newState[key], value: payload[key], error: '',  };
    }
    return newState;
};