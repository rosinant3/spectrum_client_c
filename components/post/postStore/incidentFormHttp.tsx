import axios from 'axios';
import { server } from '../../../../redux/helper';
import { IGetFunction } from './interface';
const path = server.path;
const incident = server.incident;

export const postIncident = (data:any, config:any) => {
    console.log(data);
    return axios.post(`http://localhost:5000/incidents/create`, data, config);
};
