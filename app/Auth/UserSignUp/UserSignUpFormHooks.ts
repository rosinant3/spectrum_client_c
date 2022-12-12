import { useState, useCallback, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useFormSubmitHook, submitFunctionCallback, useSaveFormHook, IFormData } from './Interfaces';
import { validateFormData, generateFormData, createErrorsFromServer } from './Utils';
import { signUpUser } from './Http';
import { registerUserAction } from '../../Stores/UserStore/Actions/Actions';
import { useNavigate  } from "react-router-dom";

export const useFormSubmit:useFormSubmitHook = ({ form, formRef }) => {
 
    const [ signUp, setSignUp ] = useState('Sign Up');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmitError = useCallback((e:any) =>{

        if (!formRef.current) return;

        setSignUp('Sign Up');
        let error = '';

        if (e.response && e.response.data.error) {
            error = e.response.data.error;
        } else {
            error = 'Internal Server Error.'
        }

        const errors = createErrorsFromServer(error);
        form.addErrors(errors);

    }, [formRef]);

    const submitFunction:submitFunctionCallback = useCallback(async (e)=>{

        e.preventDefault(); 
        if (signUp === 'Signing Up...') return;

        const targetForm:any = e.target;
        const formData = generateFormData(targetForm);
        const { errors, state } = await validateFormData(formData);
        
        if (state) { 
            form.addErrors(errors);
            return;
        }

        try { 

            setSignUp('Signing Up...');
            delete formData.general;

            const res = await signUpUser(formData);

                dispatch(registerUserAction(res.data)); 
                navigate("/profile");

        } catch (e:any) {
            handleSubmitError(e);
        }

    }, [ signUp ]); 

    return { signUp, submitFunction };
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