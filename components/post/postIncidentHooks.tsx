import { useRef, useCallback, FormEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incidentFormTypes } from '../redux/incidentForm/interface';
import { incidentFormAddAction } from '../redux/incidentForm/actions/actions';
import { validationFunctions } from './postIncidentUtility';
import { IData, dataKeys } from './interface';

export const useIncidentForm = () => {
	return useSelector((state: any)=>{
		const post = state.incidentForm;
		return post;
	  });
};


const useValidateInput = (dispatch:any) => {

  const isInputValid = useCallback((data:any)=>{

    let flag = true;
    const dataKeys:dataKeys[] = [ "color", "graphics", "content", "selectedDate" ];

    dataKeys.forEach((key:dataKeys)=>{
      if (!validationFunctions[`${key}Validation`]) return;
      const validate = validationFunctions[`${key}Validation`];
      const valid = validate(data[key], dispatch);
      if (valid && flag) flag = false;
    });

    console.log(flag);
    return flag;

  }, []);

  return { isInputValid };
}

const useGraphicsSelector = (caseUrl:string) => {
 
  return useSelector((state:any)=>{
    const incidentForm: incidentFormTypes = state.incidentForm;
    const caseId = state.casesData.data[caseUrl].id;
    const userId = state.admin.login.details.iduser;
    const { server, client } = incidentForm.graphics;
    const hasGraphics = server.length > 0;
    return { server, client, hasGraphics, userId, caseId};
  });
}

export const usePostSubmit = ({ caseUrl, incidentId }: { caseUrl: string; incidentId: number; }) => {

    const dispatch = useDispatch();
    const { isInputValid } = useValidateInput(dispatch);
    const { server, client, hasGraphics, userId, caseId } = useGraphicsSelector(caseUrl);

    const submitForm = useCallback((e: FormEvent<HTMLFormElement>)=>{

      e.preventDefault(); 
      if (!server) return;
      const form:any = e.currentTarget;
      const selectedDate = form[1].value;
      const color = form[2].value;
      const content = form[3].value;

      const data:IData = {
        selectedDate: selectedDate,
        content: content, 
        color: color,
        graphics: { server: server, client: client }
      };

      console.log(data);
      return false;

      if (!isInputValid(data)) return;

      data.caseId = caseId;
      data.userId = userId;


      dispatch(incidentFormAddAction(data));
      if (incidentId === -1) {
        
      } else {

      }
      
    }, [ server, client, hasGraphics, incidentId ]);

    return { 
      submitForm
    };
};
