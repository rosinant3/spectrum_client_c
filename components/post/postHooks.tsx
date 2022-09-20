import { useState, useEffect, useRef, useCallback } from 'react';

export const useSelectedDate = (dateTime: any) => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
    useEffect(()=>{
      setSelectedDate(dateTime.value);
    }, [ dateTime ])  
    return {
      selectedDate,
      setSelectedDate
    }
};
  
export const usePostSubmit = ({ id, selectedDate }: { id: number, selectedDate: Date | null }) => {
    const [ buttonText, setButtonText ] = useState('');
    const contentRef = useRef(null);
    const colorRef = useRef(null);
    useEffect(()=>{
      if (id == -1) {
        setButtonText('Create');
      } else if (id > -1) {
        setButtonText('Update');
      }
    }, [id]);
    const submitForm = useCallback((e: any)=>{
      e.preventDefault();
      /* submit data from refs */
    }, [contentRef, colorRef, selectedDate])
    return { 
      buttonText, 
      submitForm,
      contentRef,
      colorRef
    };
};
