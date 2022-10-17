import { useEffect, useState } from 'react';

export const useButtonText = ({ id, waiting }: { id: number; waiting: boolean; }) => {
  
    const [ buttonText, setButtonText ] = useState('');
    useEffect(()=>{
      if (id == -1) {
        if (waiting === false) {
          setButtonText('Create');
        } else {
          setButtonText('Creating...');
        }
      } else if (id > -1) {
        if (waiting === false) {
          setButtonText('Create');
        } else {
          setButtonText('Publishing...');
        }
      }
    }, [id, waiting]);
  
    return { buttonText };
};