import { IFormValidators, IFormData } from './Interfaces';
import emailValidator from "../../Ralphs/Validators/EmailValidator/EmailValidator";
import alphaNumericValidator from "../../Ralphs/Validators/AlphaNumericalValidator/AlphaNumericalValidator";
import isNotEmptyValidator from "../../Ralphs/Validators/IsNotEmptyValidator/IsNotEmptyValidator";

export const formValidators:IFormValidators = {
    firstName: [ isNotEmptyValidator ],
    lastName: [ isNotEmptyValidator ],
    username: [ isNotEmptyValidator, alphaNumericValidator ],
    email: [ isNotEmptyValidator, emailValidator ],
    password: [],
    repeatPassword: []
};

export const formKeys: [
    'firstName', 
    'lastName', 
    'username',
    'email',
    'password',
    'repeatPassword'
] = [ 
    'firstName', 
    'lastName',  
    'username',
    'email',
    'password',
    'repeatPassword'
];

export const generateFormData = (form:any) => {
    return {
        firstName: form[0].value,
        lastName: form[2].value,
        username: form[4].value,
        email: form[6].value,
        password: form[8].value,
        repeatPassword: form[10].value
    };
}

export const validateFormData = async (formData:IFormData) => {

    const errors = {
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        repeatPassword: ''
    };
    let state = false;

    for await (let key of formKeys) {
        for await (let validator of formValidators[key]) {
            const { status, msg } = validator(formData[key]);
            if (!status) {
                errors[key] = ` ${msg}`;
                state = true;
            }
        }
    }

    return { errors, state };
};