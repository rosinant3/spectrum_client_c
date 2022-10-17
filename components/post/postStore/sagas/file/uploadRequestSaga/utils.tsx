


export const generateFormData = (data:{ name: string, type: string }) => {
    /*const formData = new FormData();
          formData.append('name', data.name);
          formData.append('mimetype', data.type);*/
    return { name: data.name, mimetype: data.type };
};
