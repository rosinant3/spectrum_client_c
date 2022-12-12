import { changeRegisterType, changeLoginType, changeAuthType } from './Types';
import { setRegister, setAuth, setLogin, generateStoreFunction } from './Interfaces';

export const setRegisterTypeAction:setRegister = (payload) => {

    return {
        payload: payload, 
        type: changeRegisterType
    };
};

export const setLoginTypeAction:setLogin = (payload) => {

    return {
        payload: payload, 
        type: changeLoginType
    };
};

export const setAuthTypeAction:setAuth = (payload) => {

    return {
        payload: payload, 
        type: changeAuthType
    };
};

const generateStore:generateStoreFunction = (state, dispatch) => {

    return {
        value: { 
          state: state,
          setRegisterTypeToUser: () => {
            dispatch(setRegisterTypeAction('user'));
          },
          setRegisterTypeToOrganization: () => {
            dispatch(setRegisterTypeAction('organization'));
          },
          setLoginTypeToUser: () => {
            dispatch(setLoginTypeAction('user'));
          },
          setLoginTypeToOrganization: () => {
            dispatch(setLoginTypeAction('organization'));
          },
          toggleAuthType: () => {
            const type = state.authType === 'login' ? 'register' : 'login';
            dispatch(setAuthTypeAction(type));
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }
    };
};

export default generateStore;
