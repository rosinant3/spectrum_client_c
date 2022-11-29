import axios from 'axios';
import { SignInUserFunc } from './Interfaces';


export const signInUser:SignInUserFunc = (formData) => {
    return axios.post('/api/users/login', formData, { withCredentials: true });
};