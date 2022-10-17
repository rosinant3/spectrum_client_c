import React, { useState, useCallback, useEffect } from 'react';

export const useColorError = (color: { value: string; error: string; }) => {
    const [ colorError, setColorError ] = useState({ status: false, message: "" });

    useEffect(()=>{
      if (color.error !== "") {
        setColorError({ status: true, message: color.error });
      } else {
        setColorError({ status: false, message: "" });
      }
    }, [color.error]);

    return { colorError };
};