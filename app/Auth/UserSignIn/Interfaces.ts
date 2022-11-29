import { RefObject, FormEvent } from 'react';
import { IForm } from './Store/Interfaces';
import { InfoValues, validatorFunction } from '../../Ralphs/Validators/Interfaces'; 

export interface IFormData {
    username: string;
    password: string;
    general?: string;
};

export interface IFormInfo {
    username: InfoValues;
    password: InfoValues;
    general: InfoValues;
};

export interface IFormValidators {
    username: validatorFunction[];
    password: validatorFunction[];
    general: validatorFunction[];
};

export type formRef = RefObject<HTMLFormElement>;

interface submitArgs { 
    form: IForm;
    formRef: formRef;
};

interface submitSaveArgs { 
    form: IForm;
};

export type submitFunctionCallback = (e:FormEvent<HTMLFormElement>) => void;

interface orgSubmitRreturnObject {
    login: string; 
    submitFunction: submitFunctionCallback;
}; 

export type useSaveFormHook = (args:submitSaveArgs) => { formRef: formRef };

export type useFormSubmitHook = (args: submitArgs) => orgSubmitRreturnObject;

export interface UserSignInFormProps {};

export type SignInUserFunc = (formData:IFormData) => Promise<any>;