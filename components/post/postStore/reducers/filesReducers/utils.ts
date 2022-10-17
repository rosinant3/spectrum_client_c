export const setFileType = (type:string) => {
    return type.includes('image') ? 'images' : 'files';
};
