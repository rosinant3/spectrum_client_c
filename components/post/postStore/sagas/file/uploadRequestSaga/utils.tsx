


export const generateFormData = (data:{ name: string, mimetype: string, url: string; }) => {
    /*const formData = new FormData();
          formData.append('name', data.name);
          formData.append('mimetype', data.type);*/
    return { name: data.name, mimetype: data.mimetype, url: data.url };
};
