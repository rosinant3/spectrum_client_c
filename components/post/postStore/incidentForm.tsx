import { Reducer, AnyAction } from 'redux';
import { incidentFormTypes, incidentFormActionTypes } from './interface';
import { generatePage } from '../utility';
import { 
    
    incidentFormAddGraphic, 
    incidentFormDeleteGraphic,
    toggleIncidentWaiting,
    addIncident,
    incidentFormError,
    incidentFormContentError,
    incidentFormColorError,
    incidentFormDatepickerError

} from './actionTypes'; 
import { 
    
    incidentFormAddGraphicReducer, 
    incidentFormDeleteGraphicReducer,
    indicentFormWaitingReducer,
    incidentFormContentErrorReducer,
    incidentFormDatepickerErrorReducer,
    incidentFormColorErrorReducer,
    incidentFormErrorReducer


} from './incidentFormReducers';

const incidentForm: incidentFormTypes = {
    id: -1,
    content: { value: "", error: "" },
    video: { value: "", error: "" },
    generalError: "",
    dateTime: { value: new Date(), error: "" },
    color: { value: "rgba(46, 25, 46, 0.5)", error: "" },
    images: { items: [], page: generatePage(), error: "" },
    files: { items: [], page: generatePage(), error: "" },
    videos: { items: [], page: generatePage(), error: "" },
    graphics: { items: [], page: generatePage(), error: "" },
    serverGraphics: [],
    waiting: false
    /*
    items: [],
    data: {},
    page: generatePage()
    */
};
    
const incidentFormReducer: Reducer = (state : incidentFormTypes = incidentForm, action: AnyAction | incidentFormActionTypes) => {
  
    switch (action.type) {
    case addIncident:

    return { ...state };
    case toggleIncidentWaiting:
    return indicentFormWaitingReducer({ payload: null, state });
    case incidentFormAddGraphic:
    return incidentFormAddGraphicReducer({ payload: action.payload, state });
    case incidentFormDeleteGraphic:
    return incidentFormDeleteGraphicReducer({  payload: action.payload, state });
    case incidentFormError:
    return incidentFormErrorReducer({ payload: action.payload, state });
    case incidentFormContentError:
    return incidentFormContentErrorReducer({  payload: action.payload, state }); 
    case incidentFormColorError:
    return incidentFormColorErrorReducer({  payload: action.payload, state });  
    case incidentFormDatepickerError:
    return incidentFormDatepickerErrorReducer({  payload: action.payload, state });   
    default:
    return { ...state };
    }
}
  
export default incidentFormReducer;  
