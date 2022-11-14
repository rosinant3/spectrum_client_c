import React, { Suspense } from 'react';
import { 
    EditorBodyContainer
} from './EditorBodyStyles';
import {
    EditorBodyProps
} from './Interfaces';


const EditorBody:React.FC<EditorBodyProps> = () => {
  return (
    <EditorBodyContainer>

    Editor Body Works!

    </EditorBodyContainer>
  );
} 

export default EditorBody;
