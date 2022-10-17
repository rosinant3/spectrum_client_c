import { useCallback } from 'react';
import { useDispatch } from 'react-redux';



export const usePause = (filePause:any, file: any) => {

    const dispatch = useDispatch();

    const dispatchFilePause = useCallback(()=>{

        dispatch(filePause(file));

    }, []);

    return { dispatchFilePause };

};