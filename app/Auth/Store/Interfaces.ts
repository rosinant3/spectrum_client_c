export interface dispatchActionInterface { type: string; payload: any; };

export type registerLogin = 'user' | 'organization';
export type AuthType = 'login' | 'register';

export interface IAuth {
    registerType: registerLogin;
    loginType: registerLogin;
    authType: AuthType;
};

export interface ProviderValue {
    state: IAuth;
    setRegisterTypeToUser: () => void;
    setRegisterTypeToOrganization: () => void;
    setLoginTypeToUser: () => void;
    setLoginTypeToOrganization: () => void;
    toggleAuthType: () => void;
};

export type generateStoreFunction = (state: IAuth, dispatch: React.Dispatch<dispatchActionInterface>) => { value: ProviderValue };

export type changeRegisterLoginType = (state: IAuth, payload: registerLogin) => IAuth;
export type changeAuthType = (state: IAuth, payload: AuthType) => IAuth;


export type setRegister = (payload:registerLogin) => { type:string; payload: registerLogin };
export type setLogin = (payload:registerLogin) => { type:string; payload: registerLogin };
export type setAuth = (payload:AuthType) => { type:string; payload: AuthType };