import { SignInType } from '../../Ralphs/Hooks/useActiveLoginOpacity/Interfaces';

export interface dispatchActionInterface { type: string; payload: any; };

export interface ISignIn {
    type: SignInType
};

export type changeType = (state: ISignIn, payload: SignInType) => ISignIn;

export type setType = (payload: SignInType) => { type: string, payload: SignInType };
