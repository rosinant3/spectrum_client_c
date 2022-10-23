/** @jsxRuntime classic */
/** @jsx jsx */
import { ImageContainer, ImageLoadingAnimation } from './FileStyles';
import { 
  
    useOpacity, 
    useEnterAnimation,
    useFileRequest,
    useFileUpload
  
} from './fileHooks';
import { jsx } from '@emotion/react';
import RemoveIcon from './RemoveIcon/RemoveIcon';
import ResumeComponent from './ResumeComponent/ResumeComponent';
import ProcessingSpinner from './ProcessingSpinner/ProcessingSpinner';

interface FileProps {
  file: any;
  index: number;
  uploadRequest: any;
  fileUpload: any;
};

const File: React.FC<FileProps> = ({ file, index, uploadRequest, fileUpload }) => {
 
    const { url } = file;
    const opacity = useOpacity(file.progress.waiting); 
    const style = useEnterAnimation({ index });
    useFileRequest({ file, uploadRequest });
    useFileUpload({ file, fileUpload });
 
  return ( 
      <ImageContainer css={style} style={{ backgroundImage: `url(${url})` }}>
        <RemoveIcon id={file.id}></RemoveIcon>
        {!file.progress.processing ? <ResumeComponent id={file.id} type={file.type} progress={file.progress}></ResumeComponent> :
          <ProcessingSpinner />}
        {opacity && <ImageLoadingAnimation></ImageLoadingAnimation>}
      </ImageContainer>
  );
}

export default File;