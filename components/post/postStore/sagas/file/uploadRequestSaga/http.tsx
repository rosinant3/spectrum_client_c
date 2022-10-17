import axios from 'axios';
import { server } from '../../../../../../../../redux/helper';

export const postForm = function(this: unknown, ...args: any[]) {
    return axios.post(`http://localhost:5000/incidents/files/upload-request`, args[0]);
};


const postFormHttp = () => {

     
};

export default postFormHttp;