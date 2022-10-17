import { 
    
    incidentFormAddGraphic, 
    incidentFormDeleteGraphic,
    addIncident,
    incidentFormError,
    incidentFormContentError,
    incidentFormColorError,
    incidentFormDatepickerError

} from './types';

export const incidentFormContentErrorAction = (payload: any) =>{
    return {
        type: incidentFormContentError,
        payload: payload
    };
};

export const incidentFormColorErrorAction = (payload: any) =>{
    return {
        type: incidentFormColorError,
        payload: payload
    };
};

export const incidentFormDatepickerErrorAction = (payload: any) =>{
    return {
        type: incidentFormDatepickerError,
        payload: payload
    };
};

export const incidentFormAddAction = (payload: any) =>{
    return {
        type: addIncident,
        payload: payload
    };
};

export const incidentFormErrorAction = (payload: any) =>{
    return {
        type: incidentFormError,
        payload: payload
    };
};

export const incidentFormAddGraphicAction = (payload: { server: string[], client: any }) =>{
    return {
        type: incidentFormAddGraphic,
        payload: payload
    };
};

export const incidentFormDeleteGraphicAction = (payload: number) =>{
    return {
        type: incidentFormDeleteGraphic,
        payload: payload
    };
};