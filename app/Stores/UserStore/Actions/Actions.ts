import { registerUserActionType, logoutUserActionType } from './Interfaces';
import { loginUser, logoutUser } from '../Types/Types';

export const registerUserAction:registerUserActionType = (payload) => {
    return {
        type: loginUser,
        payload: payload
    };
};

export const logoutUserAction:logoutUserActionType = () => {
    return {
        type: logoutUser,
        payload: null
    };
};





export default {};