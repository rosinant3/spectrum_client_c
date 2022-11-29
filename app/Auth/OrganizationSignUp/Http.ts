import axios from 'axios';
import { SignUpUserFunc } from './Interfaces';



export const signUpUser:SignUpUserFunc = (formData) => {
    return axios.post('/api/ogranization/register', formData, { withCredentials: true });
};