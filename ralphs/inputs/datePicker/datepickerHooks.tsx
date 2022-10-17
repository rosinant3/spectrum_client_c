import React, { useState, useCallback, useEffect } from 'react';

export const useDatepickerError = (datepicker: { value: Date | null; error: string; }) => {
    const [ datepickerError, setDatepickerError ] = useState({ status: false, message: "" });

    useEffect(()=>{
      if (datepicker.error !== "") {
        setDatepickerError({ status: true, message: datepicker.error });
      } else {
        setDatepickerError({ status: false, message: "" });
      }
    }, [datepicker.error]);

    return { datepickerError };
};

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