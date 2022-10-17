import { Reducer, AnyAction } from 'redux';
import { incidentFormTypes, incidentFormActionTypes } from './interface';
import { 
    
    incidentFormAddGraphic, 
    incidentFormDeleteGraphic,
    toggleIncidentWaiting,
    addIncident,
    incidentFormError,
    incidentFormContentError, 
    incidentFormColorError,
    incidentFormDatepickerError,

} from './actions/types'; 
import { 
    
    addGraphicReducer, 
    deleteGraphicReducer,
    waitingReducer,
    contentErrorReducer,
    datepickerErrorReducer,
    colorErrorReducer,
    errorReducer,
    
} from './reducers/incidentFormReducers';

import { 

    addIncidentFiles,
    incidentAddFileId,
    incidentFileWaiting,
    incidentFilePause,
    incidentFileSetProgress
    
} from './actions/files/types'; 
import {

    addFilesReducer,
    addFileIdReducer,
    fileWaitingReducer,
    filePauseReducer,
    setProgressReducer

} from './reducers/filesReducers/filesReducers';

const incidentForm: incidentFormTypes = {
    id: -1,
    content: { value: "", error: "" },
    video: { value: "", error: "" },
    generalError: "",
    dateTime: { value: new Date(), error: "" },
    color: { value: "rgba(46, 25, 46, 0.5)", error: "" },
    graphics: { client: [], server: [] },
    fileUpload: { images: [], files: [], invalidFiles: [] },
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
    return waitingReducer(state, null);
    case incidentFormAddGraphic:
    return addGraphicReducer(state, action.payload);
    case incidentFormDeleteGraphic:
    return deleteGraphicReducer(state, action.payload);
    case incidentFormError:
    return errorReducer(state, action.payload);
    case incidentFormContentError:
    return contentErrorReducer(state, action.payload); 
    case incidentFormColorError:
    return colorErrorReducer(state, action.payload);  
    case incidentFormDatepickerError:
    return datepickerErrorReducer(state, action.payload);   
    case addIncidentFiles:
    return addFilesReducer(state, action.payload);
    case incidentAddFileId:
    return addFileIdReducer(state, action.payload);
    case incidentFileWaiting:
    return fileWaitingReducer(state, action.payload);
    case incidentFilePause:
    return filePauseReducer(state, action.payload);
    case incidentFileSetProgress:
    return setProgressReducer(state, action.payload);
    default:
    return { ...state };
    }
}
  
export default incidentFormReducer;  