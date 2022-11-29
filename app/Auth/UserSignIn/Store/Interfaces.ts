import { IInput } from '../../../Ralphs/Hooks/useTextField/Interfaces';
import { IFormData } from '../Interfaces';

export interface dispatchActionInterface { type: string; payload: any; };

export interface ISignInStore {
    username: IInput;
    password: IInput;
    general: IInput;
};

export type addError = (state:ISignInStore, payload: IFormData) => ISignInStore;
export type saveForm = (state:ISignInStore, payload: IFormData) => ISignInStore;

export type addErrorsGenAction = (pyload:IFormData) => { type: string, payload: IFormData };
export type saveFormGenAction = (pyload:IFormData) => { type: string, payload: IFormData };

export interface IForm {
    addErrors: (errors:IFormData) => void,
    saveForm: (form:IFormData) => void
};

export interface ProviderValue {
    state: ISignInStore;
    form: IForm;
};

export type generateStoreFunction = (state: ISignInStore, dispatch: React.Dispatch<dispatchActionInterface>) => { value: ProviderValue };

export type storeReducer = (state: ISignInStore, action: dispatchActionInterface) => ISignInStore;