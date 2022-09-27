import { incidentFormTypes, IGraphics, IGeometryPayload } from './interface';

type reducerGraphicType = {  payload: IGeometryPayload, state:incidentFormTypes };
type reducerWaitingType = {  payload: null, state:incidentFormTypes };
type reducerErrorType = {  payload: { message: string; }, state:incidentFormTypes };

export const incidentFormContentErrorReducer = ({ payload, state }:reducerErrorType) => {
    return { ...state, content: { ...state.content, error: payload.message }};
};

export const incidentFormColorErrorReducer = ({ payload, state }:reducerErrorType) => {
    return { ...state, color: { ...state.color, error: payload.message }};
};

export const incidentFormDatepickerErrorReducer = ({ payload, state }:reducerErrorType) => {
    return { ...state, dateTime: { ...state.dateTime, error: payload.message } };
};

export const incidentFormErrorReducer = ({ payload, state }:reducerErrorType) => {
    return { ...state, generalError: payload.message };
};

export const indicentFormWaitingReducer = ({ payload, state }:reducerWaitingType) => {
    return { ...state, waiting: !state.waiting };
};

export const incidentFormAddGraphicReducer = ({ payload, state }: reducerGraphicType) => {
    const serverGraphics = state.serverGraphics.slice(0);
          serverGraphics.push(payload.server); 
    const items = state.graphics.items.slice(0);
          items.push({ coordinates: payload.client, uid: payload.server[0]});
    const page = { ...state.graphics.page, total: state.graphics.page.total + 1, currentPage: 3 };
    return { ...state, serverGraphics: serverGraphics, graphics: { ...state.graphics, items: items, page: page } };
};

export const incidentFormDeleteGraphicReducer = ({ payload, state }: reducerGraphicType) => {

    const items = state.graphics.items.filter((item: IGraphics)=>{
        return item.uid !== payload.uid;
    });
    const page = { ...state.graphics.page, total: state.graphics.page.total - 1 };
    return { ...state, graphics: { ...state.graphics, items: items, page: page } };
};

export const incidentFormUpdateGraphicReducer = ({ payload, state }: reducerGraphicType) => {
    /*
    const items = state.graphics.items.map((item: IGraphics)=>{
        if (item.uid === payload.uid) {
            return { ...item, coordinates: payload.coordinates };
        }
        return item;
    });
    const page = { ...state.graphics.page };
    return { ...state, graphics: { ...state.graphics, items: items, page: page } };
    */
   return { ...state };
};
