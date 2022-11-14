import { useEffect, useState, useRef, useCallback } from 'react';
import { IInputRef, useCallbackFunc } from '../Hooks/useTextField/Interfaces';
import { UseFieldStatePasswordHook, UseFieldStateRepeatHook, UsePasswordHook, UseRepeatHook } from './Interfaces';

export const useFieldStatePassword:UseFieldStatePasswordHook = ({ input }) => {

    const inputRefPassword:IInputRef = useRef(null);
    const [ fieldStatePassword, setFieldStatePassword ] = useState({
        errorText: '',
        errorStatus: false,
        touched: false,
        init: false
    });
    
    useEffect(()=>{
        if (inputRefPassword.current) {
            inputRefPassword.current.value = input.value;
            setFieldStatePassword({ ...fieldStatePassword, init: true });
        }
    }, [input.value, inputRefPassword]); 

    useEffect(()=>{
        if (input.error !== '') {
            setFieldStatePassword({ ...fieldStatePassword, errorText: input.error, errorStatus: true });
        }
    }, [input.error]); 

    return { fieldStatePassword, setFieldStatePassword, inputRefPassword };
};

export const useFieldStateRepeat:UseFieldStateRepeatHook = ({ input }) => {

    const inputRefRepeat:IInputRef = useRef(null);
    const [ fieldStateRepeat, setFieldStateRepeat ] = useState({
        errorText: '',
        errorStatus: false,
        touched: false,
        init: false
    });
    

    useEffect(()=>{
        if (inputRefRepeat.current) {
            inputRefRepeat.current.value = input.value;
            setFieldStateRepeat({ ...fieldStateRepeat, init: true });
        }
    }, [input.value, inputRefRepeat]); 

    useEffect(()=>{
        if (input.error !== '') {
            setFieldStateRepeat({ ...fieldStateRepeat, errorText: input.error, errorStatus: true });
        }
    }, [input.error]); 

    return { fieldStateRepeat, setFieldStateRepeat, inputRefRepeat };
};

export const usePassword:UsePasswordHook = ({ fieldState, setFieldState }) => {

    const passwordOnChange:useCallbackFunc = useCallback((e)=>{
        const target = e.target;
        const inputValue = target.value.trim();

        if (inputValue === '' && fieldState.errorStatus === false && fieldState.touched === true) {
            setFieldState({ ...fieldState, errorText: 'Field is required.', errorStatus: true });
        }
        if (inputValue !== '' && fieldState.errorStatus === true && fieldState.touched === true) {
            setFieldState({ ...fieldState, errorText: '', errorStatus: false });
        }
        if (fieldState.touched === false) {
            setFieldState({ ...fieldState, touched: true });
        }
    }, [fieldState]);

    return {  passwordOnChange };
};

export const useRepeat:UseRepeatHook = ({ fieldState, setFieldState, inputRefPassword }) => {

    const repeatOnChange:useCallbackFunc = useCallback((e)=>{
        const target = e.target;
        const inputValue = target.value.trim();

        if (inputValue === '' && fieldState.errorStatus === false && fieldState.touched === true) {
            setFieldState({ ...fieldState, errorText: 'Field is required.', errorStatus: true });
        }
        if (inputValue !== '' && fieldState.errorStatus === true && fieldState.touched === true) {
            setFieldState({ ...fieldState, errorText: '', errorStatus: false });
        }
        if (fieldState.touched === false) {
            setFieldState({ ...fieldState, touched: true });
        }
    }, [fieldState]);

    return {  repeatOnChange };
};


export default {};