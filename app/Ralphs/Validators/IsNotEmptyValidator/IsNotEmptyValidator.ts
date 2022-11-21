


const isNotEmptyValidator = (value:string) => {
    return { status: value !== '', msg: 'is invalid.' };
};


export default isNotEmptyValidator;