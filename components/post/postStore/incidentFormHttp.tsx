import axios from 'axios';
import { server } from '../../../../../redux/helper';
import { IGetFunction } from './interface';
const path = server.path;
const incident = server.incident;

export const postIncident = (data:any, config:any) => {
    console.log(data);
    return axios.post(`http://localhost:5000/incidents/create`, data, config);
};

export const getIncidents:IGetFunction = (data, config) => {
    const hook = data.hook;
    const currentPage = data.currentPage;
    const perPage = data.perPage;
    const case_ = data.case_;
    const route = `http://localhost:5000/incidents/get?case_=${case_}&hook=${hook}&currentPage=${currentPage}&perPage=${perPage}`;
    return axios.get(route, config);
}
