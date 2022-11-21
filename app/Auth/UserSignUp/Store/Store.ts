import { useReducer } from 'react';
import { ISingupStore, dispatchActionInterface } from './Interfaces';
import { addErrors } from './Types';
import { addErrorsReducer } from './ReducerFunctions';
 
const initialState:ISingupStore = { 
  firstName: { value: '', error: '', readonly: false },
  lastName: { value: '', error: '', readonly: false }, 
  username: { value: '', error: '', readonly: false },
  email: { value: '', error: '', readonly: false },
  password: { value: '', error: '', readonly: false },
  repeatPassword: { value: '', error: '', readonly: false }
}; 

function reducer(state:ISingupStore, action: dispatchActionInterface) {
  switch (action.type) {
    case addErrors:
      return addErrorsReducer(state, action.payload);
    default:
      throw new Error();
  }
};

const useSingUpStore = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return { state, dispatch };
}

export default useSingUpStore;