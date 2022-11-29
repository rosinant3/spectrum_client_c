import { IInput } from '../../../Ralphs/Hooks/useTextField/Interfaces';
import { IFormData } from '../Interfaces';

export interface dispatchActionInterface { type: string; payload: any; };

export interface ISignupStore {
    orgName: IInput;
    username: IInput;
    email: IInput;
    password: IInput;
    repeatPassword: IInput;
    general: IInput;
};

export type addError = (state:ISignupStore, payload: IFormData) => ISignupStore;
export type saveForm = (state:ISignupStore, payload: IFormData) => ISignupStore;

export type addErrorsGenAction = (pyload:IFormData) => { type: string, payload: IFormData };
export type saveFormGenAction = (pyload:IFormData) => { type: string, payload: IFormData };

export interface IForm {
    addErrors: (errors:IFormData) => void,
    saveForm: (form:IFormData) => void
};

export interface ProviderValue {
    state: ISignupStore;
    form: IForm;
};

export type generateStoreFunction = (state: ISignupStore, dispatch: React.Dispatch<dispatchActionInterface>) => { value: ProviderValue };

export type storeReducer = (state: ISignupStore, action: dispatchActionInterface) => ISignupStore;