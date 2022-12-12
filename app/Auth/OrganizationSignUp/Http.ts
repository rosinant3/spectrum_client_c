import axios from 'axios';
import { SignUpUserFunc } from './Interfaces';



export const signUpUser:SignUpUserFunc = (formData) => {
    return axios.post('/api/organizations/register', formData, { withCredentials: true });
};