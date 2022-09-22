import { Reducer, AnyAction } from 'redux';
import { incidentFormTypes, incidentFormActionTypes } from './interface';
import { generatePage } from './utility';
import { incidentFormAddGraphic, incidentFormDeleteGraphic } from './actionTypes'; 
import { incidentFormAddGraphicReducer, incidentFormDeleteGraphicReducer } from './incidentFormReducers';

const incidentForm: incidentFormTypes = {
    id: -1,
    content: { value: "", error: "" },
    video: { value: "", error: "" },
    generalError: "",
    dateTime: { value: new Date(), error: "" },
    color: { value: "rgba(46, 25, 46, 0.5)", error: "" }
    images: { items: [], page: generatePage(), error: "" },
    files: { items: [], page: generatePage(), error: "" },
    videos: { items: [], page: generatePage(), error: "" },
    graphics: { items: [], page: generatePage(), error: "" }
    /*
    items: [],
    data: {},
    page: generatePage()
    */
};
    
const incidentFormReducer: Reducer = (state : incidentFormTypes = incidentForm, action: AnyAction | incidentFormActionTypes) => {
  
    switch (action.type) {
    case incidentFormAddGraphic:
    return incidentFormAddGraphicReducer({ payload: action.payload, state });
    case incidentFormDeleteGraphic:
    return incidentFormDeleteGraphicReducer({  payload: action.payload, state });
    default:
    return { ...state };
    }
}
  
export default incidentFormReducer;  
