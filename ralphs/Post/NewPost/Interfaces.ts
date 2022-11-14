import { AxiosResponse } from 'axios';
import React from 'react';

interface dataInput {
    title: string;
};

export interface ResData {
    blog_post_id: number;
    url: string;
};

interface ErrorResponse {
    response: {
        data: {
            error: string;
        };
    };
};

type httpFunction = (data: dataInput) => Promise<AxiosResponse<ResData, ErrorResponse>>;

export interface httpObject {

    blog: httpFunction;
    catalog: httpFunction;
    cases: httpFunction;
    hazards: httpFunction;

};

export interface TError {
    txt: string;
    status: boolean,
    touched: boolean;
    disabled: boolean;
};

export type DispatchError = React.Dispatch<React.SetStateAction<TError>>;

export type formTypes = 'blog' | 'cases' | 'catalog' | 'hazards';

export interface NewPostProps {

    type: formTypes;
};