import axios from 'axios';
import { server } from '../../../../../../../redux/helper';
import { IGetFunction } from '../../interface';
const path = server.path;
const incident = server.incident;

export const postForm = function(this: unknown, ...args: any[]) {
    return axios.post(`http://localhost:5000/incidents/create`, args[0]);
};


const postFormHttp = () => {

     
};

export default postFormHttp;