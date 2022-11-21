import { IInput } from '../Hooks/useTextField/Interfaces';
import { validatorFunction } from '../Validators/Interfaces';

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