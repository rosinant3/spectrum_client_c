import { incidentsTypes, IGraphics } from './interface';

type reducerGraphicType = {  payload: IGraphics, state:incidentsTypes};

export const incidentFormAddGraphicReducer = ({ payload, state }: reducerGraphicType) => {
    const items = state.graphics.items.slice(0);
          items.push(payload);
    const page = { ...state.graphics.page, total: state.graphics.page.total + 1, currentPage: 3 };
    return { ...state, graphics: { ...state.graphics, items: items, page: page } };
};

export const incidentFormDeleteGraphicReducer = ({ payload, state }: reducerGraphicType) => {
    const items = state.graphics.items.filter((item: IGraphics)=>{
        return item.uid !== payload.uid;
    });
    const page = { ...state.postGraphics.page, total: state.graphics.page.total - 1 };
    return { ...state, graphics: { ...state.graphics, items: items, page: page } };
};

export const incidentFormUpdateGraphicReducer = ({ payload, state }: reducerGraphicType) => {
    const items = state.graphics.items.map((item: IGraphics)=>{
        if (item.uid === payload.uid) {
            return { ...item, coordinates: payload.coordinates };
        }
        return item;
    });
    const page = { ...state.graphics.page };
    return { ...state, graphics: { ...state.graphics, items: items, page: page } };
};
