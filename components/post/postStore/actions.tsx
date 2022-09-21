import { incidentFormAddGraphic, incidentFormDeleteGraphic } from './actionTypes';
import { IGraphics } from './interface';

export const incidentFormAddGraphicAction = (payload: IGraphics) =>{
    return {
        type: incidentFormAddGraphic,
        payload: payload
    };
};

export const incidentFormDeleteGraphicAction = (payload: IGraphics) =>{
    return {
        type: incidentFormDeleteGraphic,
        payload: payload
    };
};
