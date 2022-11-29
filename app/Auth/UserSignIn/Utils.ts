import { IFormValidators, IFormData, IFormInfo } from './Interfaces';
import alphaNumericValidator from "../../Ralphs/Validators/AlphaNumericalValidator/AlphaNumericalValidator";
import minLengthValidator from "../../Ralphs/Validators/MinLengthValidator/MinLengthValidator";
import maxLengthValidator from "../../Ralphs/Validators/MaxLengthValidator/MaxLengthValidator";

export const formInfo:IFormInfo = {
    username: { min: 3, max: 100, label: 'Username'},
    password: { min: 8, max: 127, label: 'Password' },
    general: { min: 0, max: 255, label: 'General' }
};

export const formValidators:IFormValidators = {
    username: [ 
        minLengthValidator(formInfo.username.min), 
        maxLengthValidator(formInfo.username.max),
        alphaNumericValidator
    ],
    password: [
        minLengthValidator(formInfo.password.min), 
        maxLengthValidator(formInfo.password.max),
    ],
    general: []
};

export const formKeys: [
    'username',
    'password',
    'general'
] = [ 
    'username',
    'password',
    'general'
];

export const generateFormData = (form:any) => {
    return {
        username: form[0].value.trim(),
        password: form[2].value,
        general: ''
    };
};

const clearString = (string:string) => {
    return string.replaceAll("\"", "");
};

export const createErrorsFromServer = (error:string) => {

    const errors = {
        username: '',
        password: '',
        general: ''
    };

    if (error.includes('Username')) {
        errors['username'] = clearString(error) + '.';
    } else if (error.includes('Password')) {
        errors['password'] = clearString(error) + '.';
    } else {
        errors['general'] = clearString(error);
    }

    return errors;
};

export const validateFormData = async (formData:IFormData) => {

    const errors = {
        username: '',
        password: '',
        general: ''
    };
    let state = false;

    for await (let key of formKeys) {
        for await (let validator of formValidators[key]) {
            const { status, msg } = validator(formData[key]);
            if (!status) {
                errors[key] = `${formInfo[key].label} ${msg}`;
                state = true;
                break;
            }
        }
    }

    return { errors, state };
};