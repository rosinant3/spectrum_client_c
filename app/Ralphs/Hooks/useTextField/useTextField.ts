import { useState, useEffect, useCallback, useRef } from 'react';
import { TextFieldHook, UseFieldStateHook, useCallbackFunc, IInputRef } from './Interfaces';
import runValidators from '../../Validators/RunValidators/RunValidators';


export const useFieldState:UseFieldStateHook = ({ input }) => {

    const inputRef:IInputRef = useRef(null);
    const [ fieldState, setFieldState ] = useState({
        errorText: '',
        errorStatus: false,
        touched: false,
        init: false
    });

    useEffect(()=>{

        if (inputRef.current) {
            const value = input.value.trim();
            inputRef.current.value = value;
            const touched = value === '' ? false : true;
            setFieldState({ ...fieldState, init: true, touched: touched });
        }

    }, [input.value, inputRef]); 

    useEffect(()=>{
        if (input.error !== '') {
            setFieldState({ ...fieldState, errorText: `${input.error}`, errorStatus: true });
        }
    }, [input.error]); 

    return { fieldState, setFieldState, inputRef };
}

export const useTextField:TextFieldHook = ({ validators, label, fieldState, setFieldState, }) => {

    const setFieldStateToInvalid = useCallback((text: string, status:boolean)=>{
        setFieldState({ ...fieldState, errorText: text, errorStatus: status });
    }, [fieldState]);

    const setFieldStateToTouched = useCallback(()=>{
        setFieldState({ ...fieldState, touched: true });
    }, [fieldState]);

    const textFieldOnChange:useCallbackFunc = useCallback(async (e)=>{

        const target = e.target;
        const inputValue = target.value;  
        const { status, msg } = await runValidators(inputValue, validators);
        const isFieldValid = status && fieldState.touched === true;
        const errorMsg = `${label} ${msg}`;


        if (!isFieldValid && fieldState.errorStatus === false && errorMsg !== fieldState.errorText) {
            setFieldStateToInvalid(errorMsg, true);
        }

        if (isFieldValid && fieldState.errorStatus === true) {
            setFieldStateToInvalid('', false);
        }

        if (fieldState.touched === false) {
            setFieldStateToTouched();
        }
        
    }, [fieldState]);

    return {  textFieldOnChange };
};

export default {};