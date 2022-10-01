import React, { useReducer } from 'react';

const initialState = {
    images: [],
    files: [],
    invalidFiles: [],
    uploading: true
};

function reducer(state, action) {
  switch (action.type) {
    case 'add_files':
    const payload = action.payload;
    const images = payload.images;
    const files = payload.files;
    const invalidFiles = payload.invalidFiles;
    return { 
        ...state, 
        images: state.images.concat(images),
        files: state.files.concat(files),
        invalidFiles: state.invalidFiles.concat(invalidFiles)
    }; 
    default:
      throw new Error();
  }
};


const useFileUploadReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return [ state, dispatch ];
};


export const FileUploadContext = React.createContext();

export default useFileUploadReducer;