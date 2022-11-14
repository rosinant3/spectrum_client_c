import axios, { AxiosResponse } from 'axios';
import { httpObject } from './Interfaces';


const http: httpObject = {

    blog: (data) => {

        return axios.post('/api/blog/create', data);
    },
    catalog: (data) => {

        return axios.post('/api/blog/create', data);
    },
    cases: (data) => {

        return axios.post('/api/blog/create', data);
    },
    hazards: (data) => {

        return axios.post('/api/blog/create', data);
    }
};

export default http;