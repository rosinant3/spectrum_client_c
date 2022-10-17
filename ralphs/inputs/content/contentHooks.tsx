import React, { useState, useCallback, useEffect } from 'react';

export const useContent = (content_: { value: string; error: string; }) => {
    const [ contentError, setContentError ] = useState({ status: false, message: "" });
    const [ content, setContent ] = useState("");
    const contentOnChange =  useCallback((e:any) => {
        const value = e.target.value;
        setContent(value);
        if (value.trim()===""){
            setContentError({ status: true, message: "Content field is required." });
          } else {
            setContentError({ status: false, message: "" });
          }
    }, []);
    useEffect(()=>{
        setContent(content_.value);
    }, [content_.value]);

    useEffect(()=>{

      if (content_.error !== "") {
        setContentError({ status: true, message: content_.error });
      } else {
        setContentError({ status: false, message: "" });
      }
      
    }, [content_.error]);
    return { content, contentOnChange, contentError, setContent };
};