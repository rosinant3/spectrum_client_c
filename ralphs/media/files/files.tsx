import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {

    FilesContainer,
    FilesItems,
    FilesItem,
    FilesItemContentOrder,
    FileIconOpacity, 
    InputContainer,
    ErrorText,

} from './filesComponents';
import { fileOnChange } from './fileHandler';

interface FilesProps {

    items: any;
    pdfsError: string;

} 


const Files: React.FC<FilesProps> = (props) => {
  
  const dispatch:any = useDispatch();
  const inputRef:any = useRef(null);
  const pdfs = props.items;
  const pdfsError = props.pdfsError;
  const store = useSelector((state: any) => { 

    const language = state.language;
    const activeLanguage = language[language.active];

    return {

      selectPdfs: activeLanguage.selectPdfs

    } 
  });
  const selectPdfs = store.selectPdfs;

  const inputOnClick = ()=>{ inputRef.current.click(); };
  const onChangeFile = (e:any)=>{ fileOnChange(e, "pdfs", dispatch, "INCIDENT") };

  return (<FilesContainer>
    <InputContainer onClick={inputOnClick}>
        <input 
            onChange={onChangeFile}
            multiple={true} 
            accept="application/pdf" 
            style={{ display: "none" }}
            type="file" 
            name="pdfInput"
            ref={inputRef} 
        />
        <span>{selectPdfs}</span> 
    </InputContainer>
    <FilesItems>
    {pdfs?.map((pdf:any)=>{

        const fileName = pdf.file.name;
        const id = pdf.id;
        const name = fileName.length > 6 ? `${fileName.slice(0, 6)}...` : (fileName);
        const dispatchOnClick = ()=>{ 
            dispatch({ type: "INCIDENT_REMOVE_FILES", payload: { value: id } });
        }
 
        return <FilesItem key={id}>
            <FilesItemContentOrder>
                <FileIconOpacity 
                    className="file-icon file-icon2"
                    data-type="pdf"
                    onClick={dispatchOnClick}
                ></FileIconOpacity>
            </FilesItemContentOrder>
            <span title={fileName}>{name}</span>
        </FilesItem>;
    })}
    </FilesItems>
    <ErrorText>{pdfsError}</ErrorText>
  </FilesContainer>);
}

export default Files;