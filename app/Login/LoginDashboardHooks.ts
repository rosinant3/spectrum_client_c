import { useEffect, useState, useCallback } from 'react';

const singUpText = `Don't have an account? Register.`;
const loginText = `Already have an account? Login.`;

export const useLoginSingupToggle = () =>{

    const [ formState, setFormState ] = useState({
        state: 'register',
        text: loginText
    }); 

    const setState = useCallback(()=>{
        if (formState.state === 'login') {
            setFormState({ state: 'register', text: loginText });
        } else {
            setFormState({ state: 'login', text: singUpText });
        }
    }, [formState]);

    return { formState, setState };
};

export default {};