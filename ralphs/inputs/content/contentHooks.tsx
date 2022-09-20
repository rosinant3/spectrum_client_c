import React, { useState, useCallback, useEffect } from 'react';

export const useContent = (content_: { value: string; error: string; }) => {
    const [ contentError, setContentError ] = useState({ status: false, message: "" });
    const [ content, setContent ] = useState("");
    const contentOnChange =  useCallback((e:any) => {
        const value = e.target.value;
        setContent(value);
        if (value.trim()===""){
            setContentError({ status: true, message: "Field is required." });
          } else {
            setContentError({ status: false, message: "" });
          }
    }, []);
    useEffect(()=>{
        setContent(content_.value);
    }, [content_]);
    return { content, contentOnChange, contentError, setContent };
};
