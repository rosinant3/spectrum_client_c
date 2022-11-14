import axios from 'axios';
import { Reducer, AnyAction } from 'redux';
import {
    adminTypes,
    adminActionTypes
} from './Interfaces';

const userStore: adminTypes = {

    waiting: true,  
    email: "", 
    username: "", 
    createdAt: "", 
    updatedAt: "",
    userId: -1
    
};
     
const userStoreReducer: Reducer = (state : adminTypes = userStore, action: AnyAction | adminActionTypes) => {
  
    switch (action.type) {
    case "A_pending": 
    default:
    return { ...state };
    }
}

export default userStoreReducer;  