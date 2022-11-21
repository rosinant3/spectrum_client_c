import React, { RefObject, ChangeEvent  } from 'react';
import { validatorFunction } from '../../SpectrumInput/Interfaces';

export type useCallbackFunc = (e: ChangeEvent<HTMLInputElement>) => void;

export interface IFieldState {
    errorText: string,
    errorStatus: boolean,
    touched: boolean,
    init: boolean
};

type FieldStateDispatch = React.Dispatch<React.SetStateAction<IFieldState>>;
 
export interface IInput {
    value: string;
    error: string;
    readonly: boolean;
}; 

export type IInputRef = RefObject<HTMLInputElement>;

interface IReturnHookVal {
    textFieldOnChange: useCallbackFunc;
};

interface IReturnFileStateVal {
    fieldState: IFieldState, 
    setFieldState: FieldStateDispatch,
    inputRef: IInputRef
};

export type UseFieldStateHook = (args: { input: IInput }, ) => IReturnFileStateVal;

export type TextFieldHook = (args: { 

    label: string, 
    fieldState:IFieldState, 
    setFieldState: FieldStateDispatch,
    validators: validatorFunction[]

}) => IReturnHookVal;