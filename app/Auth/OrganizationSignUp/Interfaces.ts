import { RefObject, FormEvent } from 'react';
import { IForm } from './Store/Interfaces';
import { InfoValues, validatorFunction } from '../../Ralphs/Validators/Interfaces'; 

export interface IFormData {
    orgName: string;
    username: string;
    email: string;
    password: string;
    repeatPassword: string;
    general?: string;
};

export interface IFormInfo {
    orgName: InfoValues;
    username: InfoValues;
    email: InfoValues;
    password: InfoValues;
    repeatPassword: InfoValues;
    general: InfoValues;
};

export interface IFormValidators {
    orgName: validatorFunction[];
    username: validatorFunction[];
    email: validatorFunction[];
    password: validatorFunction[];
    repeatPassword: validatorFunction[];
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
    signUp: string; 
    submitFunction: submitFunctionCallback;
}; 

export type useSaveFormHook = (args:submitSaveArgs) => { formRef: formRef };

export type useFormSubmitHook = (args: submitArgs) => orgSubmitRreturnObject;

export interface OrgSignUpFormProps {};

export interface OrgSignUpProps {};


export type SignUpUserFunc = (formData:IFormData) => Promise<any>;