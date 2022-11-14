import { IInput } from '../../../Ralphs/Hooks/useTextField/Interfaces';

export interface dispatchActionInterface { type: string; payload: any; };

export interface ISingupStore {
    firstName: IInput;
    lastName: IInput;
    username: IInput;
    email: IInput;
    password: IInput;
    repeatPassword: IInput;
};

export type addError = (state:ISingupStore, payload: any) => ISingupStore;