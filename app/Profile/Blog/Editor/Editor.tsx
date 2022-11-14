import React, { Suspense } from 'react';
import { 
    EditorContainer
} from './EditorStyles';
import {
  EditorProps
} from './Interfaces';
import { ProfileContainer } from '../../../Ralphs/Styles/ProfileContainer/ProfileContainer';
import Header from '../../Header/Header';
import { useEditorType } from './EditorHooks';
import LoadingScreen from '../../../Ralphs/LoadingScreen/LoadingScreen';
const NewPost = React.lazy(() => import('../../../Ralphs/Post/NewPost/NewPost'));
const EditorBody = React.lazy(() => import('./EditorBody/EditorBody'));

const Editor:React.FC<EditorProps> = () => {

  const { editorId } = useEditorType();
 
  return (
    <ProfileContainer>
        <Header /> 
        <Suspense fallback={<LoadingScreen />}>
          <EditorContainer>
            {!editorId && <NewPost type="blog" />}
            {editorId && <EditorBody />}
          </EditorContainer>
        </Suspense>

    </ProfileContainer>
  );
}

export default Editor;
