import { isPlural } from '../Utils';


const minLengthValidator = (min:number) => {
    const validateMinLength = (value: string) => {
        return { status: value.length >= min, msg: `is too short.` }
    };
    return validateMinLength;
};

export default minLengthValidator;