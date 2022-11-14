import { addErrors } from './Types';





export const addErrorsAction = (payload: any) => {
    return {
        type: addErrors, 
        payload: payload
    }
};

