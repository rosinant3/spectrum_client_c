import { pageType } from './interface';

export const generatePage = ():pageType => {
    return {

        currentPage: 1, 
        from: 0, 
        lastPage: 2, 
        offset: 0, 
        perPage: 12, 
        to: 0, 
        total: 0, 
        waiting: "",
        tags: 0,
        hook: 0,
        endHook: 0,
        error: "",
    };
};

export const idGenerator = () => {
    let S4 = () => Math.floor((1+Math.random())*0x10000).toString(16).substring(1); 
    let guid = `${S4()}${S4()}-${S4()}-${S4()}-${S4()}-${S4()}${S4()}${S4()}`;
    return guid.toLowerCase();  
};
