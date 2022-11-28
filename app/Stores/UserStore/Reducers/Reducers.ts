import { registerUser } from './Interfaces';



export const registerUserReducer:registerUser = (state, payload) => {
    return { ...state, ...payload };
};