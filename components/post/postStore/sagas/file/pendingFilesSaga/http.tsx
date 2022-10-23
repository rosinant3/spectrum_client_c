import axios from 'axios';

export const postForm = function(this: unknown, ...args: any[]) {

    const params = args[0];

    /* 
    
          incident: {type: "number" },
      hook: {type: "string", minLength: 1, maxLength: 100 },
      currentPage: {type: "number" },
      perPage: {type: "number" },
      uploaded: { type: "number"},
      type: { type: "string", minLength: 1, maxLength: 45 }

    */

    return axios.get(`http://localhost:5000/incidents/files/select?incident=${params.incident}
    &hook=0&currentPage=2&perPage=12&uploaded=0&mimetype=/
        `);
};


const postFormHttp = () => {

     
};

export default postFormHttp;