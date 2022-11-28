import { changeRegisterLoginType, changeAuthType } from './Interfaces';



export const changeRegister:changeRegisterLoginType = (state, type) => {
    return { ...state, registerType: type };
};

export const changeLogin:changeRegisterLoginType = (state, type) => {
    return { ...state, loginType: type };
};

export const changeAuth:changeAuthType = (state, type) => {
    return { ...state, authType: type };
};