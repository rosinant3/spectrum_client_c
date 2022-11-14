 



const alphaNumericValidator = (value: string) => {
    const re = /^[a-zA-Z0-9]+$/;
    return { status: re.test(value), msg: 'must be alphanumeric.' }
};

export default alphaNumericValidator;