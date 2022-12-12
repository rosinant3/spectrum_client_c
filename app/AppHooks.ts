import React, { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { registerUserAction, logoutUserAction } from './Stores/UserStore/Actions/Actions';


export const useLocalStorage = () => {

    const dispatch = useDispatch();

    const loginUser = useCallback((newValue:string | null)=> {
        if (newValue !== null) {
            dispatch(registerUserAction(JSON.parse(newValue)));
        }
    }, []);

    const logoutUser = useCallback((newValue:string | null)=> {
        if (newValue === null) {
            dispatch(logoutUserAction());
        }
    }, []);

    useEffect(()=>{

        const storageListener = (event:StorageEvent) => {

            const key = event.key;
            const newValue = event.newValue;

            if (key === 'user') {
                loginUser(newValue);
                logoutUser(newValue);
            }
        };
        window.addEventListener('storage', storageListener);

        return () => { window.removeEventListener('storage', storageListener); }

    }, []);

};


export default {};