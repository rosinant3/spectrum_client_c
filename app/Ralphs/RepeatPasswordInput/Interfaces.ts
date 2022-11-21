import { IInput, IFieldState, useCallbackFunc } from '../Hooks/useTextField/Interfaces';
import React, { RefObject } from 'react';
import { InfoValues, validatorFunction } from '../../Ralphs/Validators/Interfaces';

export interface SpectrumRepeatPasswordInputProps {

    input: {
        password: IInput;
        repeatPassword: IInput;
    };
    utils: {
        validators: {
            password: validatorFunction[];
        }
        info: {
            password: InfoValues;
            repeatPassword: InfoValues;
        }
    }
};

type FieldStateDispatch = React.Dispatch<React.SetStateAction<IFieldState>>;

export type IInputRef = RefObject<HTMLInputElement>;

interface IReturnHookVal {
    textFieldOnChange: useCallbackFunc;
};

interface IReturnFileStatePasswordVal {
    fieldStatePassword: IFieldState,
    setFieldStatePassword: FieldStateDispatch,
    inputRefPassword: IInputRef
};


export type UseFieldStatePasswordHook = (args: { input: IInput }) => IReturnFileStatePasswordVal;

interface IReturnFileStateRepeatVal {
    fieldStateRepeat: IFieldState,
    setFieldStateRepeat: FieldStateDispatch,
    inputRefRepeat: IInputRef
};

export type UseFieldStateRepeatHook = (args: { input: IInput }) => IReturnFileStateRepeatVal;

export type TextFieldHook = (args: { required: boolean, fieldState:IFieldState, setFieldState: FieldStateDispatch }) => IReturnHookVal;

interface IPasswordHookVal {
    passwordOnChange: useCallbackFunc;
};

interface IRepeatHookVal {
    repeatOnChange: useCallbackFunc;
};

export type UsePasswordHook = (args: { fieldStatePassword:IFieldState, 
    setFieldStatePassword: FieldStateDispatch, validators: validatorFunction[] }) => IPasswordHookVal;

export type UseRepeatHook = (args: { fieldStateRepeat:IFieldState, setFieldStateRepeat: FieldStateDispatch, inputRefPassword: IInputRef }) => IRepeatHookVal;