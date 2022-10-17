import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import UploadManager from './UploadManager';
import { actionFunction } from '../../../interfaces';


export const useFileChange = (addFiles:actionFunction) => {

    const dispatch = useDispatch();

    const onFileChange = useCallback((event:any)=>{

        const acceptedFiles = Array.from(event.target.files);
        const fileHandler = Object.create(UploadManager);
              fileHandler.files = acceptedFiles;
        const { images, files, invalidFiles } = fileHandler.run();
        dispatch(addFiles({ images, files, invalidFiles }));

    }, []);

    return { onFileChange };
};