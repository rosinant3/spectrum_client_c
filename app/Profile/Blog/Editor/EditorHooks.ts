import { useState, useEffect } from 'react';
import { useMatch } from 'react-router';

export const useEditorType = () => {

    const match = useMatch('/profile/blog/post/:id');
    const [ editorId, setEditorId ] = useState(false as any);

    useEffect(()=>{
        if (match && match.params) {
            setEditorId(match.params.id);
        } else {
            setEditorId(false);
        }
    }, [match])

    return { editorId };
};

export default {};