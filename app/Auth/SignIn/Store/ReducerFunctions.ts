import { changeType } from '../Interfaces';

export const changeTypeReducer:changeType = (state, type) => {
    return { ...state, type: type };
};