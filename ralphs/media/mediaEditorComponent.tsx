/*import React, { Suspense, useState, useEffect } from 'react';
const Media = React.lazy(() => import('./media'));

const useMediaEditor = (incident:number) => {
    const [ editState, setEditState ] = useState(false);
    useEffect(()=>{
        if (incident !== -1) {
            setEditState(true);
        }
    }, [incident]);
    return { editState };
}

interface ImageEditorProps {

    incident: number;
    id: number;
} 

const MediaEditor: React.FC<ImageEditorProps> = ({ id, incident }) => {

    const { editState } = useMediaEditor(incident);

    return (<React.Fragment>
        {editState && <Suspense fallback={<React.Fragment></React.Fragment>}>
            <Media id={id} incident={incident} />
        </Suspense>}
    </React.Fragment>);
}

export default MediaEditor;*/

export default {};