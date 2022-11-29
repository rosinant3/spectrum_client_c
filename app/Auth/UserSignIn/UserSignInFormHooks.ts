import { useState, useCallback, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useFormSubmitHook, submitFunctionCallback, useSaveFormHook, IFormData } from './Interfaces';
import { validateFormData, generateFormData, createErrorsFromServer } from './Utils';
import { signInUser } from './Http';
import { registerUserAction } from '../../Stores/UserStore/Actions/Actions';
import { useNavigate  } from "react-router-dom";

export const useFormSubmit:useFormSubmitHook = ({ form, formRef }) => {
 
    const [ login, setLogin ] = useState('Login');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmitError = useCallback((e:any) =>{

        if (!formRef.current) return;

        setLogin('Login');
        let error = '';

        if (e.response) {
            error = e.response.data.error;
        } else {
            error = 'Internal Server Error.'
        }

        const errors = createErrorsFromServer(error);
        form.addErrors(errors);

    }, [formRef]);

    const submitFunction:submitFunctionCallback = useCallback(async (e)=>{

        e.preventDefault(); 
        if (login === 'Loggin In...') return;

        const targetForm:any = e.target;
        const formData = generateFormData(targetForm);
        const { errors, state } = await validateFormData(formData);
        
        if (state) { 
            form.addErrors(errors);
            return;
        }

        try {

            setLogin('Loggin In...');
            delete formData.general;

            const res = await signInUser(formData);

                dispatch(registerUserAction(res.data));
                navigate("/profile");

        } catch (e:any) {
            handleSubmitError(e);
        }

    }, [ login ]);

    return { login, submitFunction };
};

export const useSaveForm:useSaveFormHook = ({ form }) => {

    const [ savedForm, setSavedForm ] = useState(null);
    const formRef = useRef(null);
 
    useEffect(()=>{
        setSavedForm(formRef.current)
    }, [formRef]);

    useEffect(()=>{
        return () => {
            if (!savedForm) return;
            const formData = generateFormData(savedForm);
            form.saveForm(formData);
        }
    }, [savedForm]);

    return { formRef };
};

export default {};