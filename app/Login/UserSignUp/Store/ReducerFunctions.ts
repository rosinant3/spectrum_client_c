import { addError } from './Interfaces';
import { formKeys } from '../Utils';



export const addErrorReducer:addError = (state, payload) => {
    const newState = { ...state };
    for (let key of formKeys) {
        newState[key] = { ...newState[key], error: payload[key] };
    }
    return newState;
};