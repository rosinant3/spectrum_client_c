interface IPermissions {
    show: boolean;
    create: boolean;
};

export interface UserTypes {
    username: string,
    email: string,
    firstName: string,
    lastName: string,
    verified: 0 | 1,
    active: 0 | 1,
    userId: number;
    userType: 'user' | 'organization';
    directory: string;
    permissions: {
        blog: IPermissions;
        cases: IPermissions;
        hazards: IPermissions;
        catalog: IPermissions;
        bulletin: IPermissions;
    }
};
  
export interface adminActionTypes {
    type: any;
    payload: any;
};
  