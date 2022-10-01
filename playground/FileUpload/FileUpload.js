import * as React from 'react';
import UploadButtons from './UploadButtons/UploadButtons';
import useFileUploadReducer, { FileUploadContext } from './FileUploadStore/FileUploadStore';
import Images from './Images/Images';


const FileUpload = () => {

  const [ state, dispatch ] = useFileUploadReducer();
 
  return (
    <FileUploadContext.Provider value={{ state, dispatch }} >
      <div>
          <UploadButtons />
          <Images />
      </div>
    </FileUploadContext.Provider>
  );
}

export default FileUpload;
