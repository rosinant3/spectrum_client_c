import { setFileType } from './utils';

export const addFileIdReducer = (state:any, payload:any) => {

        const id = payload.id;
        const type = payload.type;
        const fileId = payload.fileId;
        const fileType = setFileType(type);
        const newFiles = state.fileUpload[fileType].map((file:any)=>{
                if (file.id == id) {
                        return { ...file, fileId: fileId, progress: { ...file.progress, waiting: false } };
                }
                return file;
        });
        return {
                ...state, 
                fileUpload: {
                        ...state.fileUpload,
                        [fileType]: newFiles,
                }
        };
};

export const setProgressReducer = (state:any, payload:any) => {

        const id = payload.id;
        const type = payload.type;
        const fileType = setFileType(type);
        const newFiles = state.fileUpload[fileType].map((file:any)=>{
                if (file.id == id) {
                        return { ...file, progress: { ...payload.progress } };
                }
                return file;
        });

        return {
                ...state, 
                fileUpload: {
                        ...state.fileUpload,
                        [fileType]: newFiles,
                }
        };
};

export const fileWaitingReducer = (state:any, payload:any) => {

        const id = payload.id;
        const type = payload.type;
        const fileType = setFileType(type);
        const newFiles = state.fileUpload[fileType].map((file:any)=>{
                if (file.id == id) {
                        return { ...file, progress: { ...file.progress, waiting: true } };
                }
                return file;
        });

        return {
                ...state, 
                fileUpload: {
                        ...state.fileUpload,
                        [fileType]: newFiles,
                }
        };
};

export const filePauseReducer = (state:any, payload:any) => {

        const id = payload.id;
        const type = payload.type;
        const fileType = setFileType(type);
        const newFiles = state.fileUpload[fileType].map((file:any)=>{
                if (file.id == id) {
                        return { ...file, progress: { ...file.progress, waiting: false }};
                }
                return file;
        });

        return {
                ...state, 
                fileUpload: {
                        ...state.fileUpload,
                        [fileType]: newFiles,
                }
        };
};

export const addFilesReducer = (state:any, payload:any) => {

        const images = payload.images;
        const files = payload.files;
        const invalidFiles = payload.invalidFiles;
        const newImages = state.fileUpload.images.slice(0);
        const newFiles = state.fileUpload.files.slice(0);
        const newInvalidFiles = state.fileUpload.invalidFiles.slice(0);

        images.forEach((image:any)=>{
           newImages.push(image);
        });

        files.forEach((file:any)=>{
          newFiles.push(file);
        });

        invalidFiles.forEach((file:any)=>{
          newInvalidFiles.push(file);
        });

        return {
                ...state, 
                fileUpload: {
                        images: newImages,
                        files: newFiles,
                        invalidFiles: newInvalidFiles
                }
        };
};

export default {};