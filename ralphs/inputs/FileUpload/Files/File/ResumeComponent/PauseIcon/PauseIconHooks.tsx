import { useCallback } from 'react';
import { useDispatch } from 'react-redux';



export const usePause = (filePause:any, file: any) => {

    const dispatch = useDispatch();

    const dispatchFilePause = useCallback(()=>{

        console.log(file);
        dispatch(filePause(file));

    }, [file]);

    return { dispatchFilePause };

};