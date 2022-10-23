import { useCallback } from 'react';
import { useDispatch } from 'react-redux';



export const useResume = (fileResume:any, file: any) => {

    const dispatch = useDispatch();

    const dispatchFileResume = useCallback(()=>{

        console.log(file);
        dispatch(fileResume(file));

    }, [file]);

    return { dispatchFileResume };

};