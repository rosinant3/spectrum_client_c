import { useState, useEffect, useRef, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { incidentFormTypes } from '../redux/interface';

export const useIncidents = ({ id, incident }: { id:number, incident:number }) => {
	return useSelector((state: any)=>{
		const post = state.incidentForm;
		return post;
	  });
};
/* refactoring needed? */
export const usePostSubmit = ({ id, selectedDate }: { id: number, selectedDate: Date | null }) => {
    
    const { postGraphics, hasGraphics } = useSelector((state:any)=>{
      const incidents: incidentFormTypes = state.incidentForm;
      const postGraphics = incidents.postGraphics.items;
      const hasGraphics = postGraphics.length > 0;
      return { postGraphics, hasGraphics };
    });
    
    const [ buttonText, setButtonText ] = useState('');
    const contentRef = useRef(null);
    const colorRef = useRef(null);

    useEffect(()=>{
      if (id == -1) {
        setButtonText('Create');
      } else if (id > -1) {
        setButtonText('Publish');
      }
    }, [id]);

    const submitForm = useCallback((e: any)=>{
      e.preventDefault();
      
      console.log(selectedDate);
      console.log(contentRef);
      console.log(colorRef);
      console.log(postGraphics);
  
  
    }, [contentRef, colorRef, selectedDate, postGraphics, hasGraphics]);

    return { 
      buttonText, 
      submitForm,
      contentRef,
      colorRef
    };
};
