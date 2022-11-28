import { IAuth, dispatchActionInterface } from './Interfaces';
import React, { useReducer } from 'react';
import { changeRegisterType, changeLoginType, changeAuthType } from './Types';
import { changeRegister, changeLogin, changeAuth } from './ReducerFunctions';
import generateStore from './Actions';
import { ProviderValue } from './Interfaces';

export const AuthContext = React.createContext({} as ProviderValue);
export const singUpText = `Don't have an account? Register.`;
export const loginText = `Already have an account? Login.`;

const initialState:IAuth = { 
  registerType: 'user',
  loginType: 'user',
  authType: 'login'
}; 
  
function reducer(state:IAuth, action: dispatchActionInterface) {
  switch (action.type) {
    case changeRegisterType:
      return changeRegister(state, action.payload);
    case changeLoginType:
      return changeLogin(state, action.payload);
    case changeAuthType:
      return changeAuth(state, action.payload);
    default:
      throw new Error();
  }
};

const useAuthStore = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { value } = generateStore(state, dispatch);
    return { authValue: value };
};

export default useAuthStore;