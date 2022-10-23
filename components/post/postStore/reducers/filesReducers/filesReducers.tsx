import { setFileType } from './utils';
import { incidentFormTypes } from '../../interface';

export const setPendingFilesReducer = (state: incidentFormTypes, payload: any) => {

        const newFiles = state.fileUpload.files.slice(0);
        payload.forEach((file:any)=>{
                const url = file.url.split(' ');
                file.url = url[0]; 
                file.fileId = url[1];
                file.progress = {
                        startingByte: -1,
                        loaded: 0,
                        percentage: 0,
                        waiting: false,
                        processing: false,
                        paused: false
                };
                newFiles.push(file);
        });

        return { ...state,
                fileUpload: {
                        ...state.fileUpload,
                        files: newFiles, 
                        fetched: true,
                        waiting: false
                }
        };
};

export const setPendingFilesWaitingReducer = (state:incidentFormTypes) =>{

        return {
                ...state,
                fileUpload: {
                        ...state.fileUpload,
                        waiting: true
                }
        };
};

export const addFileIdReducer = (state:incidentFormTypes, payload:any) => {

        const id = payload.id; 
        const clientId = payload.clientId;
        const newFiles = state.fileUpload.files.map((file:any)=>{
                if (file.clientId == clientId) {
                        const url = payload.url.split(' ');
                        return { 
                                ...file, 
                                id: id,  
                                fileId: url[1], 
                                url: url[0], 
                                progress: { 
                                        ...file.progress, 
                                        waiting: false
                                }};
                }
                return file;
        });
  
        return {
                ...state, 
                fileUpload: {
                        ...state.fileUpload,
                        files: newFiles,
                }
        };
};

export const setProgressReducer = (state:incidentFormTypes, payload:any) => {

        const id = payload.id;
        const newFiles = state.fileUpload.files.map((file:any)=>{
                if (file.id == id) {
                        
                        return { ...file, 
                                progress: { 
                                        waiting: file.progress.waiting,
                                        paused: file.progress.paused,
                                        processing: file.progress.processing,
                                        ...payload.progress 
                                }};
                }
                return file;
        });

        return {
                ...state, 
                fileUpload: {
                        ...state.fileUpload,
                        files: newFiles,
                }
        };
};

export const fileWaitingReducer = (state:incidentFormTypes, payload:any) => {

        const id = payload.id;
        const newFiles = state.fileUpload.files.map((file:any)=>{
                if (file.id == id || file.clientId == id) {
                        return { ...file, progress: { ...file.progress, waiting: true } };
                }
                return file;
        });

        return {
                ...state, 
                fileUpload: {
                        ...state.fileUpload,
                        files: newFiles,
                }
        }; 
};

export const filePauseReducer = (state:incidentFormTypes, payload:any) => {

        const id = payload.id;
        const newFiles = state.fileUpload.files.map((file:any)=>{
                if (file.id == id) {
                        return { ...file, progress: { 
                                ...file.progress, 
                                paused: true, 
                                startingByte: -1,
                                waiting: false }};
                }
                return file;
        });

        return {
                ...state, 
                fileUpload: {
                        ...state.fileUpload,
                        files: newFiles,
                }
        };
};

export const addFilesReducer = (state:incidentFormTypes, payload:any) => {

        const images = payload.images;
        const files = payload.files;
        const invalidFiles = payload.invalidFiles;
        const newFiles = state.fileUpload.files.slice(0);
        const newInvalidFiles = state.fileUpload.invalidFiles.slice(0);

        files.forEach((file:any)=>{
          newFiles.push(file);
        });

        images.forEach((file:any)=>{
                newFiles.push(file);
        });

        invalidFiles.forEach((file:any)=>{
          newInvalidFiles.push(file);
        });

        return {
                ...state, 
                fileUpload: {
                        ...state.fileUpload,
                        files: newFiles,
                        invalidFiles: newInvalidFiles
                }
        };
};

export default {};