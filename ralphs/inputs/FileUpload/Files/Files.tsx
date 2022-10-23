import React from 'react';
import File from './File/File';
import { FilesContainer } from './FilesStyles';
import ActionContext from './context';

interface FilesProps {
  files: any; 
  actions: any;
};

const Files:React.FC<FilesProps> = ({ files, actions }) => {
  return ( 
      <FilesContainer>
        <ActionContext.Provider value={actions} >
          {files.map((file_:any, index:number)=>{
              return <File 
              
              key={index} 
              file={file_} 
              index={index} 
              uploadRequest={actions.uploadRequest}
              fileUpload={actions.fileUpload}
              
            />
          })}
        </ActionContext.Provider>
        
      </FilesContainer>
  );
}

export default Files;
