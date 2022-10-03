import { incidentFormTypes, IGraphics, IGeometryPayload } from '../interface';

type reducerFunction = (state:incidentFormTypes, payload: any) => incidentFormTypes;

export const contentErrorReducer:reducerFunction = (state, payload) => {
    return { ...state, content: { ...state.content, error: payload.message }};
};

export const colorErrorReducer:reducerFunction = (state, payload) => {
    return { ...state, color: { ...state.color, error: payload.message }};
};

export const datepickerErrorReducer:reducerFunction = (state, payload) => {
    return { ...state, dateTime: { ...state.dateTime, error: payload.message } };
};

export const errorReducer:reducerFunction = (state, payload) => {
    return { ...state, generalError: payload.message };
};

export const waitingReducer:reducerFunction = (state, payload) => {
    return { ...state, waiting: !state.waiting };
};

export const addGraphicReducer:reducerFunction = (state, payload) => {

    const server = payload.server;
    const client = payload.client;
    const newServer = state.graphics.server.slice();
          newServer.push(server);
    const newClient = state.graphics.client;
          newClient.push(client);

    return { ...state, 
            graphics: { 
                server: newServer,
                client: newClient
    }};
};

export const deleteGraphicReducer:reducerFunction = (state, payload) => {
    const uid = payload;

    const server = state.graphics.server.filter((graphic)=>{
        return graphic[0] !== uid;
    });
    const client = state.graphics.client.filter((graphic)=>{
        return graphic.uid !== uid;
    });
    
    return { ...state, 
        graphics: { 
            server: server,
            client: client
    }};
};

export const updateGraphicReducer:reducerFunction = (state, payload) => {
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