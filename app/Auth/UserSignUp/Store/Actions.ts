import { addErrors, saveForm } from './Types';
import { generateStoreFunction, addErrorsGenAction, saveFormGenAction } from './Interfaces';

export const addErrorsAction:addErrorsGenAction = (payload) => {
    return {
        type: addErrors, 
        payload: payload
    };
};

export const saveFormAction:saveFormGenAction = (payload) => {
  return {
      type: saveForm, 
      payload: payload
  };
};

export const generateStore:generateStoreFunction = (state, dispatch) => {

    return {
        value: { 
          state: state,
          form: {
            addErrors: (errors) => { dispatch(addErrorsAction(errors)); },
            saveForm: (form) => { dispatch(saveFormAction(form)); }
          }
        }
    };
};