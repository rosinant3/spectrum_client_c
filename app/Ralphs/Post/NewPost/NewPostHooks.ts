import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { formTypes, DispatchError, TError, ResData } from './Interfaces';
import http from './Http';
import { useNavigate } from "react-router-dom";

const handleFormError = (response:{ data: { error: string } }, setError:DispatchError) => {
    
    if (!response) {
        setError({ txt: 'Server Error.', status: true, touched: true, disabled: true })
        return;
    };

    const data = response.data;
    const error = data.error;
    setError({ txt: `${error}.`, status: true, touched: true, disabled: true });
};

const useFormSuccess = () => {

    const navigate = useNavigate();
    //const dispatch = useDispatch();

    const handleFormSuccess = useCallback((data:ResData, type:formTypes)=>{

        const { blog_post_id, url } = data;
        const url_ = url.replace(/\s+/g,'-');
        // dispatch data to editor store
        navigate(`/profile/${type}/post/${url_}`);

    }, []);

    return { handleFormSuccess };

};

export const useFormSubmit = ({ type, setError }: { type: formTypes, setError:DispatchError }) => {

    const [ create, setCreate ] = useState('Create'); 
    const { handleFormSuccess } = useFormSuccess();

    const formSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>)=>{

        if (create === 'Creating...') return;
        e.preventDefault();
        const target = e.currentTarget.elements;
        const title = target[0] as HTMLInputElement;
        const titleValue = title.value.trim();
        setCreate('Creating...');

        try { 

            const res = await http[type]({ title: titleValue });
            const data = res.data;
            handleFormSuccess(data, type);

        } catch (e:any) {

            setCreate('Create');
            const response = e.response;
            handleFormError(response, setError);
        }
    
    }, []);


    return { formSubmit, create };
};


export const useTextFieldControl = () => {

    const [ error, setError ] = useState({ txt: '', status: false, touched: false, disabled: true } as TError);

    const titleOnChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {

        const target = e.target as HTMLInputElement;
        const inputValue = target.value;

        if (inputValue.trim() === '' && error.status === false) {
            setError({ txt: `Field can't be empty.`, touched: true, status: true, disabled: true });
            return; 
        } 
        
        if (error.status === true) {
            setError({ txt: '', touched: true, status: false, disabled: false });
        }

        if (error.touched === false) {
            setError({ txt: '', touched: true, status: false, disabled: false });
        }

    }, [error]);

    return { titleOnChange, setError, error };
};