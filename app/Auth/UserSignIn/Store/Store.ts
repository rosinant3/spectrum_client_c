import React, { useReducer } from 'react';
import { ISignInStore, storeReducer, ProviderValue } from './Interfaces';
import { addErrors, saveForm } from './Types';
import { generateStore } from './Actions';
import { addErrorsReducer, saveFormReducer } from './ReducerFunctions';

export const UserSignInStoreContext = React.createContext({} as ProviderValue);
   
const initialState:ISignInStore = { 
  username: { value: '', error: '', readonly: false },
  password: { value: '', error: '', readonly: false },
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

const useUserLoginStore = () => { 
  const [state, dispatch] = useReducer(reducer, initialState);
  const { value } = generateStore(state, dispatch);
  return { userSignInValue: value };
}

export default useUserLoginStore;