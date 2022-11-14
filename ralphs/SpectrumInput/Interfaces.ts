import { IInput } from '../Hooks/useTextField/Interfaces';

export type validatorFunction = (val:string) => { status: boolean, msg: string; };

export interface IUtils {
    validators: validatorFunction[]
};

export interface SpectrumInputProps {

    label: string;
    maxLength: number;
    input: IInput;
    required: boolean;
    readonly: boolean;
    type: string;
    multiline: boolean;
    utils: IUtils;
};