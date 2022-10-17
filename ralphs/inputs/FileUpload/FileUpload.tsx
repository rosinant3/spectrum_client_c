import React from 'react';
import UploadButtons from './UploadButtons/UploadButtons';
import { FileUploadProps } from './interfaces';


const FileUpload: React.FC<FileUploadProps>  = ({ actions }) => {
  return (<UploadButtons actions={actions} />);
}

export default FileUpload;
