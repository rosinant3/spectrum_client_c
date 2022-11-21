import { useCallback } from 'react';
import {$getRoot, $getSelection} from 'lexical';
import theme from './Theme';

export const useLexical = () => {
    
    const onChange = useCallback((editorState:any) => {
        editorState.read(() => {
          // Read the contents of the EditorState here.
          const root = $getRoot();
          const selection = $getSelection();
      
          console.log(root, selection);
        });
      }, []);

      const onError = useCallback((error:any) => {
        console.error(error);
      }, []);

      const initialConfig = {
        namespace: 'MyEditor', 
        theme,
        onError,
      };

      return { onChange, initialConfig, onError }

}




export default {};