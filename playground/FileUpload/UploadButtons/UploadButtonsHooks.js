import React, { useCallback } from 'react';
import UploadManager from './UploadManager';
import { FileUploadContext } from '../FileUploadStore/FileUploadStore';


export const useFileChange = () => {

    const { dispatch } = React.useContext(FileUploadContext);

    const onFileChange = useCallback((event)=>{
        const acceptedFiles = Array.from(event.target.files);
        const fileHandler = Object.create(UploadManager);
              fileHandler.files = acceptedFiles;
        const { images, files, invalidFiles } = fileHandler.run();
        dispatch({ type: 'add_files', payload: { images, files, invalidFiles } });
    }, []);

    return { onFileChange };
};