import { useEffect, useState, useRef, useCallback } from 'react';
import { IInputRef, useCallbackFunc } from '../Hooks/useTextField/Interfaces';
import { UseFieldStatePasswordHook, UseFieldStateRepeatHook, UsePasswordHook, UseRepeatHook } from './Interfaces';
import runValidators from '../Validators/RunValidators/RunValidators';

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

export const usePassword:UsePasswordHook = ({ fieldStatePassword, setFieldStatePassword, validators }) => {

    const setFieldStateToInvalid = useCallback((text: string, status:boolean)=>{
        setFieldStatePassword({ ...fieldStatePassword, errorText: text, errorStatus: status });
    }, [fieldStatePassword]);

    const setFieldStateToTouched = useCallback(()=>{
        setFieldStatePassword({ ...fieldStatePassword, touched: true });
    }, [fieldStatePassword]);


    const passwordOnChange:useCallbackFunc = useCallback( async (e)=>{
        const target = e.target;
        const inputValue = target.value.trim();

        const { status, msg } = await runValidators(inputValue, validators);
        const isFieldValid = status && fieldStatePassword.touched === true;
        const errorMsg = `Password ${msg}`;

        if (!isFieldValid && (fieldStatePassword.errorStatus === false || 
            (fieldStatePassword.errorStatus && errorMsg !== fieldStatePassword.errorText))) {
            setFieldStateToInvalid(errorMsg, true);
        }

        if (isFieldValid && fieldStatePassword.errorStatus === true) {
            setFieldStateToInvalid('', false);
        }
        
        if (fieldStatePassword.touched === false) {
            setFieldStateToTouched();
        }

    }, [fieldStatePassword]);

    return {  passwordOnChange };
};

export const useRepeat:UseRepeatHook = ({ fieldStateRepeat, setFieldStateRepeat, inputRefPassword }) => {

    const setFieldStateToInvalid = useCallback((text: string, status:boolean)=>{
        setFieldStateRepeat({ ...fieldStateRepeat, errorText: text, errorStatus: status });
    }, [fieldStateRepeat]);

    const setFieldStateToTouched = useCallback(()=>{
        setFieldStateRepeat({ ...fieldStateRepeat, touched: true });
    }, [fieldStateRepeat]);

    const repeatOnChange:useCallbackFunc = useCallback((e)=>{
        
        const target = e.target;
        const inputValue = target.value.trim();
        const passwordRef:IInputRef = inputRefPassword;
        const passwordValue = passwordRef.current?.value.trim();

        if (inputValue !== passwordValue && fieldStateRepeat.errorStatus === false) {
            setFieldStateToInvalid(`Passwords don't match.`, true);
        } 
        
        if (inputValue === passwordValue && fieldStateRepeat.errorStatus === true) {
            setFieldStateToInvalid('', false);
        }

        if (fieldStateRepeat.touched === false) {
            setFieldStateToTouched();
        }

    }, [fieldStateRepeat, inputRefPassword]);

    return {  repeatOnChange };
};


export default {};