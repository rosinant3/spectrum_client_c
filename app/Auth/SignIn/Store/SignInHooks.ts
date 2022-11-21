import { ISignIn, dispatchActionInterface } from '../Interfaces';
import { useReducer, useCallback } from 'react';
import { changeType } from './Types';
import { changeTypeReducer } from './ReducerFunctions';
import { setTypeAction } from './Actions';

const initialState:ISignIn = { 
    type: 'user' 
}; 
  
function reducer(state:ISignIn, action: dispatchActionInterface) {
  switch (action.type) {
    case changeType:
      return changeTypeReducer(state, action.payload);
    default:
      throw new Error();
  }
};

const useSingInStore = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const setTypeToUser = useCallback(()=>{
      dispatch(setTypeAction('user'))
    }, []);
    const setTypeToOrganization = useCallback(()=>{
      dispatch(setTypeAction('organization'))
    }, []);
    return { state, setTypeToUser, setTypeToOrganization };
};

export default useSingInStore;