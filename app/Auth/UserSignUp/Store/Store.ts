import React, { useReducer } from 'react';
import { ISignupStore, storeReducer, ProviderValue } from './Interfaces';
import { addErrors, saveForm } from './Types';
import { generateStore } from './Actions';
import { addErrorsReducer, saveFormReducer } from './ReducerFunctions';

export const UserSignUpStoreContext = React.createContext({} as ProviderValue);
   
const initialState:ISignupStore = { 
  firstName: { value: '', error: '', readonly: false },
  lastName: { value: '', error: '', readonly: false }, 
  username: { value: '', error: '', readonly: false },
  email: { value: '', error: '', readonly: false },
  password: { value: '', error: '', readonly: false },
  repeatPassword: { value: '', error: '', readonly: false },
  general: { value: '', error: '', readonly: false }
}; 

const reducer:storeReducer = (state, action) => {
  switch (action.type) {
    case addErrors:
      return addErrorsReducer(state, action.payload);
    case saveForm:
      return saveFormReducer(state, action.payload);
    default:
      throw new Error();
  }
};

const useUserSingUpStore = () => { 
  const [state, dispatch] = useReducer(reducer, initialState);
  const { value } = generateStore(state, dispatch);
  return { userSignUpValue: value };
}

export default useUserSingUpStore;