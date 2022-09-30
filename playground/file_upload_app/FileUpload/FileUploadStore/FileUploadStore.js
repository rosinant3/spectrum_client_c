import { useReducer } from 'react';

const initialState = {
    images: [],
    files: [],
    uploading: true
};

function reducer(state, action) {
  switch (action.type) {
    case 'add_images':
    return { ...state, images: state.images.concat(action.payload) };
    case 'add_files':
    return { ...state, files: state.files.concat(action.payload) };
    default:
      throw new Error();
  }
};


const useFileUploadReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return { state, dispatch };
};


export default useFileUploadReducer;