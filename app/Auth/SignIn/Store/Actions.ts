import { setType } from '../Interfaces';
import { changeType } from './Types';


export const setTypeAction:setType = (payload) => {

    return {
        payload: payload, 
        type: changeType
    };
}