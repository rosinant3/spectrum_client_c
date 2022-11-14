import { IInput, IFieldState, useCallbackFunc } from '../Hooks/useTextField/Interfaces';
import React, { RefObject, ChangeEvent  } from 'react';

export interface SpectrumInputProps {

    input: {
        password: IInput;
        repeatPassword: IInput;
    };
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