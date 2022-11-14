 


export interface adminTypes {

    waiting: boolean;
    email: string;
    username: string;
    createdAt: string;
    updatedAt: string;
    userId: number;
};
  
export interface adminActionTypes {
  
    type: any;
    login: boolean;
    pending: boolean;
    details: {

        username: string;
        email: string;
        updatedAt: string;
        createdAt: string;
        iduser: number; 

    };
    waiting: boolean;
    reason: string;
    payload: any;
};
  