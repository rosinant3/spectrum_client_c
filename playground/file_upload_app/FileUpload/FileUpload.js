import * as React from 'react';
import UploadButtons from './UploadButtons/UploadButtons';
import useFileUploadReducer from './FileUploadStore/FileUploadStore';


const FileUpload = () => {

    const { state, dispatch } = useFileUploadReducer();
 

  return (
    <div>
        <UploadButtons />
    </div>
  );
}

export default FileUpload;
