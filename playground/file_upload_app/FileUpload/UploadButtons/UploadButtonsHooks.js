import { useCallback } from 'react';
import useFileUploadReducer from '../FileUploadStore/FileUploadStore';
import UploadManager from './UploadManager';

export const useFileChange = () => {

    const { state, dispatch } = useFileUploadReducer();

    const clearInvalidFiles = useCallback(()=>{
        if (!invalidFiles.length) return;
        setTimeout(()=>{
            dispatch({ type: 'clear_invalid_files' });
        }, 5000)
    }, []);

    const onFileChange = useCallback((event)=>{
        const acceptedFiles = Array.from(event.target.files);
        const fileHandler = Object.create(UploadManager);
              fileHandler.files = acceptedFiles;
        const { images, files, invalidFiles } = fileHandler.run();
        dispatch({ type: 'add_files', payload: { images, files, invalidFiles } });
        clearInvalidFiles(invalidFiles);
    }, []);

    return { onFileChange };
};