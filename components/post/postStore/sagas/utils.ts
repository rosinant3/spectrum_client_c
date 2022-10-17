import moment from 'moment';


export const generateFormData = (data:any) => {
    const formData = new FormData();
          formData.append('dateTime', moment(data.selectedDate).format('YYYY-MM-DD HH:mm'));
          formData.append('content', data.content);
          formData.append('color', data.color);
          formData.append('graphics',  JSON.stringify(data.graphics.server));
          formData.append('caseId', data.caseId);
          formData.append('userId', data.userId);
    return formData;
};
