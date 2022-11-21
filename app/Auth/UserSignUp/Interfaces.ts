import { RefObject, FormEvent } from 'react';
import { dispatchActionInterface } from './Store/Interfaces';
import { InfoValues, validatorFunction } from '../../Ralphs/Validators/Interfaces'; 

export interface IFormData {
    firstName: string,
    lastName: string,
    username: string,
    email: string,
    password: string,
    repeatPassword: string,
};

export interface IFormInfo {
    firstName: InfoValues,
    lastName: InfoValues,
    username: InfoValues,
    email: InfoValues,
    password: InfoValues,
    repeatPassword: InfoValues,
};

export interface IFormValidators {
    firstName: validatorFunction[],
    lastName: validatorFunction[],
    username: validatorFunction[],
    email: validatorFunction[],
    password: validatorFunction[],
    repeatPassword: validatorFunction[]
};

interface submitArgs {
    dispatch: React.Dispatch<dispatchActionInterface>;
    formValidators: IFormValidators
};

export type formRef = RefObject<HTMLFormElement>;

export type submitFunctionCallback = (e:FormEvent<HTMLFormElement>) => void;

interface userSubmitRreturnObject {
    signUp: string;
    submitFunction: submitFunctionCallback;
};

export type useFormSubmitHook = (args: submitArgs) => userSubmitRreturnObject;

export interface UserSignUpFormProps {};