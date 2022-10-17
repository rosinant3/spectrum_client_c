import { 

    addIncidentFiles,
    incidentAddFileId,
    incidentFileUploadRequest,
    incidentFileWaiting,
    incidentFileUpload,
    incidentFilePause,
    incidentFileSetProgress

} from './types';

export const incidentFileSetProgressAction = (payload:any) => {

    return {
        type: incidentFileSetProgress,
        payload: payload
    };

};

export const incidentFilePauseAction = (payload: any) => {

    return {
        type: incidentFilePause,
        payload: payload
    };
};

export const incidentFileWaitingAction = (payload: any) => {

    return {
        type: incidentFileWaiting,
        payload: payload
    };
};

export const incidentAddFileIdAction = (payload: any) => {
    return {
        type: incidentAddFileId,
        payload: payload
    };
};

export const incidentFileUploadAction = (payload:any) => {

    return {
        type: incidentFileUpload,
        payload: payload
    }
};

export const incidentFileUploadRequestAction = (payload:any) => {

    return {
        type: incidentFileUploadRequest,
        payload: payload
    }
};

export const incidentAddFilesAction = (payload: any) =>{
    return {
        type: addIncidentFiles,
        payload: payload
    };
};
