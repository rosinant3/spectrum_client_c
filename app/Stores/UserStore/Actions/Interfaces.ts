import { UserTypes } from '../Interfaces';



export type registerUserActionType = (payload:UserTypes) => { type: string, payload:UserTypes };
export type logoutUserActionType = () => { type: string, payload:null };
