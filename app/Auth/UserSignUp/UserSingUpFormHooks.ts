import { useState, useCallback } from 'react';
import { useFormSubmitHook, submitFunctionCallback, IFormData } from './Interfaces';
import { validateFormData, generateFormData } from './Utils';
import { addErrorsAction } from './Store/Actions';

export const useFormSubmit:useFormSubmitHook =  ({ dispatch, formValidators }) => {

    const [ signUp, setSignUp ] = useState('Sign Up');

    const submitFunction:submitFunctionCallback = useCallback(async (e)=>{

        e.preventDefault(); 
        if (signUp === 'Signing Up...') return;

        const form:any = e.target;
        //const formData:IFormData = generateFormData(form);
        const formData = {
            firstName: '',
            lastName: '',
            username: '',
            email: '',
            password: '',
            repeatPassword: '',
        };

        const { errors, state } = await validateFormData(formData);
        
        if (state) { 
            dispatch(addErrorsAction(errors));
            return;
        }

        /* validateInput */
        /* sanitize input */

        setSignUp('Signing Up...');

        /* .... */


    }, [ signUp ]);




    return { signUp, submitFunction };

};












export default {};