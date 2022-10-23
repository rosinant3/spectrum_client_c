


export const generateFormData = (data:{ incident: number }) => {

    return { 
        incident: data.incident,
        perPage: 12,
        uploaded: 0,
        type: ''
     }; 
};
