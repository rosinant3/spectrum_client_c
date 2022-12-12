import { Reducer, AnyAction } from 'redux';
import {
    UserTypes,
    adminActionTypes
} from './Interfaces';
import { loginUser, logoutUser } from './Types/Types';
import {
    registerUserReducer
} from './Reducers/Reducers';
 
const userStore: UserTypes = {
    username: '',
    email: '',
    firstName: '',
    lastName: '',
    verified: 0,
    active: 1,
    userId: -1,
    organizationId: -1,
    userType: 'user',
    directory: '',
    permissions: {
        blog: { show: true, create: true },
        cases: { show: true, create: true },
        hazards: { show: true, create: true },
        catalog: { show: true, create: true },
        bulletin: { show: true, create: true }
    }
};

const user = localStorage.getItem('user');
const persistedState = user ? JSON.parse(user) : userStore;
     
const userStoreReducer: Reducer = (state: UserTypes = persistedState, action: AnyAction | adminActionTypes) => {
  
    switch (action.type) {
    case loginUser:
        return registerUserReducer(state, action.payload);
    case logoutUser:
        return { ...userStore };
    default:
    return { ...state };
    }
};

export default userStoreReducer;  