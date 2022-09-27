import { useRef, useCallback, FormEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incidentFormTypes } from '../redux/incidentForm/interface';
import { incidentFormAddAction } from '../redux/incidentForm/actions';
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
    const graphics = incidentForm.graphics.items;
    const serverGraphics = incidentForm.serverGraphics;
    const hasGraphics = graphics.length > 0;
    return { serverGraphics, graphics, hasGraphics, userId, caseId};
  });
}

export const usePostSubmit = ({ caseUrl, incidentId, selectedDate }: { caseUrl: string; incidentId: number; selectedDate: Date | null; }) => {

    const dispatch = useDispatch();
    const { isInputValid } = useValidateInput(dispatch);
    const { serverGraphics, graphics, hasGraphics, userId, caseId } = useGraphicsSelector(caseUrl);
    const contentRef:any = useRef(null);
    const colorRef:any = useRef(null);

    const submitForm = useCallback((e: FormEvent<HTMLFormElement>)=>{

      e.preventDefault(); 
      if (!contentRef.current) return;
      if (!colorRef.current) return;
      if (!selectedDate) return;
      if (!graphics) return;

      const content:string = contentRef.current.children[0].children[0].value; // risky, don't do this at home
      const data:IData = {
        selectedDate: selectedDate,
        content: content, 
        color: colorRef.current.state.hex,
        graphics: { server: serverGraphics, client: graphics }
      };

      if (!isInputValid(data)) return;

      data.caseId = caseId;
      data.userId = userId;


      dispatch(incidentFormAddAction(data));
      if (incidentId === -1) {
        
      } else {

      }
      
    }, [ contentRef, colorRef, selectedDate, graphics, hasGraphics, incidentId ]);

    return { 
      submitForm,
      contentRef,
      colorRef
    };
};
